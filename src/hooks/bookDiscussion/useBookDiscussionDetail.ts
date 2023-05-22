import useQuery from '../useQuery';
import { BookDiscussionDetail, GetBookDiscussionDetailType } from '../../types';

import { getBookDiscussion } from '../../apis/bookDiscussion';

interface useBookDiscussionDetailProps extends GetBookDiscussionDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

function useBookDiscussionDetail({
  id,
  token,
  isSuspense = false,
  isErrorBoundary = false,
}: useBookDiscussionDetailProps) {
  const { data, isLoading, error } = useQuery<
    GetBookDiscussionDetailType,
    BookDiscussionDetail
  >({
    fetchFn: getBookDiscussion,
    arg: { id, token },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useBookDiscussionDetail;
