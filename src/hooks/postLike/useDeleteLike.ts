import { deleteLike } from '../../apis/imojumo/postLike';
import { UsePostLikeType, PostLikeResponse } from '../../types';
import useMutate from '../useMutate';

function useDeleteLike({ onSuccess, onError }: UsePostLikeType) {
  const { mutate, data, error, isLoading } = useMutate<any, PostLikeResponse>({
    fetchFn: deleteLike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteLike;
