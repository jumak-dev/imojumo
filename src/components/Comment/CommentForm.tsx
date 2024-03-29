import React from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Textarea from '../UI/Textarea/Textarea';
import { ButtonBox } from '../UI/Button/Button';
import { colFlex } from '../../styles/shared';
import useInputs from '../../hooks/useInputs';
import isLoginSelector from '../../recoil/seletors';
import { jwtAtom } from '../../recoil/atoms';
import { Comment } from '../../types';
import PLACEHOLDER from '../../constants/Placeholder';
import useCreateComment from '../../hooks/comment/useCreateComment';

interface CommentFormProps {
  isVote?: boolean;
  isProConDiscussion?: boolean;
  handleCreateComment: (comment: Comment) => void;
}

function CommentForm({
  isVote,
  isProConDiscussion,
  handleCreateComment,
}: CommentFormProps) {
  const { postId } = useParams() as { postId: string };

  const isLogin = useRecoilValue(isLoginSelector);
  const token = useRecoilValue(jwtAtom) ?? '';

  const [{ content }, onChange, reset] = useInputs({ content: '' });

  const { mutate: createComment } = useCreateComment({
    onSuccess: (data) => {
      if (!data) {
        return;
      }

      handleCreateComment(data);
      reset();
    },
  });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (content.length === 0) {
      return;
    }

    await createComment({ id: Number(postId), content, token });
  };

  let disabled = false;
  let placeholder = '';

  if (!isProConDiscussion) {
    disabled = false;
    placeholder = PLACEHOLDER.LOGGED_IN;
  }
  if (isProConDiscussion && isVote) {
    disabled = false;
    placeholder = PLACEHOLDER.LOGGED_IN_WITH_VOTE;
  }
  if (isProConDiscussion && !isVote) {
    disabled = true;
    placeholder = PLACEHOLDER.LOGGED_IN_WITHOUT_VOTE;
  }
  if (!isLogin) {
    disabled = true;
    placeholder = PLACEHOLDER.NOT_LOGGED_IN;
  }

  return (
    <CommentFormContainer>
      <CommentInput
        name="content"
        value={content}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
      />
      <SubmitButton
        type="submit"
        buttonType="button"
        buttonColor="white"
        buttonSize="sm"
        disabled={disabled}
        onClick={handleSubmit}
      >
        등록
      </SubmitButton>
    </CommentFormContainer>
  );
}

const CommentFormContainer = styled.form`
  ${colFlex}
  align-items: flex-end;
  gap: 12px;
  margin: 40px 20px;
`;

const CommentInput = styled(Textarea)`
  width: 100%;
`;

const SubmitButton = styled(ButtonBox)`
  width: 100px;
  height: 36px;
  color: var(--black);

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export default CommentForm;
