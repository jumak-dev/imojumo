import { login, LoginType } from '../../apis/auth';
import { APIError, LoginSuccesType } from '../../types';
import useMutate from '../useMutate';

export interface UseLogin {
  onSuccess?: (data: LoginSuccesType) => void;
  onError?: (error: Error | APIError) => void;
}

function useLogin({ onSuccess, onError }: UseLogin) {
  const { mutate, data, error, isLoading } = useMutate<LoginType, any>({
    fetchFn: login,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useLogin;
