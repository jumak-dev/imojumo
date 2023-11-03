import {
  deleteUserAccount,
  DeleteUserAccountType,
} from '../../apis/myPage/myPageApi';
import { APIError, BookDiscussionInfo } from '../../types';
import useMutate from '../useMutate';

export interface UseDeleteUserAccount {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

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
