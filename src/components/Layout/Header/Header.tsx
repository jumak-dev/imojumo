import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import Button from '../../UI/Button/Button';
import { AlignCenter, RowFlex, RowFlexCenter } from '../../../styles/shared';
import AlarmModal from './AlarmModal';
import ProfileModal from './ProfileModal';
import useInputs from '../../../hooks/useInputs';

function Header() {
  const user = true;
  const navigate = useNavigate();

  const [{ query }, onChange] = useInputs({ query: '' });

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (query.length === 0) {
      return;
    }

    if (event.key === 'Enter') {
      console.log(query);
    }
  };

  const handleClick = () => {
    navigate('/posts/new/book-discussion');
  };

  return (
    <HeaderLayout>
      <HeaderContainer>
        <HomeLink to="/">
          <AiFillHome size={32} />
          <LogoTitle>이모저모</LogoTitle>
        </HomeLink>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            type="search"
            name="query"
            value={query}
            onChange={onChange}
            onKeyDown={handleSubmit}
            placeholder="검색어를 입력하세요"
          />
        </SearchContainer>
        <NavContainer>
          <NavLinkList>
            <NavLinkItem>
              <CustomLink to="/book-discussion">독서토론</CustomLink>
            </NavLinkItem>
            <NavLinkItem>
              <CustomLink to="/pro-con-discussion">찬반토론</CustomLink>
            </NavLinkItem>
            <NavLinkItem>
              <CustomLink to="/likes">찜 목록</CustomLink>
            </NavLinkItem>
          </NavLinkList>
        </NavContainer>
        <Button
          type="button"
          buttonType="button"
          buttonColor="mint"
          buttonSize="sm"
          onClick={handleClick}
        >
          토론하기
        </Button>
        {user ? (
          <ButtonContainer>
            <AlarmModal />
            <ProfileModal />
          </ButtonContainer>
        ) : (
          <ButtonContainer>
            <TabLink to="/login">로그인</TabLink>
            <DotIcon />
            <TabLink to="/signup">회원가입</TabLink>
          </ButtonContainer>
        )}
      </HeaderContainer>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  ${RowFlexCenter}
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const HeaderContainer = styled.div`
  ${AlignCenter}
  justify-content: space-between;
  width: 1120px;
  gap: 16px;
  white-space: nowrap;
`;

const HomeLink = styled(Link)`
  ${AlignCenter}
`;

const LogoTitle = styled.h1`
  margin-left: 4px;
  font-weight: 700;
  font-size: var(--font-size-xl);
`;

const SearchContainer = styled.div`
  ${AlignCenter}
  width: 440px;
  height: 40px;
  padding: 0 8px;
  border: 1px solid var(--color-inputbox-line);
  border-radius: 8px;
`;

const SearchIcon = styled(AiOutlineSearch)`
  width: 20px;
  height: 20px;
  margin-right: 4px;
  color: var(--color-inputbox-line);
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0;
  font-size: var(--font-size-sm);
`;

const NavContainer = styled.nav`
  ${RowFlex}
`;

const NavLinkList = styled.ul`
  ${RowFlex}
  gap: 16px;
`;

const NavLinkItem = styled.li`
  font-size: var(--font-size-l);
`;

const CustomLink = styled(NavLink)`
  &:hover,
  &.active {
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  ${AlignCenter}
  gap: 4px;
`;

const TabLink = styled(Link)`
  font-weight: 600;
  font-size: var(--font-size-l);
`;

const DotIcon = styled(BsDot)`
  font-size: 18px;
  color: #bdbdbd;
`;

export default Header;
