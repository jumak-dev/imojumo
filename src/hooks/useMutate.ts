import { useState } from 'react';

interface UseMuateProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: T | null) => void;
  onError?: (error: unknown) => void;
  onSettled?: (data: T | null, error: unknown) => void;
}

function useMutate<I, T>({
  fetchFn,
  isSuspense = false,
  isErrorBoundary = false,
  onSuccess,
  onError,
  onSettled,
}: UseMuateProps<I, T>) {
  const [promise, setPromise] = useState<Promise<void>>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'error'>(
    'pending',
  );
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();

  const resolvePromise = (promiseResult: T) => {
    setStatus('fulfilled');
    setResult(promiseResult);

    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess(promiseResult);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(promiseResult, null);
    }
  };

  const rejectPromise = (promiseError: Error) => {
    setStatus('error');
    setError(promiseError);

    if (onError && typeof onError === 'function') {
      onError(promiseError);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(null, promiseError);
    }
  };

  const mutate = async (arg: I) => {
    setStatus('pending');
    setPromise(fetchFn(arg).then(resolvePromise, rejectPromise));
  };

  if (isSuspense && status === 'pending' && promise) {
    throw promise;
  }

  if (isErrorBoundary && status === 'error') {
    throw error;
  }

  return {
    isLoading: status === 'pending',
    error,
    data: result,
    mutate,
  };
}

export default useMutate;
