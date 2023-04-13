import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface SpacerProps {
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
}

interface CardProps extends SpacerProps {
  radius?: string;
}

const spacer = (props: SpacerProps) => ({
  margin: props.margin,
  marginTop: props.marginTop,
  marginRight: props.marginRight,
  marginBottom: props.marginBottom,
  marginLeft: props.marginLeft,
  padding: props.padding,
  paddingTop: props.paddingTop,
  paddingRight: props.paddingRight,
  paddingBottom: props.paddingBottom,
  paddingLeft: props.paddingLeft,
});

export const Card = css<CardProps>`
  border-radius: ${(props) => props.radius || '20px'};
  border: 1px solid var(--color-borderbox-line);
  ${spacer}
`;

export const CardContainer = styled.article`
  ${Card}
`;

export const LinkCardContainer = styled(Link)`
  ${Card}
`;
