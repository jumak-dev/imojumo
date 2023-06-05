import { updateUserInfo } from '../../apis/myPage/myPageApi';
import { UpdateUsernameType, UseUpdateUsername } from '../../types';
import useMutate from '../useMutate';

function useUpdateUsername({ onSuccess, onError }: UseUpdateUsername) {
  const { mutate, data, error, isLoading } = useMutate<UpdateUsernameType, any>(
    {
      fetchFn: updateUserInfo,
      onSuccess,
      onError,
    },
  );

  return { mutate, data, error, isLoading };
}

export default useUpdateUsername;
