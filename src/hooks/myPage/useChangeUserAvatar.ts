import {
  changeUserAvatar,
  ChangeUserAvatarType,
} from '../../apis/myPage/myPageApi';
import { UserInfo } from '../../recoil/atoms';
import { APIError } from '../../types';
import useMutate from '../useMutate';

export interface UseChangeUserAvatar {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

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
