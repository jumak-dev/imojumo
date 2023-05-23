import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import DiscussionFormInputs from '../DiscussionForm/DiscussionFormInputs';
import DiscussionForm from '../DiscussionForm/DiscussionForm';
import DiscussionSearchBook from '../DiscussionForm/DiscussionSearchBook';

import useInputs from '../../hooks/useInputs';
import useUpdateBookDiscussion from '../../hooks/bookDiscussion/useUpdateBookDiscussion';

import { jwtAtom } from '../../recoil/atoms';
import useBookDiscussionDetail from '../../hooks/bookDiscussion/useBookDiscussionDetail';
import DiscussionFormSubmitButton from '../DiscussionForm/DiscussionFormSubmitButton';

function BookDiscussionEditForm() {
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
    if (isLoading || !bookDiscussionDetail) {
      return false;
    }

    if (title.length === 0 || content.length === 0) {
      return false;
    }

    if (
      title !== bookDiscussionDetail.title ||
      content !== bookDiscussionDetail.content
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
        author={bookDiscussionDetail?.author || ''}
        title={title}
        content={content}
        onChange={onChange}
        containerHeight="300px"
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

export default BookDiscussionEditForm;
