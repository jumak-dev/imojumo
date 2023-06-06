import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainContainer from '../styles/layout';
import Button from '../components/UI/Button/Button';
import { flex } from '../styles/shared';
import notFound from '../assets/notFound.jpg';

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <NotFoundPageContainer>
      <InformationText>
        죄송합니다. 찾으시는 페이지가 존재하지 않습니다.
      </InformationText>
      <BookImage alt="Page Not Found" src={notFound} />
      <Button
        type="button"
        buttonType="button"
        buttonColor="mint"
        buttonSize="m"
        onClick={handleClick}
      >
        홈으로 가기
      </Button>
    </NotFoundPageContainer>
  );
}

const NotFoundPageContainer = styled(MainContainer)`
  ${flex}
  flex-direction: column;
  gap: 24px;
`;

const InformationText = styled.p`
  font-weight: 600;
  font-size: var(--font-size-xl);
  color: var(--color-content-text);
`;

const BookImage = styled.img`
  width: 300px;
  height: 220px;
`;

export default NotFoundPage;
