import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { BsFillImageFill, BsChatLeftDots } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { FaUserLock, FaUserAltSlash } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useId, useState } from 'react';
import MainContainer from '../styles/layout';
import Button from '../components/UI/Button/Button';
import useVisibles from '../hooks/useVisibles';
import useInputs from '../hooks/useInputs';
import { InputCSS } from '../styles/shared';
import Modal from '../components/UI/Modal/Modal';

// dummyData
const data = {
  bookDiscussion: [
    {
      id: 0,
      title: '미드나잇라이브러리는 울랄라솰랄라라',
      path: '#',
      date: '2023.02.04',
      likes: 24,
    },
    {
      id: 1,
      title: '미드나잇라이브러리는 울랄라솰랄라라',
      path: '#',
      date: '2023.02.04',
      likes: 24,
    },
  ],
  proConDiscussion: [
    {
      id: 0,
      title:
        '갑자기 불상한척? 한탕해서 편하게 살려고 주식투자해서 손실난걸 왜 불상한양 기사쓰냐? 잔고 5000만원 남아서 라면 먹는게 불',
      path: '#',
      date: '2023.02.04',
    },
    {
      id: 1,
      title:
        '갑자기 불상한척? 한탕해서 편하게 살려고 주식투자해서 손실난걸 왜 불상한양 기사쓰냐? 잔고 5000만원 남아서 라면 먹는게 불',
      path: '#',
      date: '2023.02.04',
    },
  ],
  myComent: [
    {
      id: 0,
      title: '미드나잇라이브러리는 울랄라솰랄라라',
      path: '#',
      date: '2023.02.04',
    },
    {
      id: 1,
      title: '미드나잇라이브러리는 울랄라솰랄라라',
      path: '#',
      date: '2023.02.04',
    },
  ],
};

interface ContentListProps {
  array: Array<{
    path: string;
    title: string;
    likes?: number;
    date: string;
    id: number;
  }>;
}

function ContentList({ array }: ContentListProps) {
  return (
    <ul>
      {array.map((obj) => (
        <ContentContainer key={obj.id}>
          <ContentTop>
            <ContentLink to={obj.path}>{obj.title}</ContentLink>
            {obj.likes && (
              <ContentLikeBox>
                {obj.likes}
                <HeartIcon />
              </ContentLikeBox>
            )}
          </ContentTop>
          <ContentBottom>{obj.date}</ContentBottom>
        </ContentContainer>
      ))}
    </ul>
  );
}

function MyPage() {
  const [passwordVisible, togglePasswordVisible] = useVisibles(false);
  const [deleteAccountVisible, toggleDeleteAccountVisible] = useVisibles(false);
  const [{ curruntPassword, password, checkPassword }, onChange] = useInputs({
    curruntPassword: '',
    password: '',
    checkPassword: '',
  });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  function yesCallback() {
    console.log('yes');
  }

  const curruntPasswordId = useId();
  const passwordId = useId();
  const checkPasswordPasswordId = useId();

  return (
    <MainContainer>
      <ProfileContianer>
        <ImageSection>
          <img
            src="https://blog.kakaocdn.net/dn/0mySg/btqCUccOGVk/nQ68nZiNKoIEGNJkooELF1/img.jpg"
            alt="profile"
          />
        </ImageSection>
        <InfoSection>
          <InfoTop>
            <Nickname>유아유아짱</Nickname>
            <EditButton type="button">수정</EditButton>
          </InfoTop>
          <InfoBottom>
            <Button
              type="button"
              buttonType="button"
              buttonColor="mint"
              buttonSize="m"
            >
              <BsFillImageFill size={17} />
              이미지 업로드
            </Button>
            <Button
              type="button"
              buttonType="button"
              buttonColor="pink"
              buttonSize="m"
            >
              <BiTrash size={22} />
              이미지 제거
            </Button>
          </InfoBottom>
        </InfoSection>
      </ProfileContianer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 독서토론
            <BookIcon />
          </IndexBarTitle>
          <button type="button">더보기 &gt;</button>
        </IndexBar>
        <ContentList array={data.bookDiscussion} />
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 찬반토론
            <DiscussionIcon />
          </IndexBarTitle>
          <button type="button">더보기 &gt;</button>
        </IndexBar>
        <ContentList array={data.proConDiscussion} />
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 댓글
            <ChatIcon />
          </IndexBarTitle>
          <button type="button">더보기 &gt;</button>
        </IndexBar>
        <ContentList array={data.myComent} />
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            비밀번호 수정
            <PasswordEditIcon />
          </IndexBarTitle>
          <button type="button" onClick={togglePasswordVisible}>
            <DownWardIcon />
          </button>
        </IndexBar>
        <HiddenContent visible={passwordVisible}>
          <ContentContainer>
            <InputContainer>
              <label htmlFor={curruntPasswordId}>현재 비밀번호</label>
              <Input
                type="password"
                id={curruntPasswordId}
                value={curruntPassword}
                name="curruntPassword"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor={passwordId}>비밀번호</label>
              <Input
                type="password"
                id={passwordId}
                value={password}
                name="password"
                onChange={onChange}
              />
            </InputContainer>
            <InputContainer>
              <label htmlFor={checkPasswordPasswordId}>비밀번호 확인</label>
              <Input
                type="password"
                id={checkPasswordPasswordId}
                value={checkPassword}
                name="checkPassword"
                onChange={onChange}
              />
            </InputContainer>
            <Button
              type="button"
              buttonType="button"
              buttonColor="mint"
              buttonSize="m"
              isBold
            >
              비밀번호 변경
            </Button>
          </ContentContainer>
        </HiddenContent>
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            회원 탈퇴
            <DeleteAccountIcon />
          </IndexBarTitle>
          <button type="button" onClick={toggleDeleteAccountVisible}>
            <DownWardIcon />
          </button>
        </IndexBar>
        <HiddenContent visible={deleteAccountVisible}>
          <ContentContainer>
            <P>
              사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.
            </P>
            <P>
              탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니
              신중하게 선택하시기 바랍니다.
            </P>
            <Button
              type="button"
              buttonType="button"
              buttonColor="pink"
              buttonSize="m"
              onClick={handleShowModal}
              isBold
            >
              회원 탈퇴
            </Button>
          </ContentContainer>
        </HiddenContent>
      </IndexContainer>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title="정말로 삭제하시겠습니까?"
        content="사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다."
        yesCallback={() => yesCallback()}
      />
    </MainContainer>
  );
}

