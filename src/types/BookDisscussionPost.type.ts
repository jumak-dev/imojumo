import { Book } from './Book.type';

export interface BookDiscussionInfo {
  id: string;
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
