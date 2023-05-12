import { useState } from 'react';

interface UseMuateProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

function useMutate<I, T>({
  fetchFn,
  isSuspense = false,
  isErrorBoundary = false,
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
  };

  const rejectPromise = (promiseError: Error) => {
    setStatus('error');
    setError(promiseError);
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
