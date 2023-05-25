import styled, { css } from 'styled-components';
import { GoBook } from 'react-icons/go';
import { BsFillImageFill, BsChatLeftDots } from 'react-icons/bs';
import { BiTrash } from 'react-icons/bi';
import { FaUserLock, FaUserAltSlash } from 'react-icons/fa';
import { GiDiscussion } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
import { useId, useState } from 'react';
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

// dummyData
const data: MyPageInfoProps = {
  bookDiscussions: [
    {
      id: 10,
      author: 'wjdwjdtn92',
      title: 'ddd',
      content: 'dddd',
      views: 0,
      likeCount: 0,
      createdAt: '2023-05-18T02:01:42.206Z',
      updatedAt: '2023-05-18T02:01:42.206Z',
      avatarUrl: 'your-avatar-url',
      book: {
        id: 5,
        isbn: '9791158392246',
        title:
          '도메인 주도 설계 철저 입문 - 코드와 패턴으로 밑바닥부터 이해하는 DDD',
        author: '나루세 마사노부 (지은이), 심효섭 (옮긴이)',
        translator: null,
        description:
          "에릭 에반스의 《도메인 주도 설계》를 읽고 감명받아 쓰게 된 도메인 주도 설계 입문서이며, 앞으로 《도메인 주도 설계》를 읽으려는 독자, 또는 이미 해당 도서를 읽었더라도 '더 이해하기 쉬운 입문서'를 필요로 하는 엔지니어를 대상으로 한다.",
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=252622256&amp;partner=openAPI&amp;start=api',
        cover:
          'https://image.aladin.co.kr/product/25262/22/coversum/k752633106_2.jpg',
        publisher: '위키북스',
        pubDate: '2020-10-14',
        category: '국내도서>컴퓨터/모바일>컴퓨터 공학>소프트웨어 공학',
        createdAt: '2023-05-18T01:55:04.067Z',
        updatedAt: '2023-05-18T01:55:04.067Z',
      },
      postLikedByUser: false,
    },
    {
      id: 9,
      author: 'wjdwjdtn92',
      title: 'dd',
      content: 'dd',
      views: 0,
      likeCount: 0,
      createdAt: '2023-05-18T01:55:04.088Z',
      updatedAt: '2023-05-18T01:55:04.088Z',
      avatarUrl: 'your-avatar-url',
      book: {
        id: 5,
        isbn: '9791158392246',
        title:
          '도메인 주도 설계 철저 입문 - 코드와 패턴으로 밑바닥부터 이해하는 DDD',
        author: '나루세 마사노부 (지은이), 심효섭 (옮긴이)',
        translator: null,
        description:
          "에릭 에반스의 《도메인 주도 설계》를 읽고 감명받아 쓰게 된 도메인 주도 설계 입문서이며, 앞으로 《도메인 주도 설계》를 읽으려는 독자, 또는 이미 해당 도서를 읽었더라도 '더 이해하기 쉬운 입문서'를 필요로 하는 엔지니어를 대상으로 한다.",
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=252622256&amp;partner=openAPI&amp;start=api',
        cover:
          'https://image.aladin.co.kr/product/25262/22/coversum/k752633106_2.jpg',
        publisher: '위키북스',
        pubDate: '2020-10-14',
        category: '국내도서>컴퓨터/모바일>컴퓨터 공학>소프트웨어 공학',
        createdAt: '2023-05-18T01:55:04.067Z',
        updatedAt: '2023-05-18T01:55:04.067Z',
      },
      postLikedByUser: false,
    },
    {
      id: 12,
      author: 'wjdwjdtn92',
      title: 'ddd',
      content: 'dddd',
      views: 0,
      likeCount: 0,
      createdAt: '2023-05-18T02:01:42.206Z',
      updatedAt: '2023-05-18T02:01:42.206Z',
      avatarUrl: 'your-avatar-url',
      book: {
        id: 5,
        isbn: '9791158392246',
        title:
          '도메인 주도 설계 철저 입문 - 코드와 패턴으로 밑바닥부터 이해하는 DDD',
        author: '나루세 마사노부 (지은이), 심효섭 (옮긴이)',
        translator: null,
        description:
          "에릭 에반스의 《도메인 주도 설계》를 읽고 감명받아 쓰게 된 도메인 주도 설계 입문서이며, 앞으로 《도메인 주도 설계》를 읽으려는 독자, 또는 이미 해당 도서를 읽었더라도 '더 이해하기 쉬운 입문서'를 필요로 하는 엔지니어를 대상으로 한다.",
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=252622256&amp;partner=openAPI&amp;start=api',
        cover:
          'https://image.aladin.co.kr/product/25262/22/coversum/k752633106_2.jpg',
        publisher: '위키북스',
        pubDate: '2020-10-14',
        category: '국내도서>컴퓨터/모바일>컴퓨터 공학>소프트웨어 공학',
        createdAt: '2023-05-18T01:55:04.067Z',
        updatedAt: '2023-05-18T01:55:04.067Z',
      },
      postLikedByUser: false,
    },
    {
      id: 11,
      author: 'wjdwjdtn92',
      title: 'dd',
      content: 'dd',
      views: 0,
      likeCount: 0,
      createdAt: '2023-05-18T01:55:04.088Z',
      updatedAt: '2023-05-18T01:55:04.088Z',
      avatarUrl: 'your-avatar-url',
      book: {
        id: 5,
        isbn: '9791158392246',
        title:
          '도메인 주도 설계 철저 입문 - 코드와 패턴으로 밑바닥부터 이해하는 DDD',
        author: '나루세 마사노부 (지은이), 심효섭 (옮긴이)',
        translator: null,
        description:
          "에릭 에반스의 《도메인 주도 설계》를 읽고 감명받아 쓰게 된 도메인 주도 설계 입문서이며, 앞으로 《도메인 주도 설계》를 읽으려는 독자, 또는 이미 해당 도서를 읽었더라도 '더 이해하기 쉬운 입문서'를 필요로 하는 엔지니어를 대상으로 한다.",
        link: 'http://www.aladin.co.kr/shop/wproduct.aspx?ItemId=252622256&amp;partner=openAPI&amp;start=api',
        cover:
          'https://image.aladin.co.kr/product/25262/22/coversum/k752633106_2.jpg',
        publisher: '위키북스',
        pubDate: '2020-10-14',
        category: '국내도서>컴퓨터/모바일>컴퓨터 공학>소프트웨어 공학',
        createdAt: '2023-05-18T01:55:04.067Z',
        updatedAt: '2023-05-18T01:55:04.067Z',
      },
      postLikedByUser: false,
    },
  ],
  proConDiscussions: [
    {
      id: 14,
      author: 'wjdwjdtn92',
      title: '나는 바보이다',
      content: '멍충이인가?',
      views: 0,
      createdAt: '2023-05-19T11:12:45.181Z',
      updatedAt: '2023-05-19T11:12:45.181Z',
      proCount: 1,
      conCount: 0,
      isVote: true,
      isPro: true,
      proLeader: {
        username: 'wjdwjdtn92',
        avatarUrl: null,
      },
      conLeader: null,
    },
    {
      id: 13,
      author: 'wjdwjdtn92',
      title: '아이폰 vs 갤럭시',
      content: '찬성은 아이폰, 반대는 갤럭시 (역시 아이폰이지)',
      views: 0,
      createdAt: '2023-05-19T09:10:28.976Z',
      updatedAt: '2023-05-19T09:10:28.976Z',
      proCount: 1,
      conCount: 0,
      isVote: true,
      isPro: true,
      proLeader: {
        username: 'wjdwjdtn92',
        avatarUrl: null,
      },
      conLeader: null,
    },
    {
      id: 15,
      author: 'wjdwjdtn92',
      title: '나는 바보이다',
      content: '멍충이인가?',
      views: 0,
      createdAt: '2023-05-19T11:12:45.181Z',
      updatedAt: '2023-05-19T11:12:45.181Z',
      proCount: 1,
      conCount: 0,
      isVote: true,
      isPro: true,
      proLeader: {
        username: 'wjdwjdtn92',
        avatarUrl: null,
      },
      conLeader: null,
    },
    {
      id: 16,
      author: 'wjdwjdtn92',
      title: '아이폰 vs 갤럭시',
      content: '찬성은 아이폰, 반대는 갤럭시 (역시 아이폰이지)',
      views: 0,
      createdAt: '2023-05-19T09:10:28.976Z',
      updatedAt: '2023-05-19T09:10:28.976Z',
      proCount: 1,
      conCount: 0,
      isVote: true,
      isPro: true,
      proLeader: {
        username: 'wjdwjdtn92',
        avatarUrl: null,
      },
      conLeader: null,
    },
  ],
  comments: [
    {
      id: 23,
      postId: 11,
      content: '옴뇸뇸',
      createdAt: '2023-05-19T04:58:42.627Z',
      updatedAt: '2023-05-19T04:58:42.627Z',
      type: 'book',
    },
    {
      id: 22,
      postId: 1,
      content: '떡볶이',
      createdAt: '2023-05-19T04:58:28.504Z',
      updatedAt: '2023-05-19T04:58:28.504Z',
      type: 'proCon',
    },
  ],
};

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
          <button
            type="button"
            data-value="book"
            onClick={handelMyPageShowModal}
          >
            더보기 &gt;
          </button>
        </IndexBar>
        <ContentList articles={data.bookDiscussions} />
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
        <ContentList articles={data.proConDiscussions} />
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
        <ContentList articles={data.comments} />
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
        responseDataArr={data.bookDiscussions}
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
