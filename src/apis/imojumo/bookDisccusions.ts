import {
  CreateBookDiscussionType,
  GetBookDiscussionType,
  GetBookDiscussionDetailType,
} from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export interface CreateBookDiscussionsType extends CreateBookDiscussionType {
  token?: string;
}

export async function createBookDiscussion({
  title,
  content,
  book,
  token,
}: CreateBookDiscussionsType) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        book,
      }),
    },
  });

  return response;
}

export async function getBookDiscussions({
  page,
  limit,
  orderBy = 'lastest',
}: GetBookDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions?page=${page}&limit=${limit}&orderBy=${orderBy}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'ngrok-skip-browser-warning': '12',
      },
    },
  });

  return response;
}

export async function getBookDiscussionDetail(
  { id }: GetBookDiscussionDetailType,
  token?: string,
) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions/${id}`,
    options: {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': '12',
        ...(token && { tokenAuthorization: `Bearer ${token}` }),
      },
    },
  });

  return response;
}
