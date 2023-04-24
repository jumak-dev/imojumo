import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { likeIconCSS } from '../../../styles/shared';

const LikeIcon = styled(FaHeart)`
  ${likeIconCSS}
  color: var(--color-heart);

  &:hover {
    color: #ff1c1c;
  }
`;

export default LikeIcon;
