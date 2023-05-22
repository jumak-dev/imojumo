import React from 'react';
import styled from 'styled-components';
import BookDiscussionForm from '../components/BookDiscussionNewForm/BookDiscussionNewForm';
import DiscussionFormTab from '../components/DiscussionForm/DiscussionFormTab';
import ProConDiscussionForm from '../components/ProConDiscussionNewForm/ProConDiscussionNewForm';
import MainContainer from '../styles/layout';
import { flex, screenReaderTextCSS } from '../styles/shared';

interface PostNewPageProps {
  discussionType: 'proCon' | 'book';
}

function PostNewPage({ discussionType }: PostNewPageProps) {
  const title = {
    proCon: '찬반 토론 게시글 작성하기',
    book: '독서 토론 게시글 작성하기',
  }[discussionType];
  return (
    <MainContainer>
      <PostNewPageContainer>
        <PostNewPageTitle>{title}</PostNewPageTitle>
        <DiscussionFormTab />
        {
          {
            proCon: <ProConDiscussionForm />,
            book: <BookDiscussionForm />,
          }[discussionType]
        }
      </PostNewPageContainer>
    </MainContainer>
  );
}

const PostNewPageContainer = styled.article`
  ${flex}
  width: 100%;
  flex-direction: column;
  gap: 48px;
  padding: 48px 16px;
`;

const PostNewPageTitle = styled.h2`
  ${screenReaderTextCSS};
`;

export default PostNewPage;
