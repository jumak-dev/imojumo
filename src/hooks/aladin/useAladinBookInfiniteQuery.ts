import searchAladinBook from '../../apis/aladin/searchApi';
import { AladinBookSearchResult, UseSearchAladinBookType } from '../../types';
import useInfiniteQuery from '../useInfiniteQuery';

const MAX_RESULTS = 12;

function useAladinBookInfiniteQuery({
  query,
  onError,
  onSuccess,
  parameter = 'ItemSearch.aspx',
}: UseSearchAladinBookType) {
  const getNextPageParam = (
    lastResult: AladinBookSearchResult,
    results: AladinBookSearchResult[],
  ) => {
    const totalCount = results.reduce((acc, cur) => acc + cur.item.length, 0);
    if (totalCount < lastResult?.totalResults) {
      return Number(lastResult.startIndex) + 1;
    }

    return undefined;
  };

  const { error, fetchNextPage, data, hasNextPage, isLoading } =
    useInfiniteQuery<AladinBookSearchResult>({
      fetchFn: async (pageParams: number = 1) => {
        const result = searchAladinBook({
          query,
          start: pageParams,
          parameter,
          maxResults: MAX_RESULTS,
        });
        return result;
      },
      getNextPageParam,
      onError,
      onSuccess,
    });

  const isNoResult =
    !isLoading && data?.length > 0 && data[data.length - 1]?.totalResults === 0;

  return {
    error,
    fetchNextPage,
    data,
    hasNextPage,
    isLoading,
    isNoResult,
  };
}

export default useAladinBookInfiniteQuery;
