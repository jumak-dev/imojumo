import useQuery from '../useQuery';
import {
  APIError,
  Comment,
  GetProConDiscussionDetailType,
  ProConDiscussion,
} from '../../types';
import { getProConDiscussionDetail } from '../../apis/proConDiscussion';

interface UseProConDiscussionDetailProps extends GetProConDiscussionDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  delay?: number;
  onSuccess?: (data: ProConDiscussion | null) => void;
  onError?: (error: Error | APIError) => void;
}

function useProConDiscussionDetail({
  id,
  token,
  onSuccess,
  onError,
  delay = 0,
  isSuspense = false,
  isErrorBoundary = false,
}: UseProConDiscussionDetailProps) {
  const { data, isLoading, error, setData, refetch } = useQuery<
    GetProConDiscussionDetailType,
    ProConDiscussion
  >({
    fetchFn: getProConDiscussionDetail,
    arg: { id, token },
    isErrorBoundary,
    isSuspense,
    onSuccess,
    onError,
    delay,
  });

  const handleUpdateIsPro = (isPro: boolean) => {
    setData((prev) => {
      if (prev === undefined) {
        return prev;
      }

      return {
        ...prev,
        isPro,
        isVote: true,
      };
    });
  };

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
    handleUpdateIsPro,
    handleCreateComment,
    handleUpdateComment,
    handleDeleteComment,
    refetch,
  };
}

export default useProConDiscussionDetail;
