import { getNotification } from '../../apis/imojumo/notification';
import {
  GetNotificationType,
  Notification,
  useNotificationType,
} from '../../types';
import useQuery from '../useQuery';

function useNotification({
  token,
  isSuspense = false,
  isErrorBoundary = false,
}: useNotificationType) {
  const { data, isLoading, error, setData } = useQuery<
    GetNotificationType,
    Notification[]
  >({
    fetchFn: getNotification,
    arg: { token },
    isSuspense,
    isErrorBoundary,
  });

  const handleUpdateNotification = (id: number) => {
    setData((prev) => {
      if (!prev) {
        return prev;
      }

      const updatedNotifications = prev.map((notification) =>
        notification.id === id
          ? { ...notification, readStatus: true }
          : notification,
      );

      return updatedNotifications;
    });
  };

  const handleDeleteNotification = (id: number) => {
    setData((prev) => {
      if (!prev) {
        return prev;
      }

      const updatedNotifications = prev.filter(
        (notification) => notification.id !== id,
      );

      return updatedNotifications;
    });
  };

  return {
    data,
    isLoading,
    error,
    handleUpdateNotification,
    handleDeleteNotification,
  };
}

export default useNotification;
