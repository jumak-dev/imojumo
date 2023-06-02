import { createCommentLike } from '../../apis/comment';
import { CommentType, UseCommentType } from '../../types';
import useMutate from '../useMutate';

function useCreateCommentLike({ onSuccess, onError }: UseCommentType) {
  const { mutate, data, error, isLoading } = useMutate<CommentType, any>({
    fetchFn: createCommentLike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateCommentLike;
