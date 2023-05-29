import { deleteCommentLike } from '../../apis/comment';
import { CommentType, UseCommentType } from '../../types';
import useMutate from '../useMutate';

function useDeleteCommentLike({ onSuccess, onError }: UseCommentType) {
  const { mutate, data, error, isLoading } = useMutate<CommentType, any>({
    fetchFn: deleteCommentLike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteCommentLike;
