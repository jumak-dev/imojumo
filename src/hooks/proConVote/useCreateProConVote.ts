import { createProConVote } from '../../apis/proConDiscussion';
import { APIError, CreateProConVoteType, ProConVote } from '../../types';
import useMutate from '../useMutate';

interface UseCreateProConVoteProps {
  onSuccess?: (data: ProConVote | null) => void;
  onError?: (error: Error | APIError) => void;
}

function useCreateProConVote({ onSuccess, onError }: UseCreateProConVoteProps) {
  const { mutate, data, error, isLoading } = useMutate<
    CreateProConVoteType,
    ProConVote
  >({
    fetchFn: createProConVote,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateProConVote;
