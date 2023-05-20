import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import useInputs from '../../hooks/useInputs';
import Button from '../UI/Button/Button';
import DiscussionInputs from './DiscussionInputs';
import PostNewForm from './PostNewForm';
import useCreateProConDiscussion from '../../hooks/proConDiscussion/useCreateProConDiscussion';
import { jwtAtom } from '../../recoil/atoms';

function ProConDiscussionForm() {
  const [{ title, content }, onChange] = useInputs({
    title: '',
    content: '',
  });
  const [isPro, setIsPro] = useState(true);
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreateProConDiscussion({
    onSuccess: (data) => {
      navigate(`/pro-con-discussion/${data.id}`);
    },
    onError: (error) => {
      console.log(`err: ${error.message[0]}`);
    },
  });
  const token = useRecoilValue(jwtAtom);

  const handleFormSubmit = async (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await mutate({ title, content, isPro, token });
  };

  const avatar =
    'https://image.aladin.co.kr/product/27222/22/cover500/e822538010_1.jpg';

  return (
    <PostNewForm title="찬반 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <DiscussionInputs
        avatar={avatar}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="524px"
        isProConDiscussion
        isPro={isPro}
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

export default ProConDiscussionForm;
