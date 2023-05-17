import { Book, BookDiscussionInfo, Comment } from '../types';

const { VITE_API_URL } = import.meta.env;

interface BookDiscussion extends BookDiscussionInfo {
  book: Book;
  postLikedByUser: boolean;
  comments: Comment[];
}

export async function getBookDiscussion(
  id: string,
  token: string,
): Promise<BookDiscussion> {
  try {
    const response = await fetch(`${VITE_API_URL}/book-discussions/${id}`, {
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

    return (await response.json()) as BookDiscussion;
  } catch (error) {
    console.log(error);
    throw error;
  }
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