const iconCSS = css`
  margin-left: 8px;
  font-size: 24px;
`;

const BookIcon = styled(GoBook)`
  ${iconCSS};
  color: var(--color-primary-mint);
`;

const DiscussionIcon = styled(GiDiscussion)`
  ${iconCSS};
  color: var(--color-primary-pink);
`;

const ChatIcon = styled(BsChatLeftDots)`
  ${iconCSS};
  color: var(--black);
`;

const HeartIcon = styled(AiFillHeart)`
  ${iconCSS};
  color: var(--color-heart);
`;

const PasswordEditIcon = styled(FaUserLock)`
  ${iconCSS};
  color: var(--black);
`;

const DownWardIcon = styled(IoIosArrowDown)`
  ${iconCSS};
  color: var(--black);
`;

const DeleteAccountIcon = styled(FaUserAltSlash)`
  ${iconCSS};
  color: var(--black);
`;

const ProfileContianer = styled.section`
  display: flex;
  margin-top: 64px;
  margin-bottom: 64px;
`;

const ImageSection = styled.section`
  img {
    width: 128px;
    border-radius: 50%;
    margin-right: 27px;
  }

  border-right: 1px solid black;
`;

const InfoSection = styled.section`
  margin-left: 27px;
`;

const InfoTop = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 6px;
  margin-bottom: 28px;
`;

const Nickname = styled.span`
  font-size: var(--font-size-xxl);
  font-weight: 600;
  margin-bottom: 4px;
`;

const EditButton = styled.button`
  font-size: var(--font-size-m);
  margin-left: 19px;
  padding: 0;
`;

const InfoBottom = styled.div`
  display: flex;
  button + button {
    margin-left: 32px;
  }
`;

const IndexContainer = styled.section`
  margin-bottom: 43px;
`;

const IndexBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 46px;
  background-color: #f8f8f8;
  font-size: var(--font-size-l);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  margin-bottom: 15px;
  font-weight: 600;
  justify-content: space-between;
`;

const IndexBarTitle = styled.div`
  display: flex;
  align-items: center;
`;

const ContentContainer = styled.li`
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-inputbox-line);
`;

const ContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
`;

const ContentBottom = styled.div`
  font-size: var(--font-size-sm);
`;

const ContentLikeBox = styled.div`
  display: flex;
  align-items: center;
`;

const ContentLink = styled(Link)`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  height: 17px;
  font-size: var(--font-size-m);
  font-weight: 600;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

interface HiddenContentProps {
  visible: boolean;
}

const HiddenContent = styled.div<HiddenContentProps>`
  max-height: ${(props) => (props.visible ? '500px' : '0')};
  overflow: hidden;
  transition: max-height 0.45s ease-in-out;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  label {
    margin-bottom: 13px;
  }
`;

const Input = styled.input`
  ${InputCSS}
  height: 40px;
  padding-left: 10px;
`;

const P = styled.p`
  margin-bottom: 10px;
`;

export default MyPage;
