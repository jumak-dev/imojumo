import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../styles/shared';

interface BookSearchListProps {
  children: React.ReactNode;
}

function BookSearchList({ children }: BookSearchListProps) {
  return <BookListContainer>{children}</BookListContainer>;
}

const BookListContainer = styled.ul`
  ${Flex}
  flex-direction: column;
  width: 100%;
`;

export default BookSearchList;
