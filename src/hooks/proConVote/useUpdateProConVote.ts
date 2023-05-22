import { updateProConVote } from '../../apis/proConDiscussion';
import { APIError, ProConVote, UpdateProConVoteType } from '../../types';
import useMutate from '../useMutate';

interface UseUpdateProConVoteProps {
  onSuccess?: (data: ProConVote | null) => void;
  onError?: (error: Error | APIError) => void;
}

function useUpdateProConVote({ onSuccess, onError }: UseUpdateProConVoteProps) {
  const { mutate, data, error, isLoading } = useMutate<
    UpdateProConVoteType,
    ProConVote
  >({
    fetchFn: updateProConVote,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useUpdateProConVote;
