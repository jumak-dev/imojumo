import { GetMyPageComments } from '../../types/MyPage.type';
import { UseMyCommmentsType } from '../../types';
import useQuery from '../useQuery';
import { getMyPageComments } from '../../apis/myPage/myPageApi';

function useMyComments({
  page,
  limit,
  token = '',
  isSuspense = false,
  isErrorBoundary = false,
  enabled = true,
  onSuccess,
}: UseMyCommmentsType) {
  const { data, isLoading, error } = useQuery<any, GetMyPageComments>({
    fetchFn: getMyPageComments,
    arg: { page, limit, token },
    isErrorBoundary,
    isSuspense,
    enabled,
    onSuccess,
  });

  return { data, isLoading, error };
}

export default useMyComments;
