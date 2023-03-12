import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

type ButtonType = 'button' | 'btnL' | 'btnR';
type VariantType = 'mint' | 'pink' | 'white';

//  https://gisastudy.tistory.com/117
//  위의 사이트를 참고해서 isBold 사용

interface ButtonProps {
  buttonType: ButtonType;
  variant: VariantType;
  width: number;
  height: number;
  fontSize: string;
  fontColor: string;
  text?: string;
  isBold?: boolean;
  outline?: boolean;
}

// props로 받는 게 너무 많아서 props로만 적고 할지 고민입니다.
// 사용 시 props.width와 같이 받는 게 나을까요?!
function Button({
  buttonType,
  variant,
  width,
  height,
  text,
  fontSize,
  fontColor,
  isBold,
  outline,
}: ButtonProps) {
  return (
    <>
      {/* 
        //! 문제 props 로 버튼의 type을 불러와서 
        각 버튼에 맞는 type을 주려고 했으나 안 먹는다...!
      */}

      <ButtonBox
        type="button"
        buttonType={buttonType}
        variant={variant}
        width={width}
        height={height}
        fontSize={fontSize}
        fontColor={fontColor}
        isBold={isBold}
        outline={outline}
      >
        {text}
      </ButtonBox>
    </>
  );
}

const ButtonTypeCSS: {
  [key in ButtonType]: FlattenSimpleInterpolation;
} = {
  button: css`
    border-radius: 5px;
  `,
  btnL: css`
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  `,
  btnR: css`
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  `,
};

const VariantCSS: { [key in VariantType]: FlattenSimpleInterpolation } = {
  mint: css`
    background: var(--color-primary-mint);
  `,
  pink: css`
    background: var(--color-primary-pink);
  `,
  white: css`
    background: var(--white);
  `,
};

// 아이콘이 들어간 버튼을 위해 export 추가
export const ButtonBox = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1.8px 0 -1px rgba(0, 0, 0, 0.13) inset;

  ${({ buttonType }) => ButtonTypeCSS[buttonType]}
  ${({ variant }) => VariantCSS[variant]}

  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ fontColor }) => fontColor};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : undefined)};
  outline: ${({ outline }) =>
    outline ? '1px solid var(--color-inputbox-line)' : undefined};
  font-size: ${({ fontSize }) =>
    fontSize === 'L' ? 'var(--font-size-l)' : 'var(--font-size-m)'};

  .icon {
    margin-right: 10px;
  }

  &:hover {
    filter: brightness(107%);
  }

  &:active {
    top: 1px;
    border-color: rgba(0, 0, 0, 0.34) rgba(0, 0, 0, 0.21) rgba(0, 0, 0, 0.21);
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.89),
      0 1px rgba(0, 0, 0, 0.05) inset;
    position: relative;
  }

  /* 확인용으로 적용한 코드입니다 */
  margin-bottom: 5%;
`;

export default Button;
