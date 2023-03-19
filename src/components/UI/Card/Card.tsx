import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface CardProps {
  width: string;
  height: string;
  radius?: string;
}

const Card = css<CardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || '20px'};
  border: 1px solid var(--color-borderbox-line);
`;

export const CardContainer = styled.article`
  ${Card}
`;

export const LinkCardContainer = styled(Link)`
  ${Card}
`;
