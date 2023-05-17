import { GetBookDiscussioType, ProConDiscussionRequest } from '../../types';
import request from '../api';

const { VITE_API_URL } = import.meta.env;

export interface CreateProConDiscussionType extends ProConDiscussionRequest {
  token?: string | null;
}

export interface GetProConDiscussionType {
  id: number;
  token: string;
}

async function createProConDiscussion({
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

async function getProConDiscussions({ id, token }: GetProConDiscussionType) {
  // Todo: 기능 구현 예정
}

export { createProConDiscussion, getProConDiscussions };
