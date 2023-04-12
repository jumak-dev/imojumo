import React from 'react';
import styled from 'styled-components';

interface InputProps {
  [rest: string]: any;
}

function Input({ ...rest }: InputProps) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  background-color: var(--color-inputbox-bg);
  border: 1px solid var(--color-inputbox-line);
  border-radius: 5px;
  font-size: 16px;
  padding: 12px 16px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 19px;

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

export default Input;
