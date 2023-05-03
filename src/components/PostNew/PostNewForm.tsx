import React from 'react';
import styled from 'styled-components';
import { colFlexCenter, screenReaderTextCSS } from '../../styles/shared';

interface PostNewFormProps {
  title: string;
  children: React.ReactNode;
}

function PostNewForm({ title, children }: PostNewFormProps) {
  return (
    <PostFormContainer>
      <PostNewFormTitle>{title}</PostNewFormTitle>
      {children}
    </PostFormContainer>
  );
}

const PostFormContainer = styled.form`
  ${colFlexCenter}
  gap: 60px;
  width: 100%;
  max-width: 970px;
`;

const PostNewFormTitle = styled.h3`
  ${screenReaderTextCSS};
`;

export default PostNewForm;
