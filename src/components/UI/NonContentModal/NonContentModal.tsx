import React from 'react';
import styled from 'styled-components';
import NonContentModalPortal from './NonContentModalPortal';
import { Card } from '../Card/Card';

interface Props {
  showModal: boolean;
  children: React.ReactNode;
  [rest: string]: any;
}

function NonContentModal({ showModal, children, ...rest }: Props) {
  return showModal ? (
    <NonContentModalPortal>
      <Modal {...rest}>{children}</Modal>
    </NonContentModalPortal>
  ) : null;
}

const Modal = styled.section`
  ${Card}
`;

export default NonContentModal;
