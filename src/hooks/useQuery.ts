import { useCallback, useEffect, useState } from 'react';
import PROMISE_STATUS from '../constants/Promise';
import { APIError, PromiseStatusType } from '../types';

interface UseQueryProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  arg: I;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: T | null) => void;
  onError?: (error: Error | APIError) => void;
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
  const [status, setStatus] = useState<PromiseStatusType>(PROMISE_STATUS.IDLE);
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();
  const serializedArg = JSON.stringify(arg);

  const resolvePromise = (promiseResult: T) => {
    setStatus(PROMISE_STATUS.FULFILLED);
    setResult(promiseResult);

    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess(promiseResult);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(promiseResult, null);
    }
  };
  const rejectPromise = (promiseError: Error) => {
    setStatus(PROMISE_STATUS.ERROR);
    setError(promiseError);
    if (onError && typeof onError === 'function') {
      onError(promiseError);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(null, promiseError);
    }
  };

  const fetch = useCallback(() => {
    setStatus(PROMISE_STATUS.PENDING);
    setPromise(fetchFn(arg).then(resolvePromise, rejectPromise));
  }, [serializedArg]);

  useEffect(() => {
    if (enabled) fetch();
  }, [serializedArg]);

  if (isSuspense && status === PROMISE_STATUS.PENDING && promise) {
    throw promise;
  }

  if (isErrorBoundary && status === PROMISE_STATUS.ERROR) {
    throw error;
  }

  return {
    isLoading: status === PROMISE_STATUS.PENDING,
    error,
    data: result,
    refetch: fetch,
    setData: setResult,
  };
}

export default useQuery;
