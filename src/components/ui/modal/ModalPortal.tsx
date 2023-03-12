import styled from 'styled-components';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface Props {
  onClose: () => void;
  children: ReactNode;
}

function ModalPortal({ onClose, children }: Props) {
  return createPortal(
    <Overlay onClick={onClose}>
      <Content onClick={(event) => event.stopPropagation()}>
        <AiOutlineClose onClick={onClose} />
        {children}
      </Content>
    </Overlay>,
    document.body,
  );
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: end;
`;

export const Content = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
`;

export default ModalPortal;
