import { APIError } from './Error.type';

export interface Notification {
  type: string;
  id: number;
  postId: number;
  commentId: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  readStatus: boolean;
}

export interface GetNotificationType {
  token: string;
}

export interface NotificationType {
  id: number;
  token: string;
}

export interface useNotificationType extends GetNotificationType {
  isSuspense?: boolean;
  isErrorBoundary?: boolean;
}

export interface useUpdateNotificationType {
  onSuccess?: (data: Notification | null) => void;
  onError?: (error: Error | APIError) => void;
}

export interface useDeleteNotificationType {
  onSuccess?: () => void;
  onError?: (error: Error | APIError) => void;
}
