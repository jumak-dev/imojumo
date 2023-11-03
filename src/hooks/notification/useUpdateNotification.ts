import { updateNotification } from '../../apis/imojumo/notification';
import {
  Notification,
  NotificationType,
  useUpdateNotificationType,
} from '../../types';
import useMutate from '../useMutate';

function useUpdateNotification({
  onSuccess,
  onError,
}: useUpdateNotificationType) {
  const { mutate, data, error, isLoading } = useMutate<
    NotificationType,
    Notification
  >({
    fetchFn: updateNotification,
    onSuccess,
    onError,
  });

  return { mutate, data, error, isLoading };
}

export default useUpdateNotification;
