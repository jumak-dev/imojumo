import { signup, SignupType } from '../../apis/auth';
import { APIError } from '../../types';
import useMutate from '../useMutate';

interface UseSignup {
  onSuccess?: () => void;
  onError?: (error: Error | APIError) => void;
}

function useSignup({ onSuccess, onError }: UseSignup) {
  const { mutate, data, error, isLoading } = useMutate<SignupType, any>({
    fetchFn: signup,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useSignup;
