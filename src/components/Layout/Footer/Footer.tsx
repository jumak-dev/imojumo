import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiFillHome, AiFillGithub } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import {
  alignCenter,
  colFlex,
  flex,
  rowFlex,
  rowFlexCenter,
} from '../../../styles/shared';

function Footer() {
  return (
    <FooterLayout>
      <FooterContainer>
        <FooterSignature>
          <HomeLink to="/">
            <AiFillHome size={38} />
            <LogoTitle>이모저모</LogoTitle>
          </HomeLink>
          <CopyrightText>
            Copyright © 2023 IMOJUMO All Rights Reserved.
          </CopyrightText>
        </FooterSignature>
        <NavContainer>
          <NavLogo
            href="https://github.com/jumak-dev/imojumo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub size={36} />
          </NavLogo>
          <NavLogo>
            <RxNotionLogo size={32} />
          </NavLogo>
        </NavContainer>
      </FooterContainer>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  ${rowFlexCenter}
  width: 100%;
  height: 160px;
  border-top: 1px solid var(--color-borderbottom-color);
`;

const FooterContainer = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 1120px;
  padding: 36px 0;
`;

const FooterSignature = styled.div`
  ${colFlex}
  gap: 16px;
`;

const HomeLink = styled(Link)`
  ${alignCenter}
  gap: 8px;
`;

const LogoTitle = styled.span`
  font-weight: 700;
  font-size: var(--font-size-xxl);
`;

const CopyrightText = styled.p`
  font-size: var(--font-size-m);
  color: var(--color-content-text);
`;

const NavContainer = styled.div`
  ${rowFlexCenter}
`;

const NavLogo = styled.a`
  ${flex}
  width: 40px;
  height: 40px;
  margin: 4px;
  border: 1px solid var(--color-borderbottom-color);
  border-radius: 50%;
`;

export default Footer;
