import { updateProConDiscussion } from '../../apis/imojumo/proConDiscussions';
import {
  APIError,
  BookDiscussionInfo,
  UpdateProConDiscussionType,
} from '../../types';

import useMutate from '../useMutate';

interface UseUpdateProConDiscussionProps {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useCreateBookDiscussion({
  onSuccess,
  onError,
}: UseUpdateProConDiscussionProps) {
  const { mutate, data, error, isLoading } = useMutate<
    UpdateProConDiscussionType,
    any
  >({
    fetchFn: updateProConDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateBookDiscussion;
