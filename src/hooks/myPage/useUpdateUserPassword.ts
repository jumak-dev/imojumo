import { updateUserPassword } from '../../apis/myPage/myPageApi';
import { UpdateUserPasswordType, UseUpdateUserPassword } from '../../types';
import useMutate from '../useMutate';

function useUpdateUserPassword({ onSuccess, onError }: UseUpdateUserPassword) {
  const { mutate, data, error, isLoading } = useMutate<
    UpdateUserPasswordType,
    any
  >({
    fetchFn: updateUserPassword,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useUpdateUserPassword;
