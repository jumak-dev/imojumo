import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { proConCSS } from '../../../styles/shared';

type TagSize = 'm' | 'sm';

interface TagProps {
  isAgree: boolean;
  tagSize: TagSize;
}

const tagSizeCSS: { [key in TagSize]: FlattenSimpleInterpolation } = {
  m: css`
    width: 60px;
    height: 30px;
    font-size: var(--font-size-m);
  `,
  sm: css`
    width: 48px;
    height: 24px;
    font-size: var(--font-size-sm);
  `,
};

const ProConLeaderTag = styled.span<TagProps>`
  ${proConCSS}
  ${({ tagSize }) => tagSizeCSS[tagSize]};
  background-color: ${({ isAgree }) =>
    isAgree ? 'var(--color-primary-mint)' : 'var(--color-primary-pink)'};
`;

export default ProConLeaderTag;
