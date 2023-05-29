import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import DiscussionFormInputs from '../DiscussionForm/DiscussionFormInputs';
import DiscussionForm from '../DiscussionForm/DiscussionForm';
import DiscussionSearchBook from '../DiscussionForm/DiscussionSearchBook';

import useInputs from '../../hooks/useInputs';
import useCreateBookDiscussion from '../../hooks/bookDiscussion/useCreateBookDiscussion';

import { AladinBookSearchItem } from '../../types';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import DiscussionFormSubmitButton from '../DiscussionForm/DiscussionFormSubmitButton';

function BookDiscussionNewForm() {
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
  const { avatarUrl, username } = useRecoilValue(userInfoAtom);
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
      navigate('/login');
      return;
    }

    await mutate({
      title,
      content,
      book: {
        isbn: book.isbn,
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
    <DiscussionForm title="독서 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <DiscussionSearchBook onSearch={handleSearch} />
      <DiscussionFormInputs
        avatar={avatarUrl}
        author={username || ''}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="300px"
      />

      <DiscussionFormSubmitButton
        onClick={handleFormSubmit}
        disabled={disabledSubmitButton}
      >
        등록하기
      </DiscussionFormSubmitButton>
    </DiscussionForm>
  );
}

export default BookDiscussionNewForm;
