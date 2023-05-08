import { Book } from './Book.type';

export interface BookDiscussionInfo {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  postLikedByUser: boolean;
  views: number;
  book?: Book;
}

export interface CreateBookDiscussioType {
  title: string;
  content: string;
  book: Book;
}

export interface GetBookDiscussioType {
  id: number;
}
