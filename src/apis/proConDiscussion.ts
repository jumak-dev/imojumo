import { ProConDiscussionInfo, Comment } from '../types';

const { VITE_API_URL } = import.meta.env;

interface ProConDiscussion extends ProConDiscussionInfo {
  isPro: boolean;
  isVote: boolean;
  comments: Comment[];
}

interface ProConVote {
  isPro: boolean;
}

export async function getProConDiscussion(
  id: string,
  token: string,
): Promise<ProConDiscussion> {
  try {
    const response = await fetch(`${VITE_API_URL}/pro-con-discussions/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return (await response.json()) as ProConDiscussion;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteProConDiscussion(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/pro-con-discussions/${id}`, {
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

export async function createProConVote(
  id: string,
  token: string,
  voteValue: boolean,
): Promise<ProConVote> {
  try {
    const response = await fetch(`${VITE_API_URL}/pro-con-vote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ isPro: voteValue }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return (await response.json()) as ProConVote;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateProConVote(
  id: string,
  token: string,
  voteValue: boolean,
): Promise<ProConVote> {
  try {
    const response = await fetch(`${VITE_API_URL}/pro-con-vote/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ isPro: voteValue }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return (await response.json()) as ProConVote;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
