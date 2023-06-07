import styled from 'styled-components';
import bookVector from '../../assets/bookVector.jpg';
import { colFlex } from '../../styles/shared';

function WelcomeMessage() {
  return (
    <TextVectorContainer>
      <p>이모저모에 오신 것을 환영합니다.</p>
      <p>자유롭게 토론해보세요.</p>
      <Img alt="bookLogo" src={bookVector} />
    </TextVectorContainer>
  );
}

const TextVectorContainer = styled.section`
  ${colFlex}
  align-items: center;
  font-size: var(--font-size-xxl);

  p {
    margin-bottom: 5px;
  }
`;

const Img = styled.img`
  width: 210px;
  height: 185px;
`;

export default WelcomeMessage;
