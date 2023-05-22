import { updateBookDiscussion } from '../../apis/imojumo/bookDisccusions';
import {
  APIError,
  BookDiscussionInfo,
  UpdateBookDiscussionType,
} from '../../types';

import useMutate from '../useMutate';

interface UseUpdateBookDiscussionProps {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useUpdateBookDiscussion({
  onSuccess,
  onError,
}: UseUpdateBookDiscussionProps) {
  const { mutate, data, error, isLoading } = useMutate<
    UpdateBookDiscussionType,
    any
  >({
    fetchFn: updateBookDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useUpdateBookDiscussion;
