import styled from 'styled-components';
import { inputCSS } from '../../../styles/shared';

interface InputProps {
  [rest: string]: any;
}

function Input({ ...rest }: InputProps) {
  return <StyledInput {...rest} />;
}

const StyledInput = styled.input`
  ${inputCSS};
  padding: 12px 16px;
`;

export default Input;
