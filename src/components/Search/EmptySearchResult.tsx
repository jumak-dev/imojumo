import React from 'react';
import styled from 'styled-components';

interface EmptySearchResultProps {
  keyword: string;
}

function EmptySearchResult({ keyword }: EmptySearchResultProps) {
  return (
    <EmptySearchResultWarapper>
      <KeywordHighlight>&apos;{keyword}&apos;&nbsp;</KeywordHighlight>에 대한
      결과가 없습니다
    </EmptySearchResultWarapper>
  );
}

const EmptySearchResultWarapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-algin: center;
`;

const KeywordHighlight = styled.span`
  color: var(--color-primary-pink);
  font-weight: bold;
`;

export default EmptySearchResult;
