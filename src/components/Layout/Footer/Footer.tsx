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
      <FooterWrapper>
        <FooterSignature>
          <LogoContainer>
            <AiFillHome size={38} />
            <LogoTitle>이모저모</LogoTitle>
          </LogoContainer>
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
      </FooterWrapper>
    </FooterLayout>
  );
}

const FooterLayout = styled.footer`
  ${rowFlexCenter}
  width: 100%;
  height: 160px;
  border: 1px solid transparent;
  border-top-color: var(--color-borderbottom-color);
`;

const FooterWrapper = styled.div`
  ${rowFlex}
  justify-content: space-between;
  width: 1120px;
  padding: 36px 0;
`;

const FooterSignature = styled.div`
  ${colFlex}
`;

const LogoContainer = styled.div`
  ${alignCenter}
`;

const LogoTitle = styled.span`
  margin-left: 8px;
  font-size: var(--font-size-xxl);
  font-weight: bold;
`;

const CopyrightText = styled.p`
  margin-top: 16px;
  font-size: var(--font-size-m);
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
