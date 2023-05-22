import React from 'react';
import styled from 'styled-components';
import BookDisscussionEditForm from '../components/BookDisscussionEditForm/BookDisscussionEditForm';
import DiscussionFormTab from '../components/DiscussionForm/DiscussionFormTab';
import ProConDiscussionForm from '../components/ProConDiscussionNewForm/ProConDiscussionNewForm';
import MainContainer from '../styles/layout';
import { flex, screenReaderTextCSS } from '../styles/shared';

interface DiscussionEditPageProps {
  discussionType: 'proCon' | 'book';
}

function DiscussionEditPage({ discussionType }: DiscussionEditPageProps) {
  const title = {
    proCon: '찬반 토론 게시글 수정하기',
    book: '독서 토론 게시글 수정하기',
  }[discussionType];

  return (
    <MainContainer>
      <DiscussionEditContainer>
        <DiscussionEditTitle>{title}</DiscussionEditTitle>
        <DiscussionFormTab />
        {
          {
            proCon: <ProConDiscussionForm />,
            book: <BookDisscussionEditForm />,
          }[discussionType]
        }
      </DiscussionEditContainer>
    </MainContainer>
  );
}

const DiscussionEditContainer = styled.article`
  ${flex}
  width: 100%;
  flex-direction: column;
  gap: 48px;
  padding: 48px 16px;
`;

const DiscussionEditTitle = styled.h2`
  ${screenReaderTextCSS};
`;

export default DiscussionEditPage;
