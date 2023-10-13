import { normalize } from "./Normalize";
import { css } from "styled-components/native";
import { BorderProps, CoreProps, SpacesProps, TypographyProps } from "./types";

export const spaceProps = css<SpacesProps>`
  ${({ m }) => m && `margin: ${m}px`}
  ${({ my }) => my && `margin-vertical: ${my}px`}
  ${({ mx }) => mx && `margin-horizontal: ${mx}px`}
  ${({ mt }) => mt && (typeof mt === "number" ? `margin-top: ${mt}px` : `margin-top: ${mt}`)}
  ${({ mb }) => mb && `margin-bottom: ${mb}px`}
  ${({ mr }) => mr && `margin-right: ${mr}px`}
  ${({ ml }) => ml && `margin-left: ${ml}px`}
  ${({ p }) => p && `padding: ${p}px`}
  ${({ py }) => py && `padding-vertical: ${py}px`}
  ${({ px }) => px && `padding-horizontal: ${px}px`}
  ${({ pt }) => pt && `padding-top: ${pt}px`}
  ${({ pb }) => pb && `padding-bottom: ${pb}px`}
  ${({ pr }) => pr && `padding-right: ${pr}px`}
  ${({ pl }) => pl && `padding-left: ${pl}px`}
`;

export const borderProps = css<BorderProps>`
  ${({ borderWidth }) =>
    borderWidth &&
    (typeof borderWidth === "number"
      ? `border-width: ${borderWidth}px`
      : `border-width: ${borderWidth}`)}
  ${({ borderTopWidth }) =>
    borderTopWidth &&
    (typeof borderTopWidth === "number"
      ? `border-top-width: ${borderTopWidth}px`
      : `border-top-width: ${borderTopWidth}`)}
  ${({ borderRightWidth }) =>
    borderRightWidth &&
    (typeof borderRightWidth === "number"
      ? `border-right-width: ${borderRightWidth}px`
      : `border-right-width: ${borderRightWidth}`)}
  ${({ borderBottomWidth }) =>
    borderBottomWidth &&
    (typeof borderBottomWidth === "number"
      ? `border-bottom-width: ${borderBottomWidth}px`
      : `border-bottom-width: ${borderBottomWidth}`)}
  ${({ borderLeftWidth }) =>
    borderLeftWidth &&
    (typeof borderLeftWidth === "number"
      ? `border-left-width: ${borderLeftWidth}px`
      : `border-left-width: ${borderLeftWidth}`)}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor}`}
  ${({ borderTopColor }) =>
    borderTopColor && `border-top-color: ${borderTopColor}`}
  ${({ borderRightColor }) =>
    borderRightColor && `border-right-color: ${borderRightColor}`}
  ${({ borderBottomColor }) =>
    borderBottomColor && `border-bottom-color: ${borderBottomColor}`}
  ${({ borderLeftColor }) =>
    borderLeftColor && `border-left-color: ${borderLeftColor}`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius}px`}
  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius && `border-top-left-radius: ${borderTopLeftRadius}px`}
  ${({ borderTopRightRadius }) =>
    borderTopRightRadius &&
    `border-top-right-radius: ${borderTopRightRadius}px`}
  ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius &&
    `border-bottom-left-radius: ${borderBottomLeftRadius}px`}
  ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius &&
    `border-bottom-right-radius: ${borderBottomRightRadius}px`}
`;

export const coreProps = css<CoreProps>`
  ${({ w }) => w && (typeof w === "number" ? `width: ${w}px` : `width: ${w}`)}
  ${({ h }) => h && (typeof h === "number" ? `height: ${h}px` : `height: ${h}`)}
  ${({ minW }) => minW && (typeof minW === "number" ? `min-width: ${minW}px` : `min-width: ${minW}`)}
  ${({ maxW }) => maxW && (typeof maxW === "number" ? `max-width: ${maxW}px` : `max-width: ${maxW}`)}
  ${({ minH }) => minH && (typeof minH === "number" ? `min-height: ${minH}px`: `min-height: ${minH}`)}
  ${({ maxH }) => maxH && (typeof maxH === "number" ? `max-height: ${maxH}px`: `max-height: ${maxH}`)}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor}`}
  ${({ rounded }) => rounded && `border-radius: ${rounded}px`}
  ${({ d }) => d && `display: ${d}`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent}`}
  ${({ flex }) => flex && `flex: ${flex}`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection}`}
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap}`}
  ${({ position }) => position && `position: ${position}`}
  ${({ top }) => top && (typeof top === "number" ? `top: ${top}px` : `top: ${top}`)}
  ${({ left }) => left && (typeof left === "number" ? `left: ${left}px` : `left: ${left}`)}
  ${({ right }) => right && (typeof right === "number" ? `right: ${right}px` : `right: ${right}`)}
  ${({ bottom }) => bottom && (typeof bottom === "number" ? `bottom: ${bottom}px` : `bottom: ${bottom}`)}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex}`}
`;

export const textProps = css<TypographyProps>`
  ${({ flex }) => flex && `flex: ${flex}`}
  ${({ color }) => color && `color: ${color}`}
  ${({ fontSize }) => fontSize && `fontSize: ${normalize(fontSize)}px`}
  ${({ fontWeight }) => fontWeight && `font-weight: ${fontWeight};`}
  ${({ lineHeight }) => lineHeight && `line-height: ${normalize(lineHeight)}px`}
  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`}
  ${({ transform }) => transform && `text-transform: ${transform}`}
  ${({ letter }) => letter && `letter-spacing: ${letter}px`}
  ${({ decoration }) => decoration && `text-decoration: ${decoration}`}
  ${({ opacity }) => opacity && `opacity: ${opacity}`}
`;
