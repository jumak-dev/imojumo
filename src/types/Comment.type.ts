export interface Comment {
  id: number;
  author: string;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  updatedAt: string;
  likedByUser: boolean;
  dislikedByUser: boolean;
  isPro?: boolean;
}
