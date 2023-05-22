import useQuery from '../useQuery';
import { getBookDiscussions } from '../../apis/imojumo/bookDisccusions';
import { UseBookDiscussionType, GetBookDiscussion } from '../../types';

function useBookDiscussion({
  page,
  limit,
  token = '',
  orderBy = 'lastest',
  isSuspense = false,
  isErrorBoundary = false,
}: UseBookDiscussionType) {
  const { data, isLoading, error, setData } = useQuery<any, GetBookDiscussion>({
    fetchFn: getBookDiscussions,
    arg: { page, limit, token, orderBy },
    isErrorBoundary,
    isSuspense,
  });

  const handleUpdateLike = (postId: number, likeSum: number) => {
    if (!setData) return;

    setData((prev) => {
      if (prev) {
        const updatedPosts = prev.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              likeCount: likeSum,
            };
          }
          return post;
        });

        return {
          ...prev,
          posts: updatedPosts,
        };
      }
      return prev;
    });
  };

  return { data, isLoading, error, setData, handleUpdateLike };
}

export default useBookDiscussion;
