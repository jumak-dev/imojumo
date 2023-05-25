import { Book } from './index';

export interface BookDetailPost {
  id: number;
  title: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  postLikedByUser: boolean;
}

export interface BookDetailInfo {
  posts: BookDetailPost[];
  book: Book;
}

export interface GetBookDetailType {
  isbn: string;
  token?: string;
}

export interface UseBookDetailType extends GetBookDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}
