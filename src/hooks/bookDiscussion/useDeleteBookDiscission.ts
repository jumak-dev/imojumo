import { deleteBookDiscussion } from '../../apis/bookDiscussion';
import {
  APIError,
  BookDiscussionInfo,
  DeleteBookDiscussionType,
} from '../../types';

import useMutate from '../useMutate';

interface UseDeleteBookDiscussionProps {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useDeleteBookDiscussion({
  onSuccess,
  onError,
}: UseDeleteBookDiscussionProps) {
  const { mutate, data, error, isLoading } = useMutate<
    DeleteBookDiscussionType,
    any
  >({
    fetchFn: deleteBookDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteBookDiscussion;
