import { login } from '../../apis/auth';
import { LoginType, UseLogin } from '../../types';
import useMutate from '../useMutate';

function useLogin({ onSuccess, onError }: UseLogin) {
  const { mutate, data, error, isLoading } = useMutate<LoginType, any>({
    fetchFn: login,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useLogin;
