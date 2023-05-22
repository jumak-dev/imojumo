import {
  CreateProConVoteType,
  DeleteProConDiscussionType,
  GetProConDiscussionDetailType,
  ProConDiscussion,
  ProConVote,
  UpdateProConVoteType,
} from '../types';

import request from './api';

const { VITE_API_URL } = import.meta.env;

export async function getProConDiscussionDetail({
  id,
  token,
}: GetProConDiscussionDetailType): Promise<ProConDiscussion> {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions/${id}`,
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

export async function deleteProConDiscussion({
  id,
  token,
}: DeleteProConDiscussionType) {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-discussions/${id}`,
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

export async function createProConVote({
  id,
  token,
  voteValue,
}: CreateProConVoteType): Promise<ProConVote> {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-vote/${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ isPro: voteValue }),
    },
  });

  return response;
}

export async function updateProConVote({
  id,
  token,
  voteValue,
}: UpdateProConVoteType): Promise<ProConVote> {
  const response = await request({
    url: `${VITE_API_URL}/pro-con-vote/${id}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ isPro: voteValue }),
    },
  });

  return response;
}
