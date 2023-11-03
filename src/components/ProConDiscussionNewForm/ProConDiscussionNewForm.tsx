import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';

import DiscussionForm from '../DiscussionForm/DiscussionForm';
import DiscussionFormInputs from '../DiscussionForm/DiscussionFormInputs';

import useCreateProConDiscussion from '../../hooks/proConDiscussion/useCreateProConDiscussion';
import useInputs from '../../hooks/useInputs';
import { jwtAtom, userInfoAtom } from '../../recoil/atoms';
import DiscussionFormSubmitButton from '../DiscussionForm/DiscussionFormSubmitButton';

function ProConDiscussionForm() {
  const { avatarUrl, username } = useRecoilValue(userInfoAtom);
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
  const disabledSubmitButton =
    isLoading || title.length === 0 || content.length === 0;

  const handleFormSubmit = async (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await mutate({ title, content, isPro, token });
  };

  return (
    <DiscussionForm title="찬반 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <DiscussionFormInputs
        avatar={avatarUrl}
        author={username || ''}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="524px"
        isProConDiscussion
        isPro={isPro}
        onProButtonClick={() => setIsPro(true)}
        onConButtonClick={() => setIsPro(false)}
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

export default ProConDiscussionForm;
