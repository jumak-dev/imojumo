import useQuery from '../useQuery';
import searchAladinBook from '../../apis/aladin/searchApi';
import { AladinBookSearchResult, UseSearchAladinBookType } from '../../types';

function useAladinBook({
  parameter,
  queryType,
  maxResults,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchAladinBookType) {
  const { data, isLoading, error } = useQuery<any, AladinBookSearchResult>({
    fetchFn: searchAladinBook,
    arg: { parameter, queryType, maxResults },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useAladinBook;
