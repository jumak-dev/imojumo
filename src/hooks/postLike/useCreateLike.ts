import { createLike } from '../../apis/imojumo/postLike';
import { UsePostLikeType, PostLikeResponse } from '../../types';
import useMutate from '../useMutate';

function useCreateLike({ onSuccess, onError }: UsePostLikeType) {
  const { mutate, data, error, isLoading } = useMutate<any, PostLikeResponse>({
    fetchFn: createLike,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useCreateLike;
