import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import URL from '../../../constants/URL';

type SizeType = 'xl' | 'lz' | 'md' | 'sm' | 'xs';

interface IProps {
  size: SizeType;
  avatar: string | null;
  alt: string;
  nickname?: string;
  itemGap?: string;
  [rest: string]: any;
}

function UserProfile({
  avatar,
  alt,
  itemGap = '10px',
  nickname = '',
  size = 'md',
  ...rest
}: IProps) {
  const onErrorImg = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = event.currentTarget;
    img.onerror = null;
    img.src = URL.DEFAULT_AVATA_URL;
  };

  const src = avatar || URL.DEFAULT_AVATA_URL;

  return (
    <StyledUserProfile itemGap={itemGap} size={size} {...rest}>
      <UserAvatar alt={alt} src={src} onError={onErrorImg} />
      {nickname?.length > 0 && <UserNickname>{nickname}</UserNickname>}
    </StyledUserProfile>
  );
}

const SIZES: { [key in SizeType]: FlattenSimpleInterpolation } = {
  xl: css`
    --profile-font-size: var(--font-size-xxl);
    --profile-image-size: 128px;
  `,
  lz: css`
    --profile-font-size: var(--font-size-l);
    --profile-image-size: 94px;
  `,
  md: css`
    --profile-font-size: var(--font-size-m);
    --profile-image-size: 90px;
  `,
  sm: css`
    --profile-font-size: var(--font-size-m);
    --profile-image-size: 70px;
  `,

  xs: css`
    --profile-font-size: var(--font-size-sm);
    --profile-image-size: 46px;
  `,
};

const StyledUserProfile = styled.div<{ itemGap: string; size: SizeType }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ itemGap }) => itemGap};

  ${({ size }) => SIZES[size]}
`;

const UserAvatar = styled.img`
  max-width: 100%;
  border-radius: 50%;
  width: var(--profile-image-size);
  height: var(--profile-image-size);
`;

const UserNickname = styled.div`
  font-size: var(--profile-font-size);
  font-weight: bold;
`;

export default UserProfile;
