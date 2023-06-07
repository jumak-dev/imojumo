import React from 'react';

import { MyPageModalData } from './MyPage.type';

export interface MyPageModalProps {
  responseDataObj: MyPageModalData | null;
  showModal: boolean;
  handleCloseModal: () => void;
  currentPage: number;
  setPagenate: React.Dispatch<React.SetStateAction<number>>;
  isLoading?: boolean;
}
