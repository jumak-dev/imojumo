import React from 'react';
import PostForm from '../components/PostForm';
import MainContainer from '../styles/layout';

function PostNewPage() {
  const handleSubmit = () => {};

  return (
    <MainContainer>
      <PostForm onSubmit={handleSubmit} />
    </MainContainer>
  );
}

export default PostNewPage;
