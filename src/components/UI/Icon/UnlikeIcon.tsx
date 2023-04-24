import styled from 'styled-components';
import { FiHeart } from 'react-icons/fi';
import { likeIconCSS } from '../../../styles/shared';

const UnlikeIcon = styled(FiHeart)`
  ${likeIconCSS}
  color: var(--white);

  &:hover {
    color: var(--color-heart);
  }
`;

export default UnlikeIcon;
