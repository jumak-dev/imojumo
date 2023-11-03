import searchDiscussions from '../../apis/imojumo/searchDiscussion';
import {
  SearchDiscussionsProps,
  SearchDiscussionsResponseType,
} from '../../types/SearchDiscussion.type';
import useQuery from '../useQuery';

interface UseSearchDiscussionType extends SearchDiscussionsProps {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  delay?: number;
}

function useSearchDiscussion({
  query,
  isbn,
  page,
  limit,
  type,
  token,
  delay = 1500,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchDiscussionType) {
  const { data, isLoading, error, setData } = useQuery<
    any,
    SearchDiscussionsResponseType
  >({
    fetchFn: searchDiscussions,
    arg: { query, isbn, page, limit, type, token },
    isErrorBoundary,
    isSuspense,
    delay,
  });

  const handleUpdateLike = (postId: number, likeCount: number) => {
    if (!setData) {
      return;
    }

    setData((prev) => {
      if (prev) {
        const updatedPosts = prev.bookResults.posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              likeCount,
            };
          }
          return post;
        });

        return {
          ...prev,
          bookResults: {
            ...prev.bookResults,
            posts: updatedPosts,
          },
        };
      }
      return prev;
    });
  };

  return { data, isLoading, error, setData, handleUpdateLike };
}

export default useSearchDiscussion;
