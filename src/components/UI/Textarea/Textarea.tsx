import React from 'react';
import styled from 'styled-components';

interface TextareaProps {
  [rest: string]: any;
}

function Textarea({ ...rest }: TextareaProps) {
  return <StyledTextarea {...rest} />;
}

const StyledTextarea = styled.textarea`
  background-color: var(--color-inputbox-bg);
  border: 1px solid var(--color-inputbox-line);
  border-radius: 5px;
  font-size: 16px;
  padding: 16px;
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 19px;
  resize: none;

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

export default Textarea;
