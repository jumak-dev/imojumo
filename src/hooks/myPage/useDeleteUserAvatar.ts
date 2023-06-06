import { deleteUserAvata } from '../../apis/myPage/myPageApi';
import { DeleteUserAvatarType, UseDeleteUserAvata } from '../../types';
import useMutate from '../useMutate';

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
