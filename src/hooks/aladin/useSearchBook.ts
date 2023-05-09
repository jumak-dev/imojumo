import useFetch from '../useFetch';
import searchAladinBook, {
  SearchAladinBookType,
} from '../../apis/aladin/searchApi';
import { AladinBookSearchResult } from '../../types';

interface UseSearchAladinBookType extends SearchAladinBookType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

const useSearchAladinBook = ({
  query,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchAladinBookType) => {
  const { data, isLoading, error } = useFetch<any, AladinBookSearchResult>({
    fetchFn: searchAladinBook,
    arg: { query },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
};

export default useSearchAladinBook;
