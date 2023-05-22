import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../UI/Button/Button';
import DiscussionFormInputs from '../DiscussionForm/DiscussionFormInputs';
import DiscussionForm from '../DiscussionForm/DiscussionForm';
import DiscussionSearchBook from '../DiscussionForm/DiscussionSearchBook';

import useInputs from '../../hooks/useInputs';
import useUpdateBookDiscussion from '../../hooks/bookDiscussion/useUpdateBookDiscussion';

import { jwtAtom } from '../../recoil/atoms';
import useBookDiscussionDetail from '../../hooks/bookDiscussion/useBookDiscussionDetail';

function BookDisscussionEditForm() {
  const navigate = useNavigate();
  const { postId } = useParams() || '';
  const token = useRecoilValue(jwtAtom) ?? '';

  const { data: bookDiscussionDetail } = useBookDiscussionDetail({
    token,
    id: Number(postId),
  });

  const [{ title, content }, onChange, _, setInputs] = useInputs({
    title: '',
    content: '',
  });
  const { mutate, isLoading } = useUpdateBookDiscussion({
    onSuccess: (data) => {
      navigate(`/book-discussion/${data.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const getDisabledSubmitButton = () => {
    if (isLoading) {
      return false;
    }

    if (title.length === 0 || content.length === 0) {
      return false;
    }

    if (
      title !== bookDiscussionDetail?.title ||
      content !== bookDiscussionDetail?.content
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

    if (token === null) {
      navigate('/login');
      return;
    }

    if (postId) {
      await mutate({
        title,
        content,
        token,
        postId: Number(postId),
      });
    }
  };

  useEffect(() => {
    setInputs('title', bookDiscussionDetail?.title || '');
    setInputs('content', bookDiscussionDetail?.content || '');
  }, [bookDiscussionDetail]);

  return (
    <DiscussionForm title="독서 토론 작성 입력폼" onSubmit={handleFormSubmit}>
      <DiscussionSearchBook
        onSearch={() => {}}
        isSearchDisabled
        initBookTitle={bookDiscussionDetail?.book.title}
      />
      <DiscussionFormInputs
        avatar={bookDiscussionDetail?.avatarUrl || null}
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
        수정하기
      </SubmitButton>
    </DiscussionForm>
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

export default BookDisscussionEditForm;
