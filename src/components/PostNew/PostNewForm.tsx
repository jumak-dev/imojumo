import React from 'react';
import styled from 'styled-components';
import { colFlexCenter, screenReaderTextCSS } from '../../styles/shared';

interface PostNewFormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

function PostNewForm({ title, onSubmit, children }: PostNewFormProps) {
  return (
    <PostFormContainer onSubmit={onSubmit}>
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
