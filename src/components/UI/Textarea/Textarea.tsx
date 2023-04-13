import React from 'react';
import styled from 'styled-components';
import { InputCSS } from '../../../styles/shared';

interface TextareaProps {
  [rest: string]: any;
}

function Textarea({ ...rest }: TextareaProps) {
  return <StyledTextarea {...rest} />;
}

const StyledTextarea = styled.textarea`
  ${InputCSS};
  padding: 16px;
  resize: none;
`;

export default Textarea;
