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

export default getMypageInfo;
