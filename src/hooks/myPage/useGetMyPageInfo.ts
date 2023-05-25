import useQuery from '../useQuery';
import searchAladinBook from '../../apis/aladin/searchApi';
import { myPageInfoProps, UseSearchAladinBookType } from '../../types';

function useGetMyPageInfo({
  query,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchAladinBookType) {
  const { data, isLoading, error } = useQuery<any, myPageInfoProps>({
    fetchFn: searchAladinBook,
    arg: { query },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useGetMyPageInfo;
