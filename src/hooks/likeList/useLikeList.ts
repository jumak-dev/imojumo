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

  return { data, isLoading, error, setData };
}

export default useLikeList;
