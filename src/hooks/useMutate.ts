import { useState } from 'react';
import { APIError, PromiseStatusType } from '../types';
import PROMISE_STATUS from '../constants/Promise';

interface UseMuateProps<I, T> {
  fetchFn: (args: I) => Promise<T>;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: T | null) => void;
  onError?: (error: Error | APIError) => void;
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
  const [status, setStatus] = useState<PromiseStatusType>(PROMISE_STATUS.IDLE);
  const [result, setResult] = useState<T>();
  const [error, setError] = useState<Error>();

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
    setStatus(PROMISE_STATUS.PENDING);
    setError(promiseError);

    if (onError && typeof onError === 'function') {
      onError(promiseError);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(null, promiseError);
    }
  };

  const mutate = async (arg: I) => {
    setStatus(PROMISE_STATUS.PENDING);
    setPromise(fetchFn(arg).then(resolvePromise, rejectPromise));
    return promise;
  };

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
    mutate,
  };
}

export default useMutate;
