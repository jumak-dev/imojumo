import React from 'react';
import styled from 'styled-components';
import { ColFlex } from '../../styles/shared';

interface CommentListProps {
  children: React.ReactNode;
}

function CommentList({ children }: CommentListProps) {
  return <CommentListContainer>{children}</CommentListContainer>;
}

const CommentListContainer = styled.ul`
  ${ColFlex}
  gap: 16px;
  margin: 40px 20px;
`;

export default CommentList;
