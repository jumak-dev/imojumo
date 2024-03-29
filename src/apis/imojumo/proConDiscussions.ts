import {
  GetProConDiscussionType,
  UpdateProConDiscussionType,
  CreateProConDiscussionType,
} from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

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
  myPostsOnly = false,
  token,
}: GetProConDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions?page=${page}&limit=${limit}&myPostsOnly=${myPostsOnly}`,
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

export async function updateProConDiscussion({
  id,
  title,
  content,
  isPro,
  token,
}: UpdateProConDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions/${id}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        title,
        content,
        isPro,
      }),
    },
  });

  return response;
}
