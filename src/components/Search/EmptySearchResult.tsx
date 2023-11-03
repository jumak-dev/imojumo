import React from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/shared';

interface EmptySearchResultProps {
  keyword: string;
}

function EmptySearchResult({ keyword }: EmptySearchResultProps) {
  return (
    <EmptySearchResultWarapper>
      <KeywordHighlight>&apos;{keyword}&apos;&nbsp;</KeywordHighlight>에 대한
      검색 결과가 없습니다
    </EmptySearchResultWarapper>
  );
}

const EmptySearchResultWarapper = styled.div`
  ${flex}
  text-align: center;
  height: 500px;
`;

const KeywordHighlight = styled.span`
  ${flex}
  text-align: center;
  font-weight: bold;
  color: var(--color-primary-pink);
  height: 100%;
`;

export default EmptySearchResult;
