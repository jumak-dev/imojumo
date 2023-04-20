import { css } from 'styled-components';

export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlignCenter = css`
  display: flex;
  align-items: center;
`;

export const JustifyEnd = css`
  display: flex;
  justify-content: end;
`;

export const RowFlex = css`
  display: flex;
`;

export const RowFlexCenter = css`
  ${RowFlex}
  justify-content: center;
`;

export const ColFlex = css`
  display: flex;
  flex-direction: column;
`;

export const ColFlexCenter = css`
  ${ColFlex}
  justify-content: center;
`;

export const InputCSS = css`
  background-color: var(--color-inputbox-bg);
  border: 1px solid var(--color-inputbox-line);
  border-radius: 5px;
  font-size: var(--font-size-m);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 19px;

  &::placeholder {
    color: var(--color-placeholder);
  }
`;

export const ScreenReaderTextCSS = css`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  word-wrap: normal !important;
`;
