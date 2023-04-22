import React, { useState } from 'react';
import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';
import Button from '../UI/Button/Button';
import DiscussionInputs from './DiscussionInputs';
import PostNewForm from './PostNewForm';

interface PostFormProps {
  onSubmit: () => void;
}

function ProConDiscussionFrom({ onSubmit }: PostFormProps) {
  const [{ title, content }, onChange] = useInputs({
    title: '',
    content: '',
  });
  const [isPro, setIsPro] = useState(true);

  const handleFormSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    onSubmit();
  };

  const avatar =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  return (
    <PostNewForm title="찬반 토론 작성 입력폼">
      <DiscussionInputs
        avatar={avatar}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="524px"
        isProConDiscussion
        onProButtonClick={() => setIsPro(true)}
        onConButtonClick={() => setIsPro(false)}
      />

      <SubmitButton
        type="submit"
        buttonType="button"
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

export default ProConDiscussionFrom;
