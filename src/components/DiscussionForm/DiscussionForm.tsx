import React from 'react';
import styled from 'styled-components';
import { colFlexCenter, screenReaderTextCSS } from '../../styles/shared';

interface DiscussionFormProps {
  title: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

function DiscussionForm({ title, onSubmit, children }: DiscussionFormProps) {
  return (
    <DiscussionFormContainer onSubmit={onSubmit}>
      <DiscussionFormTitle>{title}</DiscussionFormTitle>
      {children}
    </DiscussionFormContainer>
  );
}

const DiscussionFormContainer = styled.form`
  ${colFlexCenter}
  gap: 60px;
  width: 100%;
  max-width: 970px;
`;

const DiscussionFormTitle = styled.h3`
  ${screenReaderTextCSS};
`;

export default DiscussionForm;
