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
import { UserInfo } from '../recoil/atoms';

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
  articles: MyPageResponseData[] | null;
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

export interface UseMyCommmentsType {
  page: number;
  limit: number;
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
  token: string;
  enabled?: boolean;
  onSuccess?: (data: GetMyPageComments | null) => void;
}

export interface GetMyPageCommentsType {
  page: number;
  limit: number;
  token: string;
}

export interface UseDeleteUserAccount {
  onSuccess?: (data: BookDiscussionInfo) => void;
  onError?: (error: Error | APIError) => void;
}

export interface DeleteUserAccountType {
  token: string;
}

export interface UseUpdateUsername {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

export interface UpdateUsernameType {
  username: string;
  token: string;
}

export interface UseUpdateUserPassword {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

export interface UpdateUserPasswordType {
  password: string;
  newPassword: string;
  token: string;
}

export interface MyPageProfileSectionProps {
  token: string;
  userInfo: UserInfo;
  updateUsernameMutate: (args: UpdateUsernameType) => Promise<void>;
  deleteUserAvatarMutate: (args: DeleteUserAvatarType) => Promise<void>;
  changeUserAvatarMutate: (args: ChangeUserAvatarType) => Promise<void>;
}

export interface UseDeleteUserAvata {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

export interface DeleteUserAvatarType {
  token: string;
}

export interface UseChangeUserAvatar {
  onSuccess?: (data: UserInfo) => void;
  onError?: (error: Error | APIError) => void;
}

export interface ChangeUserAvatarType {
  token: string;
  file: FormData;
}
