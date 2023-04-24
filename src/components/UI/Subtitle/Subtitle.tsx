import React from 'react';
import styled from 'styled-components';
import { AlignCenter } from '../../../styles/shared';

interface SubtitleProps {
  children: React.ReactNode;
}

function Subtitle({ children }: SubtitleProps) {
  return (
    <SubtitleContainer>
      <SubtitleText>{children}</SubtitleText>
    </SubtitleContainer>
  );
}

const SubtitleContainer = styled.div`
  ${AlignCenter}
  justify-content: space-between;
  height: 50px;
  padding: 0 24px;
  border-radius: 8px;
  background-color: var(--color-subtitle-bg-color);
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const SubtitleText = styled.h3`
  ${AlignCenter}
  gap: 8px;
  font-weight: bold;
  font-size: var(--font-size-l);
`;

export default Subtitle;
