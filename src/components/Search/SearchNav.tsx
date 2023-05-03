import { useContext } from 'react';
import styled from 'styled-components';
import { flex } from '../../styles/shared';
import TAB from '../../constants/Tab';
import { TabContext } from '../../context/TabContext';

function SearchNav() {
  const { currentTab, setCurrentTab } = useContext(TabContext);

  return (
    <SearchNavContainer>
      <NavList>
        <NavItem
          isActive={currentTab === TAB.ALL}
          onClick={() => setCurrentTab(TAB.ALL)}
        >
          통합검색
        </NavItem>
        <NavItem
          isActive={currentTab === TAB.BOOK_DISCUSSION}
          onClick={() => setCurrentTab(TAB.BOOK_DISCUSSION)}
        >
          독서토론
        </NavItem>
        <NavItem
          isActive={currentTab === TAB.PROCON_DISCUSSION}
          onClick={() => setCurrentTab(TAB.PROCON_DISCUSSION)}
        >
          찬반토론
        </NavItem>
      </NavList>
    </SearchNavContainer>
  );
}

const SearchNavContainer = styled.nav`
  ${flex}
  height: 80px;
  background-color: var(--color-subtitle-bg-color);
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const NavList = styled.ul`
  ${flex}
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
