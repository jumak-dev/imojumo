import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { BsFillImageFill, BsChatLeftDots } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { FaUserLock, FaUserAltSlash } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { useId, useState } from 'react';
import { useRecoilValue } from 'recoil';
import MainContainer from '../styles/layout';
import Button from '../components/UI/Button/Button';
import useVisibles from '../hooks/useVisibles';
import useInputs from '../hooks/useInputs';
import { inputCSS, alignCenter } from '../styles/shared';
import Modal from '../components/UI/Modal/Modal';
import ContentList from '../components/MyPage/ContentList';
import { MyPageInfoProps } from '../types';
import useModal from '../hooks/useModal';
import MyPageModal from '../components/UI/Modal/MyPageModal';
import useGetMyPageInfo from '../hooks/myPage/useGetMyPageInfo';
import { jwtAtom } from '../recoil/atoms';
import Loading from '../components/UI/Loading/Loading';

// dummyPageInfo
const pageInfo = {
  page: 1,
  totalCount: 3,
  currentCount: 3,
  totalPage: 1,
};

function MyPage() {
  const [passwordVisible, togglePasswordVisible] = useVisibles(false);
  const [deleteAccountVisible, toggleDeleteAccountVisible] = useVisibles(false);
  const [{ curruntPassword, password, checkPassword }, onChange] = useInputs({
    curruntPassword: '',
    password: '',
    checkPassword: '',
  });
  const [
    showWithdrawalModal,
    handelWithdrawalShowModal,
    handleWithdrawalCloseModal,
  ] = useModal();
  const [showMyPageModal, handelMyPageShowModal, handelMyPageCloseModal] =
    useModal();
  const [paginate, setPaginate] = useState(1);
  const [myPageInfo, setMyPageInfo] = useState<MyPageInfoProps>({
    bookDiscussions: [],
    proConDiscussions: [],
    comments: [],
  });
  const token = useRecoilValue(jwtAtom) || '';

  function yesCallback() {
    console.log('yes');
  }

  const curruntPasswordId = useId();
  const passwordId = useId();
  const checkPasswordPasswordId = useId();

  const { data: mypageInfo } = useGetMyPageInfo({
    token,
    onSuccess: (myInfoData) => {
      if (myInfoData !== null) {
        setMyPageInfo(myInfoData);
      }
    },
  });

  if (!mypageInfo) {
    return <Loading />;
  }

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
          <button
            type="button"
            data-value="book"
            onClick={handelMyPageShowModal}
          >
            더보기 &gt;
          </button>
        </IndexBar>
        <ContentList articles={myPageInfo.bookDiscussions} />
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 찬반토론
            <DiscussionIcon />
          </IndexBarTitle>
          <button type="button" data-value="proCon">
            더보기 &gt;
          </button>
        </IndexBar>
        <ContentList articles={myPageInfo.proConDiscussions} />
      </IndexContainer>
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 댓글
            <ChatIcon />
          </IndexBarTitle>
          <button type="button" data-value="comments">
            더보기 &gt;
          </button>
        </IndexBar>
        <ContentList articles={myPageInfo.comments} />
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
            <Paragraph>
              사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다.
            </Paragraph>
            <Paragraph>
              탈퇴한 아이디는 본인과 타인 모두 재사용 및 복구가 불가하오니
              신중하게 선택하시기 바랍니다.
            </Paragraph>
            <Button
              type="button"
              buttonType="button"
              buttonColor="pink"
              buttonSize="m"
              onClick={handelWithdrawalShowModal}
              isBold
            >
              회원 탈퇴
            </Button>
          </ContentContainer>
        </HiddenContent>
      </IndexContainer>
      <Modal
        showModal={showWithdrawalModal}
        handleCloseModal={handleWithdrawalCloseModal}
        title="정말로 삭제하시겠습니까?"
        content="사용하고 계신 아이디는 탈퇴할 경우 재사용 및 복구가 불가능합니다."
        yesCallback={() => yesCallback()}
      />
      <MyPageModal
        showModal={showMyPageModal}
        responseDataArr={myPageInfo.bookDiscussions}
        handleCloseModal={handelMyPageCloseModal}
        currentPage={paginate}
        setPagenate={setPaginate}
        pageInfo={pageInfo}
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
  border-right: 1px solid var(--color-inputbox-line);

  img {
    width: 128px;
    border-radius: 50%;
    margin-right: 27px;
  }
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
  gap: 32px;
`;

const IndexContainer = styled.section`
  margin-bottom: 43px;
`;

const IndexBar = styled.div`
  ${alignCenter};
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
  ${alignCenter};
`;

const ContentContainer = styled.li`
  padding: 28px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--color-inputbox-line);
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
  ${inputCSS}
  height: 40px;
  padding-left: 10px;
`;

const Paragraph = styled.p`
  margin-bottom: 10px;
`;

export default MyPage;
