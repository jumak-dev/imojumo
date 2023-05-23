import useQuery from '../useQuery';
import {
  APIError,
  BookDiscussionDetail,
  GetBookDiscussionDetailType,
} from '../../types';

import { getBookDiscussion } from '../../apis/bookDiscussion';

interface UseBookDiscussionDetailProps extends GetBookDiscussionDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: BookDiscussionDetail | null) => void;
  onError?: (error: Error | APIError) => void;
}

function useBookDiscussionDetail({
  id,
  token,
  onSuccess,
  onError,
  isSuspense = false,
  isErrorBoundary = false,
}: UseBookDiscussionDetailProps) {
  const { data, isLoading, error } = useQuery<
    GetBookDiscussionDetailType,
    BookDiscussionDetail
  >({
    fetchFn: getBookDiscussion,
    arg: { id, token },
    isErrorBoundary,
    isSuspense,
    onSuccess,
    onError,
  });

  return { data, isLoading, error };
}

export default useBookDiscussionDetail;
