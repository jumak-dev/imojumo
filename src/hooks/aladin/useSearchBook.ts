import useQuery from '../useQuery';
import searchAladinBook from '../../apis/aladin/searchApi';
import { AladinBookSearchResult, UseSearchAladinBookType } from '../../types';

function useSearchAladinBook({
  query,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchAladinBookType) {
  const { data, isLoading, error } = useQuery<any, AladinBookSearchResult>({
    fetchFn: searchAladinBook,
    arg: { query },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useSearchAladinBook;
