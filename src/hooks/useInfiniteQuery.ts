import { useCallback, useEffect, useRef, useState } from 'react';
import PROMISE_STATUS from '../constants/Promise';
import { APIError, PromiseStatusType } from '../types';

interface UseInfiniteQueryProps<T> {
  fetchFn: (page: number) => Promise<T>;
  getNextPageParam: (data: T, datas: T[]) => number | undefined;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: T | null) => void;
  onError?: (error: Error | APIError) => void;
  onSettled?: (data: T | null, error: unknown) => void;
  enabled?: boolean;
}

function useInfiniteQuery<T>({
  fetchFn,
  getNextPageParam,
  isSuspense = false,
  isErrorBoundary = false,
  enabled = true,
  onSuccess,
  onError,
  onSettled,
}: UseInfiniteQueryProps<T>) {
  const [promise, setPromise] = useState<Promise<void>>();
  const [status, setStatus] = useState<PromiseStatusType>(PROMISE_STATUS.IDLE);
  const [results, setResults] = useState<T[]>([]);
  const [error, setError] = useState<Error>();
  const currentPage = useRef<number | undefined>(1);

  const handleSuccess = (promiseResult: T) => {
    setStatus(PROMISE_STATUS.FULFILLED);

    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess(promiseResult);
    }

    if (onSettled && typeof onSettled === 'function') {
      onSettled(promiseResult, null);
    }
  };

  const resolveFirstPromise = (promiseResult: T) => {
    setResults([promiseResult]);
    handleSuccess(promiseResult);
  };

  const resolvePromise = (promiseResult: T) => {
    setResults((prevResults) => [...prevResults, promiseResult]);
    handleSuccess(promiseResult);
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
    if (currentPage.current === undefined) {
      return;
    }

    setStatus(PROMISE_STATUS.PENDING);
    setPromise(
      fetchFn(currentPage.current).then(resolveFirstPromise, rejectPromise),
    );
  }, [fetchFn]);

  const fetchNextPage = useCallback(() => {
    if (currentPage.current === undefined) {
      return;
    }

    setStatus(PROMISE_STATUS.PENDING);
    setPromise(
      fetchFn(currentPage.current).then(resolvePromise, rejectPromise),
    );
  }, [fetchFn]);

  const refetch = useCallback(() => {
    if (results.length > 0 && currentPage.current !== undefined) {
      currentPage.current -= 1;
      setResults((prevResults) =>
        prevResults.splice(0, prevResults.length - 1),
      );
    }
    fetchNextPage();
  }, [fetchFn]);

  useEffect(() => {
    currentPage.current = 1;
    if (enabled) {
      fetch();
    }
  }, []);

  useEffect(() => {
    currentPage.current = getNextPageParam(
      results[results.length - 1],
      results,
    );
  }, [results]);

  if (isSuspense && status === PROMISE_STATUS.PENDING && promise) {
    throw promise;
  }

  if (isErrorBoundary && status === PROMISE_STATUS.ERROR) {
    throw error;
  }

  return {
    error,
    refetch,
    fetchNextPage,
    data: results,
    setData: setResults,
    hasNextPage: currentPage.current !== undefined,
    isLoading: status === PROMISE_STATUS.PENDING,
  };
}

export default useInfiniteQuery;
