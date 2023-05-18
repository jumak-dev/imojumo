import useQuery from '../useQuery';
import { getProConDiscussions } from '../../apis/imojumo/proConDiscussions';
import { UseProConDiscussionType, GetProConDiscussion } from '../../types';

function useProConDiscussion({
  page,
  limit,
  isSuspense = false,
  isErrorBoundary = false,
}: UseProConDiscussionType) {
  const { data, isLoading, error } = useQuery<any, GetProConDiscussion>({
    fetchFn: getProConDiscussions,
    arg: { page, limit },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useProConDiscussion;
