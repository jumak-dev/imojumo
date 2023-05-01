import React from 'react';
import styled, { css } from 'styled-components';
import Tab from '../../constants/Tab';
import { AlignCenter } from '../../styles/shared';

interface SubtitleSectionProps {
  subtitle: string;
  postCount: number;
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

function SubtitleSection({
  subtitle,
  postCount,
  currentTab,
  setCurrentTab,
}: SubtitleSectionProps) {
  const haldleMoreButton = (type: string) => {
    if (type === Tab.BookDiscussion) {
      setCurrentTab(Tab.BookDiscussion);
    } else {
      setCurrentTab(Tab.ProConDiscussion);
    }
  };

  return (
    <SubtitleBlock>
      <Subtitle>{subtitle}</Subtitle>
      <PostCount>{new Intl.NumberFormat().format(postCount)}</PostCount>
      <MoreButton
        isShow={currentTab === Tab.All}
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
  margin: 50px 10px;
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

const MoreButton = styled.button<{ isShow: boolean }>`
  ${fontCSS}
  right: 0;
  position: absolute;
  color: var(--color-primary-pink);

  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
`;

export default SubtitleSection;
