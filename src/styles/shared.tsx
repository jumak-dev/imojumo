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

export const justifyEnd = css`
  display: flex;
  justify-content: end;
`;

export const RowFlex = css`
  display: flex;
  flex-direction: row;
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
