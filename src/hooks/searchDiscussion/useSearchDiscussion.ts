import searchDiscussions from '../../apis/imojumo/searchDiscussion';
import {
  SearchDiscussionsProps,
  SearchDiscussionsResponseType,
} from '../../types/SearchDiscussion.type';
import useQuery from '../useQuery';

interface UseSearchDiscussionType extends SearchDiscussionsProps {
  isSuspense?: false;
  isErrorBoundary?: false;
}

function useSearchDiscussion({
  query,
  page,
  limit,
  type,
  isSuspense = false,
  isErrorBoundary = false,
}: UseSearchDiscussionType) {
  const { data, isLoading, error } = useQuery<
    any,
    SearchDiscussionsResponseType
  >({
    fetchFn: searchDiscussions,
    arg: { query, page, limit, type },
    isErrorBoundary,
    isSuspense,
  });

  return { data, isLoading, error };
}

export default useSearchDiscussion;
