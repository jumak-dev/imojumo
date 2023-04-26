import styled from 'styled-components';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

function NonContentModalPortal({ children }: Props) {
  const el = document.getElementById('modal-root') as HTMLElement;
  return createPortal(<Overlay>{children}</Overlay>, el);
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
`;

export default NonContentModalPortal;
