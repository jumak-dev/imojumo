import React from 'react';
import styled, { css } from 'styled-components';
import useInputs from '../../hooks/useInputs';
import { ColFlexCenter, ColFlex } from '../../styles/shared';
import Button, { ButtonBox } from '../UI/Button/Button';
import { Card } from '../UI/Card/Card';
import Input from '../UI/Input/Input';
import Textarea from '../UI/Textarea/Textarea';
import UserProfile from '../UI/UserProfile/UserProfile';

interface PostFormProps {
  onSubmit: () => void;
}

function PostForm({ onSubmit }: PostFormProps) {
  const [{ title, content }, onChange] = useInputs({
    title: '',
    content: '',
  });

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onSubmit();
  };

  const imageUrl =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  return (
    <PostFormContainer>
      <SerachBookContainer>
        <SearchBookTitle>토론 도서 선택하기</SearchBookTitle>
        <SearchBookInputContainer>
          <BookTitleInput placeholder="도서명을..." />
          <BookSearchButton
            type="button"
            buttonType="buttonRight"
            buttonColor="white"
            buttonSize="sm"
          >
            찾기
          </BookSearchButton>
        </SearchBookInputContainer>
      </SerachBookContainer>
      <DiscussionContainer>
        <UserProfile
          avatar={imageUrl}
          alt="프로필 이미지"
          itemGap="10px"
          nickname="yua77"
          size="sm"
        />
        <DiscussionInputContainer>
          <DiscussionTitleInput
            name="title"
            value={title}
            placeholder="토론 제목을 입력하세요..."
            onChange={onChange}
          />
          <DiscussionContentInput
            name="content"
            value={content}
            placeholder="내용을 입력하세요..."
            onChange={onChange}
          />
        </DiscussionInputContainer>
      </DiscussionContainer>

      <SubmitButton
        type="button"
        buttonType="submit"
        buttonColor="pink"
        buttonSize="l"
        onClick={handleFormSubmit}
      >
        등록하기
      </SubmitButton>
    </PostFormContainer>
  );
}

const PostFormContainer = styled.form`
  max-width: 970px;
  padding: 32px;
  gap: 60px;
  ${ColFlexCenter}
`;

const CardPadding = css`
  padding: 32px;
`;

const SerachBookContainer = styled.section`
  width: 100%;
  height: 171px;
  align-items: center;
  gap: 16px;

  ${Card}
  ${ColFlexCenter}
  ${CardPadding}
`;

const SearchBookTitle = styled.h3`
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.02em;
  color: #1d1d1b;
`;

const SearchBookInputContainer = styled.div`
  display: flex;
  width: 100%;
`;

const BookTitleInput = styled(Input)`
  flex: 1 1 0;
  border-radius: 5px 0 0 5px;
  border-right: 0;
`;

const BookSearchButton = styled(ButtonBox)`
  width: 74px;
  height: 50px;
  color: var(--black);
`;

const DiscussionContainer = styled.section`
  width: 100%;
  gap: 22px;
  display: flex;
  align-items: flex-start;
  ${Card}
  ${CardPadding}
`;

const DiscussionInputContainer = styled.div`
  flex: 1 1 0;
  gap: 22px;

  ${ColFlex}
`;

const DiscussionTitleInput = styled(Input)`
  width: 100%;
`;

const DiscussionContentInput = styled(Textarea)`
  min-height: 162px;
`;

const SubmitButton = styled(Button)`
  align-self: center;
`;

export default PostForm;
