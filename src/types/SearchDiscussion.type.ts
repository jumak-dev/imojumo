import { BookDiscussionInfo, ProConDiscussionInfo, PageInfo } from '.';

export interface SearchDiscussionsProps {
  query: string;
  page: number;
  type: 'book' | 'proCon' | 'all';
  isbn?: string;
  token?: string;
  limit: number;
}

export interface SearchDiscussionsResponseType {
  proConResults: { posts: ProConDiscussionInfo[]; pageInfo: PageInfo };
  bookResults: { posts: BookDiscussionInfo[]; pageInfo: PageInfo };
}
