import { Book, PageInfo } from './index';

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

export interface GetBookDiscussion {
  pageInfo: PageInfo;
  posts: BookDiscussionInfo[];
}

type OrderBy = 'lastest' | 'popular';

export interface GetBookDiscussionType {
  page: number;
  limit: number;
  orderBy?: OrderBy;
}

export interface CreateBookDiscussionType {
  title: string;
  content: string;
  book: Book;
}

export interface GetBookDiscussionDetailType {
  id: number;
}

export interface UseBookDiscussionType extends GetBookDiscussionType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}
