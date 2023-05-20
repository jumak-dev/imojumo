import React, { forwardRef, useEffect } from 'react';
import styled from 'styled-components';
import NonContentModalPortal from './NonContentModalPortal';
import { Card } from '../Card/Card';

interface Props {
  children: React.ReactNode;
  [rest: string]: any;
}

function NonContentModal(
  { children, ...rest }: Props,
  ref: React.ForwardedRef<HTMLElement>,
) {
  useEffect(() => {
    const $body = document.querySelector('body');
    let prevOverflow = 'auto';

    if ($body) {
      prevOverflow = $body.style.overflow;
      $body.style.overflow = 'hidden';
    }

    return () => {
      if ($body) {
        $body.style.overflow = prevOverflow;
      }
    };
  }, []);

  return (
    <NonContentModalPortal>
      <Modal {...rest} ref={ref}>
        {children}
      </Modal>
    </NonContentModalPortal>
  );
}

const Modal = styled.section`
  ${Card}
`;

export default forwardRef(NonContentModal);
