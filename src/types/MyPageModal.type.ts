import React from 'react';
import { PageInfo } from './Page.type';
import { MyPageResponseData } from './MyPage.type';

export interface MyPageModalProps {
  responseDataArr: MyPageResponseData[];
  showModal: boolean;
  handleCloseModal: () => void;
  currentPage: number;
  setPagenate: React.Dispatch<React.SetStateAction<number>>;
  pageInfo: PageInfo;
}
