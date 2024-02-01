import { css } from "styled-components";

export const PrimaryFont = css`
  font-family: NunitoSans;  
`;

export const SecondaryFont = css`
  font-family: Raleway;
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexCenter = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColCenter = css`
  display: flex;
  justify-content: center;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
`;

export const FlexHorizontalCenter = css`
  display: flex;
  flex-direction: row; // need to override other styles that may apply a flex-direction
  align-items: center;
`;

export const NoScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }

  // works in FF
  scrollbar-width: none;
`;

export const BasicContainer = css`
  padding: 20px;
  border: 2px solid gray;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
export const BasicContainer2 = css`
  padding: 20px;
  border: 2px solid red;
  border-radius: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TruncateText = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// you will need to add css for the number of lines you want - eg: line-clamp/-webkit-line-clamp: 2;
export const LineClamp = css`
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
`;

export const BoxShadow = css`
  box-shadow: 0 4px 8px -8px ${({ theme }) => theme.colors.darkGray3};
`;


export const ScreenReaderOnly = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

