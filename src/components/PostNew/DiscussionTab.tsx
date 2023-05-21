import React from 'react';
import styled from 'styled-components';
import { GoBook } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { ReactComponent as proConSVG } from '../../assets/icons/proConIcon.svg';
import { alignCenter, flex } from '../../styles/shared';

function DiscussionTab() {
  return (
    <DiscussionTabNav>
      <BookDiscussionTabLink to="/posts/new/book-discussion">
        <BookIcon />
        <DiscussionTabLinkText>독서토론 하기</DiscussionTabLinkText>
      </BookDiscussionTabLink>
      <ProConDiscussionTabLink to="/posts/new/pro-con-discussion">
        <DiscussionTabLinkText>찬반토론 하기</DiscussionTabLinkText>
        <ProConIcon />
      </ProConDiscussionTabLink>
    </DiscussionTabNav>
  );
}

const BookIcon = styled(GoBook)`
  font-size: 42px;
  color: var(--color-primary-mint);
`;

const ProConIcon = styled(proConSVG)`
  width: 42px;
  height: 42px;
  color: var(--color-primary-pink);
`;

const DiscussionTabNav = styled.nav`
  ${flex}
  max-width: 548px;
  height: 56px;
`;

const DiscussionTabLink = styled(NavLink)`
  ${flex}
  text-align: center;
  color: var(--black);
  padding: 8px 24px;
  gap: 36px;

  &.active {
    color: var(--white);
    pointer-events: none;
  }
`;

const BookDiscussionTabLink = styled(DiscussionTabLink)`
  border-radius: 5px 0px 0px 5px;
  border-width: 1px 0px 1px 1px;
  border-style: solid;
  border-color: var(--color-primary-mint);

  &.active {
    background-color: var(--color-primary-mint);

    ${BookIcon} {
      color: white;
    }
  }
`;

const ProConDiscussionTabLink = styled(DiscussionTabLink)`
  border-radius: 0px 5px 5px 0px;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: var(--color-primary-pink);

  &.active {
    background-color: var(--color-primary-pink);

    ${ProConIcon} {
      color: white;
    }
  }
`;

const DiscussionTabLinkText = styled.p`
  ${alignCenter}

  font-size: var(--font-size-l);
  line-height: 24px;
  letter-spacing: -0.02em;
`;

export default DiscussionTab;
