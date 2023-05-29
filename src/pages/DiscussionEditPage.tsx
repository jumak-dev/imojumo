import React from 'react';
import styled from 'styled-components';

import BookDiscussionEditForm from '../components/BookDiscussionEditForm/BookDiscussionEditForm';
import ProConDiscussionEditForm from '../components/ProConDiscussionEditForm/ProConDiscussionEditForm';

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
        {
          {
            proCon: <ProConDiscussionEditForm />,
            book: <BookDiscussionEditForm />,
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
