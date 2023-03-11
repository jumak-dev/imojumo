import styled, { css } from 'styled-components';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

interface IProps {
  pos: 'left' | 'right';
  handleClick: () => void;
}

function CarouselArrowButton({ pos, handleClick }: IProps) {
  return (
    <ArrowButton pos={pos} onClick={handleClick}>
      {
        {
          left: <RiArrowDropLeftLine />,
          right: <RiArrowDropRightLine />,
        }[pos]
      }
    </ArrowButton>
  );
}

const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  position: absolute;
  top: 50%;
  z-index: 99;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: var(--white);
  border: none;

  ${({ pos }) =>
    ({
      left: css`
        left: 0;
      `,
      right: css`
        right: 0;
      `,
    }[pos])};
`;

export default CarouselArrowButton;
