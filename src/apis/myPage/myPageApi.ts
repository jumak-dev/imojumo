import { GetMyPageComments, GetMyPageCommentsType } from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export interface getMypageInfoProps {
  token: string;
}

async function getMypageInfo({ token }: getMypageInfoProps) {
  const response = await request({
    url: `${VITE_API_URL}/mypage`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export async function getMyPageComments({
  page,
  limit,
  token,
}: GetMyPageCommentsType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/user?page=${page}&limit=${limit}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
        ...(token && { Authorization: token }),
      },
    },
  });

  return response;
}

export default getMypageInfo;
