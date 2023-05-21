import React from 'react';
import styled from 'styled-components';

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
  height: 500px;
  display: flex;
  text-algin: center;
  align-items: center;
  justify-content: center;
`;

const KeywordHighlight = styled.span`
  height: 100%;
  display: flex;
  text-algin: center;
  align-items: center;
  justify-content: center;
  color: var(--color-primary-pink);
  font-weight: bold;
`;

export default EmptySearchResult;
