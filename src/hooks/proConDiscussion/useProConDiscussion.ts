import useQuery from '../useQuery';
import { getProConDiscussions } from '../../apis/imojumo/proConDiscussions';
import { UseProConDiscussionType, GetProConDiscussion } from '../../types';

function useProConDiscussion({
  page,
  limit,
  token = '',
  isSuspense = false,
  isErrorBoundary = false,
  myPostsOnly = false,
  enabled = true,
  onSuccess,
}: UseProConDiscussionType) {
  const { data, isLoading, error } = useQuery<any, GetProConDiscussion>({
    fetchFn: getProConDiscussions,
    arg: { page, limit, myPostsOnly, token },
    isErrorBoundary,
    isSuspense,
    enabled,
    onSuccess,
  });

  return { data, isLoading, error };
}

export default useProConDiscussion;
