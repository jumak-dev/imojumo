import {
  GetBookDiscussionType,
  UpdateBookDiscussionType,
  CreateBookDiscussionsType,
} from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

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
  token = '',
  orderBy = 'lastest',
}: GetBookDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions?page=${page}&limit=${limit}&orderBy=${orderBy}`,
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

export async function updateBookDiscussion({
  postId,
  title,
  content,
  token,
}: UpdateBookDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions/${postId}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    },
  });

  return response;
}
