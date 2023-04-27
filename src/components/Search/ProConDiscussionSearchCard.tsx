import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Flex, ColFlex } from '../../styles/shared';

function ProConDiscussionSearchCard() {
  const proRate = '45%';
  const conRate = '55%';

  return (
    <CardContainer to="/search">
      <DiscussionTitle>다나카는 일본인인가?</DiscussionTitle>
      <ProConBlockBox>
        <ProConBlock isPro>
          <ProConRateText>
            찬성
            <br />
            {proRate}
          </ProConRateText>
        </ProConBlock>
        <ProConBlock isPro={false}>
          <ProConRateText>
            반대
            <br />
            {conRate}
          </ProConRateText>
        </ProConBlock>
      </ProConBlockBox>
    </CardContainer>
  );
}

const CardContainer = styled(Link)`
  ${ColFlex}
  width: 320px;
  height: 275px;
  border: none;
  border-radius: 0;
  margin: 0 20px 50px;
`;

const DiscussionTitle = styled.h3`
  ${Flex}
  flex: 2;
  font-weight: 700;
  font-size: var(--font-size-m);
`;

const ProConBlockBox = styled.div`
  ${Flex}
  flex: 8;
`;

const ProConBlock = styled.div<{ isPro: boolean }>`
  ${Flex}
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
`;

export default ProConDiscussionSearchCard;
