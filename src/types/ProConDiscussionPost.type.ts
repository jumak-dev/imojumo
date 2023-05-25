import { Comment, PageInfo } from './index';

export interface ProConDiscussionInfo {
  id: number;
  author: string;
  title: string;
  content: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  proCount: number;
  conCount: number;
  proLeader: ProConLeader | null;
  conLeader: ProConLeader | null;
  isVote: boolean;
  isPro: boolean;
}

export interface GetProConDiscussion {
  posts: ProConDiscussionInfo[];
  pageInfo: PageInfo;
}

export interface GetProConDiscussionType {
  page: number;
  limit: number;
}

export interface ProConLeader {
  username: string;
  avatarUrl: string | null;
}

export interface ProConDiscussionRequest {
  title: string;
  content: string;
  isPro: boolean;
}

export interface GetProConDiscussionDetailType {
  id: number;
  token: string;
}

export interface UseProConDiscussionType extends GetProConDiscussionType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

export interface UpdateProConDiscussionType {
  id: number;
  isPro: boolean;
  title: string;
  content: string;
  token: string;
}

export interface CreateProConDiscussionType extends ProConDiscussionRequest {
  token?: string | null;
}

export interface ProConDiscussion extends ProConDiscussionInfo {
  isPro: boolean;
  isVote: boolean;
  comments: Comment[];
}

export interface DeleteProConDiscussionType {
  id: string;
  token: string;
}
