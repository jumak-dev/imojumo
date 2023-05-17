import { useCallback, useEffect, useState } from 'react';

interface UseQueryProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  arg: I;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: T | null) => void;
  onError?: (error: unknown) => void;
  onSettled?: (data: T | null, error: unknown) => void;
  enabled?: boolean;
}

function useQuery<I, T>({
  fetchFn,
  arg,
  isSuspense = false,
  isErrorBoundary = false,
  enabled = true,
  onSuccess,
  onError,
  onSettled,
}: UseQueryProps<I, T>) {
  const [promise, setPromise] = useState<Promise<void>>();
  const [status, setStatus] = useState<'pending' | 'fulfilled' | 'error'>(
    'pending',
  );
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();
  const serializedArg = JSON.stringify(arg);

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

  const fetch = useCallback(() => {
    setStatus('pending');
    setPromise(fetchFn(arg).then(resolvePromise, rejectPromise));
  }, [serializedArg]);

  useEffect(() => {
    if (enabled) fetch();
  }, [serializedArg]);

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
    refetch: fetch,
  };
}

export default useQuery;
