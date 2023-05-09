import styled from 'styled-components';
import Input from '../UI/Input/Input';
import { ButtonBox } from '../UI/Button/Button';
import { rowFlex } from '../../styles/shared';
import useInputs from '../../hooks/useInputs';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

function CommentForm({ onSubmit }: CommentFormProps) {
  const [{ content }, onChange, reset] = useInputs({ content: '' });

  const handleSubmit = (event: MouseEvent) => {
    event.preventDefault();
    onSubmit(content);
    reset();
  };

  return (
    <CommentFormContainer>
      <CommentInput
        name="content"
        value={content}
        onChange={onChange}
        placeholder="댓글을 입력하세요..."
      />
      <SubmitButton
        type="submit"
        buttonType="buttonRight"
        buttonColor="white"
        buttonSize="sm"
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
`;

export default CommentForm;
