import {
  BookDiscussionInfo,
  GetBookDiscussion,
} from './BookDiscussionPost.type';
import { APIError } from './Error.type';
import {
  ProConDiscussionInfo,
  GetProConDiscussion,
} from './ProConDiscussionPost.type';
import { PageInfo } from './Page.type';

export interface MyPageComment {
  id: number;
  postId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  type: 'book' | 'proCon';
}

export interface MyPageInfoProps {
  bookDiscussions: BookDiscussionInfo[];
  proConDiscussions: ProConDiscussionInfo[];
  comments: MyPageComment[];
}

export type MyPageResponseData =
  | BookDiscussionInfo
  | ProConDiscussionInfo
  | MyPageComment;

export interface MyPageContentProps {
  articles: MyPageResponseData[];
}

export interface MyDataModalProps {
  responseDataArr: MyPageResponseData[];
  showModal: boolean;
  handleCloseModal: () => void;
}

export interface GetMyPageInfoDetailType {
  token: string;
}

export interface UseMyPageInfoDetailProps extends GetMyPageInfoDetailType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  onSuccess?: (data: MyPageInfoProps | null) => void;
  onError?: (error: Error | APIError) => void;
}

export interface GetMyPageComments {
  comments: MyPageComment[];
  pageInfo: PageInfo;
}

export type MyPageModalData =
  | GetBookDiscussion
  | GetProConDiscussion
  | GetMyPageComments;
