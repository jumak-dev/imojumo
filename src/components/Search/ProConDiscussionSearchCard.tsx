import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProConDiscussionInfo } from '../../types';
import { flex, colFlex, truncateTextCSS } from '../../styles/shared';
import getRate from '../../utils/Rate';

interface ProConDiscussionSearchCardProps {
  procondiscussionData: ProConDiscussionInfo;
}

interface RateType {
  proRate: number;
  conRate: number;
}

function ProConDiscussionSearchCard({
  procondiscussionData,
}: ProConDiscussionSearchCardProps) {
  const { proCount, conCount } = procondiscussionData;
  const [rate, setRate] = useState<RateType>({ proRate: 50, conRate: 50 });

  useEffect(() => {
    const value = getRate(proCount, conCount);
    setRate(value);
  });

  return (
    <CardContainer to="/search">
      <DiscussionTitle>{procondiscussionData.title}</DiscussionTitle>
      <ProConBlockBox>
        <ProConBlock isPro>
          <ProConRateText>
            찬성
            <br />
            {`${rate.proRate}%`}
          </ProConRateText>
        </ProConBlock>
        <ProConBlock isPro={false}>
          <ProConRateText>
            반대
            <br />
            {`${rate.conRate}%`}
          </ProConRateText>
        </ProConBlock>
      </ProConBlockBox>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${colFlex}
  width: 320px;
  height: 275px;
  border: none;
  border-radius: 0;
  margin: 0 20px 50px;
`;

const DiscussionTitle = styled.h3`
  ${truncateTextCSS}
  margin: 20px;
  font-weight: 700;
  text-align: center;
  font-size: var(--font-size-m);
`;

const ProConBlockBox = styled.div`
  ${flex};
  flex: 1;
`;

const ProConBlock = styled.div<{ isPro: boolean }>`
  ${flex}
  flex: 1;
  height: 100%;

  background-color: ${({ isPro }) =>
    isPro ? 'var(--color-primary-mint)' : 'var(--color-primary-pink)'};

  &:hover {
    filter: brightness(0.97);
  }
`;

const ProConRateText = styled.p`
  color: var(--white);
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;

export default ProConDiscussionSearchCard;
