import request from '../api';

const { VITE_API_URL } = import.meta.env;

export interface getMypageInfoType {
  token: string;
}

async function getMypageInfo({ token }: getMypageInfoType) {
  const response = await request({
    url: `${VITE_API_URL}/mypage`,
    options: {
      method: 'GET',
      headers: {
        Authorization: `${token}`,
      },
    },
  });

  return response;
}

export interface GetMyPageCommentsType {
  page: number;
  limit: number;
  token: string;
}

export async function getMyPageComments({
  page,
  limit,
  token,
}: GetMyPageCommentsType) {
  const response = await request({
    url: `${VITE_API_URL}/comments/user?page=${page}&limit=${limit}`,
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

export interface DeleteUserAccountType {
  token: string;
}

export async function deleteUserAccount({ token }: DeleteUserAccountType) {
  const response = await request({
    url: `${VITE_API_URL}/users`,
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

export interface UpdateUsernameType {
  username: string;
  token: string;
}

export async function updateUsername({ token, username }: UpdateUsernameType) {
  const response = await request({
    url: `${VITE_API_URL}/users`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        username,
      }),
    },
  });

  return response;
}

export interface UpdateUserPasswordType {
  password: string;
  newPassword: string;
  token: string;
}

export async function updateUserPassword({
  token,
  password,
  newPassword,
}: UpdateUserPasswordType) {
  const response = await request({
    url: `${VITE_API_URL}/users/password`,
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({
        password,
        newPassword,
      }),
    },
  });

  return response;
}

export interface DeleteUserAvatarType {
  token: string;
}

export async function deleteUserAvata({ token }: DeleteUserAvatarType) {
  const response = await request({
    url: `${VITE_API_URL}/users/avatar`,
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

export interface ChangeUserAvatarType {
  token: string;
  file: FormData;
}

export async function changeUserAvatar({ token, file }: ChangeUserAvatarType) {
  const response = await request({
    url: `${VITE_API_URL}/users/avatar`,
    options: {
      method: 'PATCH',
      headers: {
        Authorization: `${token}`,
      },
      body: file,
    },
  });

  return response;
}

export default getMypageInfo;
