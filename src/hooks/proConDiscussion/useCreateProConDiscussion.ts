import {
  CreateProConDiscussionType,
  createProConDiscussion,
} from '../../apis/imojumo/proConDiscussions';
import { APIError, ProConDiscussionInfo } from '../../types';
import useMutate from '../useMutate';

interface UseCreateProConDiscussionPrps {
  onSuccess?: (data: ProConDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useCreateProConDiscussion({
  onSuccess,
  onError,
}: UseCreateProConDiscussionPrps) {
  const { mutate, data, error, isLoading } = useMutate<
    CreateProConDiscussionType,
    any
  >({
    fetchFn: createProConDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateProConDiscussion;
