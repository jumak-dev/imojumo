import React from 'react';
import styled from 'styled-components';
import { InputCSS } from '../../../styles/shared';

interface InputProps {
  [rest: string]: any;
}

function Input({ ...rest }: InputProps) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  ${InputCSS};
  padding: 12px 16px;
`;

export default Input;
