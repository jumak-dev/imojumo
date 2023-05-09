import { useCallback, useEffect, useState } from 'react';

interface UseFetchProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  arg: I;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

function useFetch<I, T>({
  fetchFn,
  arg,
  isSuspense = false,
  isErrorBoundary = false,
}: UseFetchProps<I, T>) {
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
  };
  const rejectPromise = (promiseError: Error) => {
    setStatus('error');
    setError(promiseError);
  };

  const fetch = useCallback(() => {
    setStatus('pending');
    setPromise(fetchFn(arg).then(resolvePromise, rejectPromise));
  }, [serializedArg]);

  useEffect(() => {
    fetch();
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

export default useFetch;
