import {
  SearchDiscussionsProps,
  SearchDiscussionsResponseType,
} from '../../types/SearchDiscussion.type';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export default async function searchDiscussions({
  query,
  page,
  isbn,
  token,
  limit = 10,
  type = 'all',
}: SearchDiscussionsProps): Promise<SearchDiscussionsResponseType> {
  const searchParams = new URLSearchParams({
    query,
    type,
    page: String(page),
    limit: String(limit),
    ...(isbn && { isbn }),
  }).toString();

  const response = await request({
    url: `${VITE_API_URL}/search?${searchParams}`,
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
