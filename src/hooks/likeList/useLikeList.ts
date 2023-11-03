import useQuery from '../useQuery';
import getLikeList from '../../apis/imojumo/likeList';
import { UseLikeListsType, GetBookDiscussion } from '../../types';

function useLikeList({
  page,
  limit,
  token,
  orderBy = 'lastest',
  isSuspense = false,
  isErrorBoundary = false,
}: UseLikeListsType) {
  const { data, isLoading, error, setData } = useQuery<any, GetBookDiscussion>({
    fetchFn: getLikeList,
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

export default useLikeList;
