import { BookDiscussionInfo } from './BookDiscussionPost.type';
import { ProConDiscussionInfo } from './ProConDiscussionPost.type';

export interface MyPageCommnet {
  id: number;
  postId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface MyPageInfoProps {
  bookDiscussions: BookDiscussionInfo[];
  proConDiscussions: ProConDiscussionInfo[];
  comments: MyPageCommnet[];
}

type MyPageResponseData =
  | BookDiscussionInfo
  | ProConDiscussionInfo
  | MyPageCommnet;

export interface MyPageContentProps {
  articles: MyPageResponseData[];
}

export interface MyDataModalProps {
  responseDataArr: MyPageResponseData[];
  showModal: boolean;
  handleCloseModal: () => void;
}
