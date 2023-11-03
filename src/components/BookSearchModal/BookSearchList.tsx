import React from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/shared';

interface BookSearchListProps {
  children: React.ReactNode;
}

function BookSearchList({ children }: BookSearchListProps) {
  return <BookListContainer>{children}</BookListContainer>;
}

const BookListContainer = styled.ul`
  ${flex}
  flex-direction: column;
  width: 100%;
`;

export default BookSearchList;
