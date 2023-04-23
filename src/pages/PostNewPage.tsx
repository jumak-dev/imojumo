import React from 'react';
import styled from 'styled-components';
import BookDiscussionForm from '../components/PostNew/BookDiscussionForm';
import DiscussionTab from '../components/PostNew/DiscussionTab';
import ProConDiscussionForm from '../components/PostNew/ProConDiscussionForm';
import MainContainer from '../styles/layout';
import { Flex, ScreenReaderTextCSS } from '../styles/shared';

interface PostNewPageProps {
  discussionType: 'proCon' | 'book';
}

function PostNewPage({ discussionType }: PostNewPageProps) {
  const title = {
    proCon: '찬반 토론 게시글 작성하기',
    book: '독서 토론 게시글 작성하기',
  }[discussionType];

  const handleSubmit = () => {};

  return (
    <MainContainer>
      <PostNewPageContainer>
        <PostNewPageTitle>{title}</PostNewPageTitle>
        <DiscussionTab />
        {
          {
            proCon: <ProConDiscussionForm onSubmit={handleSubmit} />,
            book: <BookDiscussionForm onSubmit={handleSubmit} />,
          }[discussionType]
        }
      </PostNewPageContainer>
    </MainContainer>
  );
}

const PostNewPageContainer = styled.article`
  ${Flex}
  width: 100%;
  flex-direction: column;
  gap: 48px;
  padding: 48px 16px;
`;

const PostNewPageTitle = styled.h2`
  ${ScreenReaderTextCSS};
`;

export default PostNewPage;
