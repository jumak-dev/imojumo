import {
  BookDiscussionDetail,
  DeleteBookDiscussionType,
  GetBookDiscussionDetailType,
} from '../types';
import request from './api';

const { VITE_API_URL } = import.meta.env;

export async function getBookDiscussion({
  id,
  token,
}: GetBookDiscussionDetailType): Promise<BookDiscussionDetail> {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions/${id}`,
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

export async function deleteBookDiscussion({
  id,
  token,
}: DeleteBookDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/book-discussions/${id}`,
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

export async function likeBookDiscussion(id: number, token: string) {
  const response = await request({
    url: `${VITE_API_URL}/likes/${id}`,
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

export async function unlikeBookDiscussion(id: number, token: string) {
  const response = await request({
    url: `${VITE_API_URL}/likes/${id}`,
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
