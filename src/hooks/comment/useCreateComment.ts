import { createComment } from '../../apis/comment';
import { Comment, CommentFormType, UseCommentFormType } from '../../types';
import useMutate from '../useMutate';

function useCreateComment({ onSuccess, onError }: UseCommentFormType) {
  const { mutate, data, error, isLoading } = useMutate<
    CommentFormType,
    Comment
  >({
    fetchFn: createComment,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateComment;
