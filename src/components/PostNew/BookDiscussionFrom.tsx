import React from 'react';
import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';
import { ScreenReaderTextCSS } from '../../styles/shared';
import Button from '../UI/Button/Button';
import DiscussionInputs from './DiscussionInputs';
import PostNewForm from './PostNewForm';
import SearchBook from './SearchBook';

interface PostFormProps {
  onSubmit: () => void;
}

function BookDiscussionFrom({ onSubmit }: PostFormProps) {
  const [{ title, content }, onChange] = useInputs({
    title: '',
    content: '',
  });

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onSubmit();
  };

  const handleSearch = (bookTitle: string) => {
    console.log(bookTitle);
  };

  const avatar =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  return (
    <PostNewForm title="독서 토론 작성 입력폼">
      <SearchBook onSearch={handleSearch} />
      <DiscussionInputs
        avatar={avatar}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="300px"
      />

      <SubmitButton
        type="button"
        buttonType="submit"
        buttonColor="pink"
        buttonSize="l"
        onClick={handleFormSubmit}
      >
        등록하기
      </SubmitButton>
    </PostNewForm>
  );
}

const SubmitButton = styled(Button)`
  align-self: center;
`;

export default BookDiscussionFrom;
