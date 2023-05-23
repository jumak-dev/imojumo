import { Book, PageInfo, APIError, Comment } from './index';

export interface BookDiscussionInfo {
  id: number;
  author: string;
  avatarUrl: string;
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

export type OrderBy = 'lastest' | 'popular';

export interface GetBookDiscussionType {
  page: number;
  limit: number;
  token?: string;
  orderBy?: OrderBy;
}

export interface CreateBookDiscussionType {
  title: string;
  content: string;
  book: Book;
}

export interface GetBookDiscussionDetailType {
  id: number;
  token?: string;
}

export interface UseBookDiscussionType extends GetBookDiscussionType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

export interface UpdateBookDiscussionType {
  postId: number;
  title: string;
  content: string;
  token: string;
}

export interface CreateBookDiscussionsType extends CreateBookDiscussionType {
  token?: string;
}

export interface PostLikeType {
  postId: number;
  token: string;
}

export interface UsePostLikeType {
  onSuccess?: (data: PostLikeResponse | null) => void;
  onError?: (error: Error | APIError) => void;
}

export interface PostLikeResponse {
  likeCount: number;
}

export interface BookDiscussionDetail extends BookDiscussionInfo {
  book: Book;
  postLikedByUser: boolean;
  comments: Comment[];
}

export interface DeleteBookDiscussionType {
  id: number;
  token?: string;
}
