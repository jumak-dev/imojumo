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
  width: string;
  height: string;
  margin?: string;
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

const Card = css<CardProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius || '20px'};
  margin: ${(props) => props.margin};
  border: 1px solid var(--color-borderbox-line);
  overflow: hidden;
  ${spacer}
`;

export const CardContainer = styled.article`
  ${Card}
`;

export const LinkCardContainer = styled(Link)`
  ${Card}
`;
