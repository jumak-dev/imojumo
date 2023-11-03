import {
  updateUsername,
  UpdateUsernameType,
} from '../../apis/myPage/myPageApi';
import { UserInfo } from '../../recoil/atoms';
import { APIError } from '../../types';
import useMutate from '../useMutate';

export interface UseUpdateUsername {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

function useUpdateUsername({ onSuccess, onError }: UseUpdateUsername) {
  const { mutate, data, error, isLoading } = useMutate<UpdateUsernameType, any>(
    {
      fetchFn: updateUsername,
      onSuccess,
      onError,
    },
  );

  return { mutate, data, error, isLoading };
}

export default useUpdateUsername;
