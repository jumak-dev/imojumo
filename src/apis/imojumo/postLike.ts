import request from '../api';
import { PostLikeType } from '../../types';

const { VITE_API_URL } = import.meta.env;

export async function createLike({ postId, token }: PostLikeType) {
  const response = await request({
    url: `${VITE_API_URL}/likes/${postId}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export async function deleteLike({ postId, token }: PostLikeType) {
  const response = await request({
    url: `${VITE_API_URL}/likes/${postId}`,
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
