import React from 'react';
import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import Button from '../../UI/Button/Button';
import { alignCenter, rowFlex, rowFlexCenter } from '../../../styles/shared';
import AlarmModal from './AlarmModal';
import ProfileModal from './ProfileModal';
import useInputs from '../../../hooks/useInputs';
import isLoginSelector from '../../../recoil/seletors';

function Header() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paramsQuery = searchParams.get('query');
  const [{ query }, onChange] = useInputs({ query: paramsQuery || '' });

  const isLogin = useRecoilValue(isLoginSelector);

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (query.length === 0) {
      return;
    }

    if (event.key === 'Enter') {
      navigate(`/search?query=${query}&page=1`);
    }
  };

  const handleClick = () => {
    if (!isLogin) {
      navigate('/login');
      return;
    }

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
              <LikesLink to={isLogin ? '/likes' : '/login'} $isLogin={isLogin}>
                찜 목록
              </LikesLink>
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
        {isLogin ? (
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
  ${rowFlexCenter}
  width: 100%;
  height: 80px;
  border-bottom: 1px solid var(--color-borderbottom-color);
`;

const HeaderContainer = styled.div`
  ${alignCenter}
  justify-content: space-between;
  width: 1120px;
  gap: 16px;
  white-space: nowrap;
`;

const HomeLink = styled(Link)`
  ${alignCenter}
  gap: 4px;
`;

const LogoTitle = styled.h1`
  font-weight: 700;
  font-size: var(--font-size-xl);
`;

const SearchContainer = styled.div`
  ${alignCenter}
  flex: 1;
  min-width: 440px;
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
  ${rowFlex}
`;

const NavLinkList = styled.ul`
  ${rowFlex}
  gap: 16px;
`;

const NavLinkItem = styled.li`
  font-size: var(--font-size-l);
`;

const linkCSS = css`
  &:hover,
  &.active {
    font-weight: 600;
  }
`;

const CustomLink = styled(NavLink)`
  ${linkCSS}
`;

const LikesLink = styled(NavLink)<{ $isLogin: boolean }>`
  ${({ $isLogin }) => $isLogin && linkCSS};
`;

const ButtonContainer = styled.div`
  ${alignCenter}
  gap: 4px;
`;

const TabLink = styled(Link)`
  font-weight: 600;
  font-size: var(--font-size-l);
`;

const DotIcon = styled(BsDot)`
  font-size: 18px;
  color: var(--color-borderbottom-color);
`;

export default Header;
