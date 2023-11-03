import getMypageInfo, { getMypageInfoType } from '../../apis/myPage/myPageApi';
import useQuery from '../useQuery';
import { MyPageInfoProps, UseMyPageInfoDetailProps } from '../../types';

function useGetMyPageInfo({
  token = '',
  onSuccess,
  isSuspense = false,
  isErrorBoundary = false,
}: UseMyPageInfoDetailProps) {
  const { data, isLoading, error, setData } = useQuery<
    getMypageInfoType,
    MyPageInfoProps
  >({
    fetchFn: getMypageInfo,
    arg: { token },
    isErrorBoundary,
    isSuspense,
    onSuccess,
  });

  const handleMypageInfo = () => {
    setData((prev) => {
      if (prev === undefined) {
        return prev;
      }

      return {
        ...prev,
      };
    });
  };

  return { data, isLoading, error, handleMypageInfo };
}

export default useGetMyPageInfo;
