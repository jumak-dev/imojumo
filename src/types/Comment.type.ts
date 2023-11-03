import { APIError } from './index';

export interface Comment {
  id: number;
  author: string;
  avatarUrl: string;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  updatedAt: string;
  likedByUser?: boolean;
  dislikedByUser?: boolean;
  isPro?: boolean;
}

export interface CommentType {
  id: number;
  token: string;
}

export interface CommentFormType extends CommentType {
  content: string;
}

export interface UseCommentType {
  onSuccess?: () => void;
  onError?: (error: Error | APIError) => void;
}

export interface UseCommentFormType {
  onSuccess?: (data: Comment | null) => void;
  onError?: (error: Error | APIError) => void;
}
