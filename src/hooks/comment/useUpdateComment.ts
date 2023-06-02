import { updateComment } from '../../apis/comment';
import { Comment, CommentFormType, UseCommentFormType } from '../../types';
import useMutate from '../useMutate';

function useUpdateComment({ onSuccess, onError }: UseCommentFormType) {
  const { mutate, data, error, isLoading } = useMutate<
    CommentFormType,
    Comment
  >({
    fetchFn: updateComment,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useUpdateComment;
