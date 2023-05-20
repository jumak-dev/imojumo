import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useInputs from '../../hooks/useInputs';
import Button from '../UI/Button/Button';
import DiscussionInputs from './DiscussionInputs';
import PostNewForm from './PostNewForm';
import SearchBook from './SearchBook';
import useCreateBookDiscussion from '../../hooks/bookDiscussion/useCreateBookDiscussion';
import { AladinBookSearchItem } from '../../types';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';

function BookDiscussionForm() {
  const [{ title, content }, onChange] = useInputs({
    title: '',
    content: '',
  });
  const [book, setBook] = useState<AladinBookSearchItem | null>(null);
  const { mutate, isLoading } = useCreateBookDiscussion({
    onSuccess: (data) => {
      navigate(`/book-discussion/${data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const disabledSubmitButton =
    isLoading || book === null || title.length === 0 || content.length === 0;
  const token = useRecoilValue(jwtAtom);
  const { avatarUrl } = useRecoilValue(userInfoAtom);
  const navigate = useNavigate();

  const handleFormSubmit = async (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (book === null) {
      return;
    }

    if (token === null) {
      // Todo: 로그인 필요
      return;
    }

    await mutate({
      title,
      content,
      book: {
        isbn: book.isbn13,
        title: book.title,
        author: book.author,
        description: book.description,
        link: book.link,
        cover: book.cover,
        publisher: book.publisher,
        pubDate: book.pubDate,
        category: book.categoryName,
      },
      token,
    });
  };

  const handleSearch = (selectBook: AladinBookSearchItem) => {
    setBook(selectBook);
  };

  return (
    <PostNewForm title="독서 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <SearchBook onSearch={handleSearch} />
      <DiscussionInputs
        avatar={avatarUrl}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="300px"
      />

      <SubmitButton
        type="submit"
        buttonType="button"
        buttonColor="pink"
        buttonSize="l"
        onClick={handleFormSubmit}
        disabled={disabledSubmitButton}
      >
        등록하기
      </SubmitButton>
    </PostNewForm>
  );
}

const SubmitButton = styled(Button)`
  align-self: center;

  &:disabled {
    cursor: default;
    background: var(--color-placeholder);
    box-shadow: inset 0px 1px 0px 0px var(--color-placeholder);
    border-color: var(--color-placeholder);

    &:active {
      top: 0px;
    }
  }
`;

export default BookDiscussionForm;
