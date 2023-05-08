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
}

export interface ProConLeader {
  username: string;
  avatarUrl: string | null;
}
