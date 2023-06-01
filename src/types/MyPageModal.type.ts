import React from 'react';

import { MyPageModalData } from './MyPage.type';

export interface MyPageModalProps {
  responseDataObj: MyPageModalData;
  isLoading: boolean;
  showModal: boolean;
  handleCloseModal: () => void;
  currentPage: number;
  setPagenate: React.Dispatch<React.SetStateAction<number>>;
}
