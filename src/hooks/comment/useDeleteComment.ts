import { deleteComment } from '../../apis/comment';
import { CommentType, UseCommentType } from '../../types';
import useMutate from '../useMutate';

function useDeleteComment({ onSuccess, onError }: UseCommentType) {
  const { mutate, data, error, isLoading } = useMutate<CommentType, any>({
    fetchFn: deleteComment,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteComment;
