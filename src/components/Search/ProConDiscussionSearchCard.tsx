import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProConDiscussionInfo } from '../../types';
import { flex, colFlex, truncateTextCSS } from '../../styles/shared';
import getRate from '../../utils/Rate';

interface ProConDiscussionSearchCardProps {
  procondiscussionData: ProConDiscussionInfo;
}

function ProConDiscussionSearchCard({
  procondiscussionData,
}: ProConDiscussionSearchCardProps) {
  const { proCount, conCount } = procondiscussionData;
  const proConSum = proCount + conCount;

  return (
    <CardContainer to="/search">
      <DiscussionTitle>{procondiscussionData.title}</DiscussionTitle>
      <ProConBlockBox>
        <ProConBlock isPro>
          <ProConRateText>
            찬성
            <br />
            {`${getRate(proCount, proConSum)}%`}
          </ProConRateText>
        </ProConBlock>
        <ProConBlock isPro={false}>
          <ProConRateText>
            반대
            <br />
            {`${getRate(conCount, proConSum)}%`}
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
