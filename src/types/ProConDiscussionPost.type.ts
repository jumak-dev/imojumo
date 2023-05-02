export interface ProConDiscussionInfo {
  id: number;
  author: string;
  title: string;
  content: string;
  views: number;
  thumbup: number;
  createdAt: string;
  updatedAt: string;
  agreeCount: number;
  disagreeCount: number;
  agreeUser: string;
  disagreeUser: null | string;
}
