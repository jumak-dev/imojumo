import React from 'react';
import styled, { css } from 'styled-components';
import { AlignCenter } from '../../styles/shared';

interface SubtitleSectionProps {
  subtitle: string;
  postCount: number;
  setCurrentTap: React.Dispatch<React.SetStateAction<string>>;
}

function SubtitleSection({
  subtitle,
  postCount,
  setCurrentTap,
}: SubtitleSectionProps) {
  const haldleMoreButton = (type: string) => {
    if (type === '독서토론') {
      setCurrentTap('BookDiscussion');
    } else {
      setCurrentTap('ProConDiscussion');
    }
  };

  return (
    <SubtitleBlock>
      <Subtitle>{subtitle}</Subtitle>
      <PostCount>{new Intl.NumberFormat().format(postCount)}</PostCount>
      <MoreButton
        aria-label="더 보기"
        onClick={() => haldleMoreButton(subtitle)}
      >
        더보기
      </MoreButton>
    </SubtitleBlock>
  );
}

const SubtitleBlock = styled.div`
  ${AlignCenter}
  margin: 50px 10px 20px;
  position: relative;
`;

const fontCSS = css`
  font-weight: 700;
  font-size: var(--font-size-l);
`;

const Subtitle = styled.h2`
  ${fontCSS}
  margin: 0 10px;
  display: inline-block;
`;

const PostCount = styled.span`
  ${fontCSS}
  color: var(--color-primary-mint);
`;

const MoreButton = styled.button`
  ${fontCSS}
  right: 0;
  position: absolute;
  color: var(--color-primary-pink);
`;

export default SubtitleSection;
