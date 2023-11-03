import { createProConDiscussion } from '../../apis/imojumo/proConDiscussions';
import {
  APIError,
  CreateProConDiscussionType,
  ProConDiscussionInfo,
} from '../../types';
import useMutate from '../useMutate';

interface UseCreateProConDiscussionProps {
  onSuccess?: (data: ProConDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useCreateProConDiscussion({
  onSuccess,
  onError,
}: UseCreateProConDiscussionProps) {
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
