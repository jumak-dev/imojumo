import { deleteUserAccount } from '../../apis/myPage/myPageApi';
import { DeleteUserAccountType, UseDeleteUserAccount } from '../../types';
import useMutate from '../useMutate';

function useDeleteUserAccount({ onSuccess, onError }: UseDeleteUserAccount) {
  const { mutate, data, error, isLoading } = useMutate<
    DeleteUserAccountType,
    any
  >({
    fetchFn: deleteUserAccount,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteUserAccount;
