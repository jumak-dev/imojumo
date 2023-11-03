import styled from 'styled-components';
import { inputCSS } from '../../../styles/shared';

interface TextareaProps {
  [rest: string]: any;
}

function Textarea({ ...rest }: TextareaProps) {
  return <StyledTextarea {...rest} />;
}

const StyledTextarea = styled.textarea`
  ${inputCSS};
  padding: 16px;
  resize: none;
`;

export default Textarea;
