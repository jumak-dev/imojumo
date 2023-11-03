import useQuery from '../useQuery';
import {
  APIError,
  BookDiscussionDetail,
  Comment,
  GetBookDiscussionDetailType,
} from '../../types';

import { getBookDiscussion } from '../../apis/bookDiscussion';

interface UseBookDiscussionDetailProps extends GetBookDiscussionDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: BookDiscussionDetail | null) => void;
  onError?: (error: Error | APIError) => void;
}

function useBookDiscussionDetail({
  id,
  token,
  onSuccess,
  onError,
  isSuspense = false,
  isErrorBoundary = false,
}: UseBookDiscussionDetailProps) {
  const { data, isLoading, error, setData } = useQuery<
    GetBookDiscussionDetailType,
    BookDiscussionDetail
  >({
    fetchFn: getBookDiscussion,
    arg: { id, token },
    isErrorBoundary,
    isSuspense,
    onSuccess,
    onError,
  });

  const handleCreateComment = (comment: Comment) => {
    setData((prev) => {
      if (!prev) {
        return prev;
      }

      return {
        ...prev,
        comments: [comment, ...prev.comments],
      };
    });
  };

  const handleUpdateComment = (commentId: number, content: string) => {
    setData((prev) => {
      if (!prev) {
        return prev;
      }

      const updatedComments = prev.comments.map((comment) =>
        comment.id === commentId ? { ...comment, content } : comment,
      );

      return {
        ...prev,
        comments: updatedComments,
      };
    });
  };

  const handleDeleteComment = (commentId: number) => {
    setData((prev) => {
      if (!prev) {
        return prev;
      }

      const updatedComments = prev.comments.filter(
        (comment) => comment.id !== commentId,
      );

      return {
        ...prev,
        comments: updatedComments,
      };
    });
  };

  return {
    data,
    isLoading,
    error,
    handleCreateComment,
    handleUpdateComment,
    handleDeleteComment,
  };
}

export default useBookDiscussionDetail;
