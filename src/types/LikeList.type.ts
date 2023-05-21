import { OrderBy } from './index';

export interface GetLikeListsType {
  page: number;
  limit: number;
  token: string;
  orderBy?: OrderBy;
}

export interface UseLikeListsType extends GetLikeListsType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}
