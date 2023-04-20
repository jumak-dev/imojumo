import React from 'react';
import styled from 'styled-components';
import { ColFlexCenter, ScreenReaderTextCSS } from '../../styles/shared';

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
  width: 100%;
  gap: 60px;
  max-width: 970px;

  ${ColFlexCenter}
`;

const PostNewFormTitle = styled.h3`
  ${ScreenReaderTextCSS};
`;

export default PostNewForm;
