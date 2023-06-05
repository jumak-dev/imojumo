import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { BsChatLeftDots } from 'react-icons/bs';

import { FaUserLock, FaUserAltSlash } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import React, { useId, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainContainer from '../styles/layout';
import Button from '../components/UI/Button/Button';
import useVisibles from '../hooks/useVisibles';
import useInputs from '../hooks/useInputs';
import { inputCSS, alignCenter, colFlex } from '../styles/shared';
import Modal from '../components/UI/Modal/Modal';
import ContentList from '../components/MyPage/ContentList';
import { MyPageInfoProps, MyPageModalData } from '../types';
import useModal from '../hooks/useModal';
import MyPageModal from '../components/UI/Modal/MyPageModal';
import useGetMyPageInfo from '../hooks/myPage/useGetMyPageInfo';
import { jwtAtom, userInfoAtom } from '../recoil/atoms';
import Loading from '../components/UI/Loading/Loading';
import useBookDiscussion from '../hooks/bookDiscussion/useBookDiscussion';
import useProConDiscussion from '../hooks/proConDiscussion/useProConDiscussion';
import useMyComments from '../hooks/myPage/useMyComments';
import useDeleteUserAccount from '../hooks/myPage/useDeleteUserAccount';
import useUpdateUsername from '../hooks/myPage/useUpdateUsername';
import passwordValidate from '../utils/auth/passwordValidate';
import useUpdateUserPassword from '../hooks/myPage/useUpdateUserPassword';
import goToTop from '../utils/goToTop';
import MyPageProfileSection from '../components/MyPage/MyPageProfileSection';

function MyPage() {
  const [passwordVisible, togglePasswordVisible] = useVisibles(false);
  const [deleteAccountVisible, toggleDeleteAccountVisible] = useVisibles(false);
  const [{ curruntPassword, password, checkPassword }, onChange, reset] =
    useInputs({
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
    useModal(() => {
      ModalDataCloseCallBack();
    });
  const [paginate, setPaginate] = useState(1);
  const [myPageInfo, setMyPageInfo] = useState<MyPageInfoProps>({
    bookDiscussions: [],
    proConDiscussions: [],
    comments: [],
  });
  const [modalData, setModalData] = useState<MyPageModalData | null>(null);
  const [modalCategory, setModalCategory] = useState('');
  const token = useRecoilValue(jwtAtom) || '';
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const navigate = useNavigate();
  const resetJwtAtom = useResetRecoilState(jwtAtom);
  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const { mutate: deleteUserAccountMutate } = useDeleteUserAccount({
    onSuccess: () => {
      resetJwtAtom();
      resetUserInfo();
      navigate(`/`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const { mutate: updateUsernameMutate } = useUpdateUsername({
    onSuccess: (responceUserInfo) => {
      setUserInfo(responceUserInfo);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: updateUserPasswordMutate } = useUpdateUserPassword({
    onSuccess: () => {
      reset();
      togglePasswordVisible();
      goToTop();
    },
    onError: (error) => {
      console.log(error);
      setErrorMessage(String(error.message));
    },
  });

  function yesCallback() {
    deleteUserAccountMutate({ token });
  }

  const curruntPasswordId = useId();
  const passwordId = useId();
  const checkPasswordPasswordId = useId();

  const ModalDataCloseCallBack = () => {
    setModalData(null);
    setModalCategory('');
    setPaginate(1);
  };
  const [errorMessage, setErrorMessage] = useState('');

  const { isLoading } = useGetMyPageInfo({
    token,
    onSuccess: (myInfoData) => {
      if (myInfoData !== null) {
        setMyPageInfo(myInfoData);
      }
    },
  });

  const { isLoading: bookDiscussionLoading } = useBookDiscussion({
    page: paginate || 1,
    limit: 4,
    token: token || '',
    myPostsOnly: true,
    enabled: modalCategory === 'book',
    onSuccess: (bookData) => {
      if (bookData !== null) {
        setModalData(bookData);
      }
    },
  });

  const { isLoading: proConDiscussionLoading } = useProConDiscussion({
    page: paginate || 1,
    limit: 4,
    token: token || '',
    myPostsOnly: true,
    enabled: modalCategory === 'proCon',
    onSuccess: (proConData) => {
      if (proConData !== null) {
        setModalData(proConData);
      }
    },
  });

  const { isLoading: myCommentsLoading } = useMyComments({
    page: paginate || 1,
    limit: 4,
    token: token || '',
    enabled: modalCategory === 'comments',
    onSuccess: (myComments) => {
      if (myComments !== null) {
        setModalData(myComments);
      }
    },
  });

  const handelSeeMoreButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    handelMyPageShowModal();
    const category = e.currentTarget.dataset.value || '';
    setModalCategory(category);
  };

  const handleChangePasswordButton = () => {
    if (password.length > 0 && checkPassword.length > 0) {
      const { isVailed, error } = passwordValidate(password, checkPassword);
      setErrorMessage(error);
      if (isVailed) {
        updateUserPasswordMutate({
          token,
          password: curruntPassword,
          newPassword: password,
        });
      }
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <MainContainer>
      <MyPageProfileSection
        token={token}
        userInfo={userInfo}
        updateUsernameMutate={updateUsernameMutate}
      />
      <IndexContainer>
        <IndexBar>
          <IndexBarTitle>
            내가 작성한 독서토론
            <BookIcon />
          </IndexBarTitle>
          <button type="button" data-value="book" onClick={handelSeeMoreButton}>
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
          <button
            type="button"
            data-value="proCon"
            onClick={handelSeeMoreButton}
          >
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
          <button
            type="button"
            data-value="comments"
            onClick={handelSeeMoreButton}
          >
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
            <DisplayErrorWrraper>
              {errorMessage.length > 0 && errorMessage}
            </DisplayErrorWrraper>
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
              onClick={handleChangePasswordButton}
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
        responseDataObj={modalData}
        handleCloseModal={handelMyPageCloseModal}
        currentPage={paginate}
        setPagenate={setPaginate}
        isLoading={
          bookDiscussionLoading || proConDiscussionLoading || myCommentsLoading
        }
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

const EditButton = styled.button`
  font-size: var(--font-size-m);
  margin-left: 19px;
  padding: 0;
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

const DisplayErrorWrraper = styled.ul`
  ${colFlex}
  margin-bottom: 15px;
  color: var(--color-heart);
  font-size: var(--font-size-m);
  line-height: 20px;
`;

export default MyPage;
