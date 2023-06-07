import request, { requestResponse } from './api';

const { VITE_API_URL } = import.meta.env;

export interface LoginType {
  email: string;
  password: string;
}

export async function login({ password, email }: LoginType) {
  const response = await requestResponse({
    url: `${VITE_API_URL}/auth/login`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
    },
  });

  return response;
}

export interface SignupType {
  email: string;
  password: string;
}

export async function signup({ password, email }: SignupType) {
  const response = await request({
    url: `${VITE_API_URL}/users`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password,
        email,
      }),
    },
  });

  return response;
}
