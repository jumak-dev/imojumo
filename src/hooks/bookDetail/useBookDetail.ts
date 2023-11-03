import useQuery from '../useQuery';
import getBookDetail from '../../apis/imojumo/bookDetail';
import { BookDetailInfo, UseBookDetailType } from '../../types';

function useBookDetail({
  isbn,
  token = '',
  isSuspense = false,
  isErrorBoundary = false,
}: UseBookDetailType) {
  const { data, isLoading, error } = useQuery<any, BookDetailInfo>({
    fetchFn: getBookDetail,
    arg: { isbn, token },
    isSuspense,
    isErrorBoundary,
  });

  return { data, isLoading, error };
}

export default useBookDetail;
