import { useContext } from 'react';
import styled from 'styled-components';

import { alignCenter, fontCSS } from '../../styles/shared';

import TAB from '../../constants/Tab';
import { TabContext } from '../../context/TabContext';

interface SubtitleSectionProps {
  subtitle: string;
  postCount: number;
}

function SubtitleSection({ subtitle, postCount }: SubtitleSectionProps) {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  const haldleMoreButton = (type: string) => {
    if (type === TAB.BOOK_DISCUSSION) {
      setCurrentTab(TAB.BOOK_DISCUSSION);
    } else {
      setCurrentTab(TAB.PROCON_DISCUSSION);
    }
  };

  return (
    <SubtitleBlock>
      <Subtitle>{subtitle}</Subtitle>
      <PostCount>{new Intl.NumberFormat().format(postCount)}</PostCount>
      {postCount > 3 && (
        <MoreButton
          isShow={currentTab === TAB.ALL}
          aria-label="더 보기"
          onClick={() => haldleMoreButton(subtitle)}
        >
          더보기
        </MoreButton>
      )}
    </SubtitleBlock>
  );
}

const SubtitleBlock = styled.div`
  ${alignCenter}
  margin: 52px 10px 32px 10px;
  position: relative;
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
