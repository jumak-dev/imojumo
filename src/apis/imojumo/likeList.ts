import request from '../api';
import { GetLikeListsType } from '../../types';

const { VITE_API_URL } = import.meta.env;

async function getLikeList({
  page,
  limit,
  token,
  orderBy = 'lastest',
}: GetLikeListsType) {
  const response = await request({
    url: `${VITE_API_URL}/likes/me?page=${page}&limit=${limit}&sort=${orderBy}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export default getLikeList;
