import { createCommentDislike } from '../../apis/comment';
import { CommentType, UseCommentType } from '../../types';
import useMutate from '../useMutate';

function useCreateCommentDislike({ onSuccess, onError }: UseCommentType) {
  const { mutate, data, error, isLoading } = useMutate<CommentType, any>({
    fetchFn: createCommentDislike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateCommentDislike;
