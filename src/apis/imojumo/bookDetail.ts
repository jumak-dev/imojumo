import { GetBookDetailType } from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

async function getBookDetail({ isbn, token }: GetBookDetailType) {
  const response = await request({
    url: `${VITE_API_URL}/books/${isbn}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: token }),
      },
    },
  });

  return response;
}

export default getBookDetail;
