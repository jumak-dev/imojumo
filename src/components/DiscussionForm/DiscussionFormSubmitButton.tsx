import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button/Button';

interface DiscussionFormSubmitButtonProps {
  disabled: boolean;
  children: React.ReactNode;
  onClick: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.FormEvent<HTMLFormElement>,
  ) => Promise<void>;
}

function DiscussionFormSubmitButton({
  disabled,
  children,
  onClick,
}: DiscussionFormSubmitButtonProps) {
  return (
    <SubmitButton
      type="submit"
      buttonType="button"
      buttonColor="pink"
      buttonSize="l"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </SubmitButton>
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

export default DiscussionFormSubmitButton;
