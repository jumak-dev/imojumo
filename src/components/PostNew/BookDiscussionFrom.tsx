import React from 'react';
import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';
import { ColFlexCenter } from '../../styles/shared';
import Button from '../UI/Button/Button';
import DiscussionInputs from './DiscussionInputs';
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
    <PostFormContainer>
      <SearchBook onSearch={handleSearch} />
      <DiscussionInputs
        avatar={avatar}
        title={title}
        content={content}
        onChange={onChange}
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
    </PostFormContainer>
  );
}

const PostFormContainer = styled.form`
  max-width: 970px;
  padding: 32px;
  gap: 60px;
  ${ColFlexCenter}
`;

const SubmitButton = styled(Button)`
  align-self: center;
`;

export default BookDiscussionFrom;
