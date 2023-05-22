import React, { Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Input from '../UI/Input/Input';
import { ButtonBox } from '../UI/Button/Button';
import { rowFlex } from '../../styles/shared';
import useInputs from '../../hooks/useInputs';
import isLoginSelector from '../../recoil/seletors';
import { jwtAtom } from '../../recoil/atoms';
import { Comment } from '../../types';
import { createComment } from '../../apis/comment';
import PLACEHOLDER from '../../constants/Placeholder';

interface CommentFormProps {
  isVote?: boolean;
  isProConDiscussion?: boolean;
  setComments: Dispatch<SetStateAction<Comment[]>>;
}

function CommentForm({
  isVote,
  isProConDiscussion,
  setComments,
}: CommentFormProps) {
  const { postId } = useParams() as { postId: string };

  const isLogin = useRecoilValue(isLoginSelector);
  const token = useRecoilValue(jwtAtom) ?? '';

  const [{ content }, onChange, reset] = useInputs({ content: '' });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (content.length === 0) {
      return;
    }

    const data = await createComment(postId, token, content);
    setComments((prevComments) => [data, ...prevComments]);
    reset();
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
        buttonType="buttonRight"
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
  ${rowFlex}
  margin: 40px 20px;
`;

const CommentInput = styled(Input)`
  width: 100%;
  border-radius: 5px 0 0 5px;
  border-right: 0;
`;

const SubmitButton = styled(ButtonBox)`
  width: 75px;
  height: 45px;
  color: var(--black);

  &:disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export default CommentForm;
