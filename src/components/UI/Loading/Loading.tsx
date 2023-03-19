import styled, { keyframes } from 'styled-components';

function Loading() {
  return (
    <Loader>
      <Shadow />
      <Box />
    </Loader>
  );
}

const Loader = styled.div`
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
`;

const shadow = keyframes`
  50% {
    transform: scale(1.2, 1);
  }
`;

const Shadow = styled.div`
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: 60px;
  left: 0;
  border-radius: 50%;
  animation: ${shadow} 0.5s linear infinite;
`;

const animate = keyframes`
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  background: var(--color-primary-mint);
  animation: ${animate} 0.5s linear infinite;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 3px;
`;

export default Loading;
