import { CommentType, CommentFormType, Comment } from '../types';
import request from './api';

const { VITE_API_URL } = import.meta.env;

export async function createComment({
  id,
  token,
  content,
}: CommentFormType): Promise<Comment> {
  const response = await request({
    url: `${VITE_API_URL}/comments?postId=${id}`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ content }),
    },
  });

  return response;
}

export async function updateComment({
  id,
  token,
  content,
}: CommentFormType): Promise<Comment> {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ content }),
    },
  });

  return response;
}

export async function deleteComment({ id, token }: CommentType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}`,
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

export async function createCommentLike({ id, token }: CommentType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}/like`,
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

export async function deleteCommentLike({ id, token }: CommentType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}/like`,
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

export async function createCommentDislike({ id, token }: CommentType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}/dislike`,
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

export async function deleteCommentDislike({ id, token }: CommentType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/${id}/dislike`,
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
