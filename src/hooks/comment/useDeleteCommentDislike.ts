import { deleteCommentDislike } from '../../apis/comment';
import { CommentType, UseCommentType } from '../../types';
import useMutate from '../useMutate';

function useDeleteCommentDislike({ onSuccess, onError }: UseCommentType) {
  const { mutate, data, error, isLoading } = useMutate<CommentType, any>({
    fetchFn: deleteCommentDislike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteCommentDislike;
