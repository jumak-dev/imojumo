import { deleteProConDiscussion } from '../../apis/proConDiscussion';
import { APIError, DeleteProConDiscussionType } from '../../types';
import useMutate from '../useMutate';

interface UseDeleteProConDiscussionProps {
  onSuccess?: () => void;
  onError?: (error: Error | APIError) => void;
}

function useDeleteProConDiscussion({
  onSuccess,
  onError,
}: UseDeleteProConDiscussionProps) {
  const { mutate, data, error, isLoading } = useMutate<
    DeleteProConDiscussionType,
    any
  >({
    fetchFn: deleteProConDiscussion,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteProConDiscussion;
