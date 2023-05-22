import { BookDiscussionDetail, GetBookDiscussionDetailType } from '../types';
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

export async function deleteBookDiscussion(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/book-discussions/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function likeBookDiscussion(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/likes/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function unlikeBookDiscussion(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/likes/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
