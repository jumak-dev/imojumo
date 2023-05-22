export interface ProConVote {
  isPro: boolean;
}

export interface CreateProConVoteType {
  id: string;
  token: string;
  voteValue: boolean;
}

export interface UpdateProConVoteType {
  id: string;
  token: string;
  voteValue: boolean;
}
