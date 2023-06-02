import { deleteNotification } from '../../apis/imojumo/notification';
import { NotificationType, useDeleteNotificationType } from '../../types';
import useMutate from '../useMutate';

function useDeleteNotification({
  onSuccess,
  onError,
}: useDeleteNotificationType) {
  const { mutate, data, error, isLoading } = useMutate<NotificationType, any>({
    fetchFn: deleteNotification,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useDeleteNotification;
