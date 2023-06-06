import { changeUserAvatar } from '../../apis/myPage/myPageApi';
import { ChangeUserAvatarType, UseChangeUserAvatar } from '../../types';
import useMutate from '../useMutate';

function useChangeUserAvatar({ onSuccess, onError }: UseChangeUserAvatar) {
  const { mutate, data, error, isLoading } = useMutate<
    ChangeUserAvatarType,
    any
  >({
    fetchFn: changeUserAvatar,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useChangeUserAvatar;
