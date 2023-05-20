import useQuery from '../useQuery';
import { getBookDiscussions } from '../../apis/imojumo/bookDisccusions';
import { UseBookDiscussionType, GetBookDiscussion } from '../../types';

function useBookDiscussion({
  page,
  limit,
  token = '',
  orderBy = 'lastest',
  isSuspense = false,
  isErrorBoundary = false,
}: UseBookDiscussionType) {
  const { data, isLoading, error } = useQuery<any, GetBookDiscussion>({
    fetchFn: getBookDiscussions,
    arg: { page, limit, token, orderBy },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useBookDiscussion;
