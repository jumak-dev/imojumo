import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import DiscussionForm from '../DiscussionForm/DiscussionForm';
import DiscussionFormInputs from '../DiscussionForm/DiscussionFormInputs';

import useInputs from '../../hooks/useInputs';
import { jwtAtom } from '../../recoil/atoms';
import useUpdateProConDiscussion from '../../hooks/proConDiscussion/useUpdateProConDiscussion';
import useProConDiscussionDetail from '../../hooks/proConDiscussion/useProConDiscussionDetail';
import Loading from '../UI/Loading/Loading';
import DiscussionFormSubmitButton from '../DiscussionForm/DiscussionFormSubmitButton';

function ProConDiscussionEditForm() {
  const navigate = useNavigate();
  const { postId } = useParams() || '';
  const token = useRecoilValue(jwtAtom) ?? '';

  const [isPro, setIsPro] = useState(true);
  const [{ title, content }, onChange, _, __, setInputs] = useInputs({
    title: '',
    content: '',
  });

  const { data: proConDiscussionDetail, isLoading: isGetDataLoading } =
    useProConDiscussionDetail({
      token,
      delay: 500,
      id: Number(postId),
      onSuccess: (data) => {
        if (!data) {
          return;
        }

        setInputs({
          title: data.title,
          content: data.content,
        });
        setIsPro(data.isPro);
      },
    });

  const { mutate, isLoading } = useUpdateProConDiscussion({
    onSuccess: (data) => {
      navigate(`/pro-con-discussion/${data.id}`);
    },
    onError: (error) => {
      console.log(`err: ${error.message[0]}`);
    },
  });

  const getDisabledSubmitButton = () => {
    if (isLoading || !proConDiscussionDetail) {
      return false;
    }

    if (title.length === 0 || content.length === 0) {
      return false;
    }

    if (
      title !== proConDiscussionDetail.title ||
      content !== proConDiscussionDetail.content ||
      isPro !== proConDiscussionDetail.isPro
    ) {
      return false;
    }
    return true;
  };
  const disabledSubmitButton = getDisabledSubmitButton();

  const handleFormSubmit = async (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    await mutate({ id: Number(postId), title, content, isPro, token });
  };

  if (isGetDataLoading) {
    return <Loading />;
  }

  return (
    <DiscussionForm title="찬반 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <DiscussionFormInputs
        avatar={proConDiscussionDetail?.avatarUrl || null}
        author={proConDiscussionDetail?.author || ''}
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
        수정하기
      </DiscussionFormSubmitButton>
    </DiscussionForm>
  );
}

export default ProConDiscussionEditForm;
