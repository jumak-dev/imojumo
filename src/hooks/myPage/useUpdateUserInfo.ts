import { updateUserInfo } from '../../apis/myPage/myPageApi';
import { UpdateUserInfoType, UseUpdateUserInfo } from '../../types';
import useMutate from '../useMutate';

function useUpdateUserInfo({ onSuccess, onError }: UseUpdateUserInfo) {
  const { mutate, data, error, isLoading } = useMutate<UpdateUserInfoType, any>(
    {
      fetchFn: updateUserInfo,
      onSuccess,
      onError,
    },
  );

  return { mutate, data, error, isLoading };
}

export default useUpdateUserInfo;
