import {
  GetNotificationType,
  Notification,
  NotificationType,
} from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export async function getNotification({
  token,
}: GetNotificationType): Promise<Notification[]> {
  const response = await request({
    url: `${VITE_API_URL}/notification`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export async function updateNotification({
  id,
  token,
}: NotificationType): Promise<Notification> {
  const response = await request({
    url: `${VITE_API_URL}/notification/${id}/read`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export async function deleteNotification({ id, token }: NotificationType) {
  const response = await request({
    url: `${VITE_API_URL}/notification/${id}`,
    options: {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    },
  });

  return response;
}
