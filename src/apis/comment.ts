import { Comment } from '../types';

const { VITE_API_URL } = import.meta.env;

export async function createComment(
  id: string,
  token: string,
  content: string,
): Promise<Comment> {
  try {
    const response = await fetch(`${VITE_API_URL}/comments?postId=${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return (await response.json()) as Comment;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function updateComment(
  id: number,
  token: string,
  content: string,
): Promise<Comment> {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }

    return (await response.json()) as Comment;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteComment(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}`, {
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

export async function likeComment(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}/like`, {
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
    console.log(error);
    throw error;
  }
}

export async function cancelCommentLike(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}/like`, {
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

export async function dislikeComment(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}/dislike`, {
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
    console.log(error);
    throw error;
  }
}

export async function cancelCommentDislike(id: number, token: string) {
  try {
    const response = await fetch(`${VITE_API_URL}/comments/${id}/dislike`, {
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
