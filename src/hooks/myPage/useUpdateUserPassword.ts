import {
  updateUserPassword,
  UpdateUserPasswordType,
} from '../../apis/myPage/myPageApi';
import { UserInfo } from '../../recoil/atoms';
import { APIError } from '../../types';
import useMutate from '../useMutate';

export interface UseUpdateUserPassword {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

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
