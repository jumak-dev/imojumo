import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type SizeType = 'xxl' | 'xl' | 'lz' | 'md' | 'sm' | 'xs';

interface IProps {
  isDisplayContent: boolean;
  barWidth: string;
  barHeight: string;
  value: string;
  size: SizeType;
}

function ProgressBar({
  isDisplayContent = true,
  barWidth = '100%',
  barHeight = '100px',
  value = '50',
  size = 'sm',
}: IProps) {
  return (
    <Container barWidth={barWidth}>
      <BarContainer barHeight={barHeight}>
        <Bar value={value} />
      </BarContainer>
      {isDisplayContent && (
        <ContentContainer>
          <Content size={size} pos="left">
            찬성 {value}%
          </Content>
          <Content size={size} pos="right">
            반대 {100 - Number(value)}%
          </Content>
        </ContentContainer>
      )}
    </Container>
  );
}

const SIZES: { [key in SizeType]: FlattenSimpleInterpolation } = {
  xxl: css`
    --progress-font-size: var(--font-size-xxl);
  `,
  xl: css`
    --progress-font-size: var(--font-size-xxl);
  `,
  lz: css`
    --progress-font-size: var(--font-size-l);
  `,
  md: css`
    --progress-font-size: var(--font-size-m);
  `,
  sm: css`
    --progress-font-size: var(--font-size-sm);
  `,
  xs: css`
    --progress-font-size: var(--font-size-xs);
  `,
};

const Container = styled.div<{ barWidth: string }>`
  display: flex;
  flex-direction: column;
  width: ${({ barWidth }) => barWidth};
  gap: 10px;
`;

const BarContainer = styled.div<{ barHeight: string }>`
  position: relative;
  border-radius: 25px;
  background-color: var(--color-primary-pink);
  height: ${({ barHeight }) => barHeight};
  width: 100%;
  overflow: hidden;
`;

const Bar = styled.span<{ value: string }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform: scaleX(${({ value }) => Number(value) / 100});
  transform-origin: left;
  transition: transform 0.4s ease;
  background-color: var(--color-primary-mint);
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Content = styled.div<{ pos: 'left' | 'right'; size: SizeType }>`
  ${({ size }) => SIZES[size]}

  font-size: var(--progress-font-size);
  flex: 1 1 0;
  text-align: ${({ pos }) => pos};
  color: ${({ pos }) =>
    pos === 'left' ? 'var(--color-primary-mint)' : 'var(--color-primary-pink)'};
`;

export default ProgressBar;
