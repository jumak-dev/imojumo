import {
  GetProConDiscussionType,
  ProConDiscussionRequest,
  GetProConDiscussionDetailType,
} from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export interface CreateProConDiscussionType extends ProConDiscussionRequest {
  token?: string | null;
}

export async function createProConDiscussion({
  title,
  content,
  isPro,
  token,
}: CreateProConDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      credentials: 'include',
      body: JSON.stringify({
        title,
        content,
        isPro,
      }),
    },
  });

  return response;
}

export async function getProConDiscussions({
  page,
  limit,
}: GetProConDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions?page=${page}&limit=${limit}`,
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

export async function getProConDiscussionDetail(
  { id }: GetProConDiscussionDetailType,
  token?: string,
) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions/${id}`,
    options: {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': '12',
        ...(token && { Authorization: token }),
      },
    },
  });

  return response;
}
