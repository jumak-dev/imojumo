import React from 'react';

export interface PageInfo {
  page: number;
  totalPage: number;
  totalCount: number;
  currentCount: number;
}

export interface PaginationType {
  pageInfo: PageInfo | undefined;
  currentPage: number;
  setPaginate: React.Dispatch<React.SetStateAction<number>>;
}
