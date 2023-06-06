import { deleteUserAvata } from '../../apis/myPage/myPageApi';
import { DeleteUserAvataType, UseDeleteUserAvata } from '../../types';
import useMutate from '../useMutate';

function useDeleteUserAvata({ onSuccess, onError }: UseDeleteUserAvata) {
  const { mutate, data, error, isLoading } = useMutate<
    DeleteUserAvataType,
    any
  >({
    fetchFn: deleteUserAvata,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteUserAvata;
