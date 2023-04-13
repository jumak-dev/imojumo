import React from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type ButtonType = 'button' | 'buttonLeft' | 'buttonRight';
type ButtonColorType = 'mint' | 'pink' | 'white';
type ButtonSizeType = 'xl' | 'l' | 'm' | 'sm' | 'xs';

interface ButtonProps {
  type: string;
  buttonType: ButtonType;
  buttonColor: ButtonColorType;
  buttonSize: ButtonSizeType;
  margin?: string;
  isBold?: boolean;
  children: React.ReactNode;
  [rest: string]: any;
}

function Button({
  buttonType,
  buttonColor,
  buttonSize,
  margin,
  isBold,
  children,
  ...rest
}: ButtonProps) {
  return (
    <ButtonBox
      buttonType={buttonType}
      buttonColor={buttonColor}
      buttonSize={buttonSize}
      isBold={isBold}
      margin={margin}
      {...rest}
    >
      {children}
    </ButtonBox>
  );
}

const ButtonTypeCSS: {
  [key in ButtonType]: FlattenSimpleInterpolation;
} = {
  button: css`
    border-radius: 5px;
  `,
  buttonLeft: css`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `,
  buttonRight: css`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `,
};

const ButtonColorCSS: {
  [key in ButtonColorType]: FlattenSimpleInterpolation;
} = {
  mint: css`
    background-color: var(--color-primary-mint);
    background: linear-gradient(
      to bottom,
      #65cfcc 2%,
      var(--color-primary-mint) 100%
    );
    border: 1px solid var(--color-primary-mint);
    box-shadow: inset 0px 1px 0px 0px #dcecfb;

    &:hover {
      background-color: var(--color-primary-mint);
      background: linear-gradient(
        to bottom,
        #6bc7c4 2%,
        var(--color-primary-mint) 100%
      );
    }
  `,
  pink: css`
    background-color: var(--color-primary-pink);
    background: linear-gradient(
      to bottom,
      #fd8181 2%,
      var(--color-primary-pink) 100%
    );
    border: 1px solid var(--color-primary-pink);
    box-shadow: inset 0px 1px 0px 0px #fdc7c7;

    &:hover {
      background-color: var(--color-primary-pink);
      background: linear-gradient(
        to bottom,
        #ee7070 2%,
        var(--color-primary-pink) 100%
      );
    }
  `,
  white: css`
    border: 1px solid var(--color-inputbox-line);

    &:hover {
      background: linear-gradient(to bottom, #f3f3f3 1%, var(--white) 100%);
    }
  `,
};

const ButtonSizeCss: { [key in ButtonSizeType]: FlattenSimpleInterpolation } = {
  xl: css`
    width: 360px;
    height: 40px;
    font-size: var(--font-size-l);
  `,
  l: css`
    width: 234px;
    height: 55px;
    font-size: var(--font-size-l);
  `,
  m: css`
    width: 161px;
    height: 46px;
    font-size: var(--font-size-m);
  `,
  sm: css`
    width: 80px;
    height: 32px;
    font-size: var(--font-size-m);
  `,
  xs: css`
    width: 70px;
    height: 36px;
    font-size: var(--font-size-m);
  `,
};

export const ButtonBox = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: var(--white);

  ${({ buttonType }) => ButtonTypeCSS[buttonType]};
  ${({ buttonColor }) => ButtonColorCSS[buttonColor]};
  ${({ buttonSize }) => ButtonSizeCss[buttonSize]};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : undefined)};
  margin: ${({ margin }) => margin};

  &:active {
    position: relative;
    top: 1px;
  }
`;

export default Button;
