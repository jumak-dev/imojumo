import React from 'react';
import styled from 'styled-components';
import { Flex } from '../../styles/shared';

interface SearchNavProps {
  currentTap: string;
  setCurrentTap: React.Dispatch<React.SetStateAction<string>>;
}

function SearchNav({ currentTap, setCurrentTap }: SearchNavProps) {
  return (
    <SearchNavContainer>
      <NavList>
        <NavItem
          isActive={currentTap === 'Search All'}
          onClick={() => setCurrentTap('Search All')}
        >
          통합검색
        </NavItem>
        <NavItem
          isActive={currentTap === 'BookDiscussion'}
          onClick={() => setCurrentTap('BookDiscussion')}
        >
          독서토론
        </NavItem>
        <NavItem
          isActive={currentTap === 'ProConDiscussion'}
          onClick={() => setCurrentTap('ProConDiscussion')}
        >
          찬반토론
        </NavItem>
      </NavList>
    </SearchNavContainer>
  );
}

const SearchNavContainer = styled.nav`
  ${Flex}
  height: 80px;
  background-color: var(--color-subtitle-bg-color);
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const NavList = styled.ul`
  ${Flex}
  width: 100%;
  max-width: 1120px;
  justify-content: flex-start;
`;

const NavItem = styled.li<{ isActive: boolean }>`
  cursor: pointer;
  padding: 0 20px;
  font-weight: 700;
  font-size: var(--font-size-l);
  color: ${({ isActive }) =>
    isActive ? 'var(--color-primary-pink)' : 'var(--black)'};

  &:hover {
    opacity: 0.8;
  }
`;

export default SearchNav;
