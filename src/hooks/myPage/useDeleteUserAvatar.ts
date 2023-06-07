import {
  deleteUserAvata,
  DeleteUserAvatarType,
} from '../../apis/myPage/myPageApi';
import { UserInfo } from '../../recoil/atoms';
import { APIError } from '../../types';
import useMutate from '../useMutate';

export interface UseDeleteUserAvata {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useDeleteUserAvatar({ onSuccess, onError }: UseDeleteUserAvata) {
  const { mutate, data, error, isLoading } = useMutate<
    DeleteUserAvatarType,
    any
  >({
    fetchFn: deleteUserAvata,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteUserAvatar;
