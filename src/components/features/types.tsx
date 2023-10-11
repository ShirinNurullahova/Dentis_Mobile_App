import { FunctionComponent } from "react";
import { TextProps, TouchableOpacityProps, ViewProps } from "react-native";

//* Margin/Padding Props
export type SpacesProps = {
  m?: any;
  my?: number;
  mx?: number;
  mt?: number | string;
  mb?: number | string;
  mr?: number;
  ml?: number;
  p?: number;
  py?: number;
  px?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
};

//* Border Props
export type BorderProps = {
  borderWidth?: number;
  borderTopWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderColor?: string;
  borderTopColor?: string;
  borderRightColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
};

//* Core Props
export type CoreProps = {
  w?: number | string; //* Width Number or 100%
  h?: number | string; //* Height Number or 100%
  minW?: number | string;
  minH?: number | string;
  maxW?: number | string;
  maxH?: number | string;
  backgroundColor?: string | undefined; //* Background Color
  rounded?: number; //* Border Radius
  textAlign?: "left" | "center" | "right"; //* Text Position
  d?: "none" | "block" | "flex" | "grid" | "inline" | "inline-block"; //* Display
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?:
    | "space-between"
    | "center"
    | "space-around"
    | "space-evenly"
    | "flex-start"
    | "flex-end";
  flex?: number;
  flexDirection?: "row" | "column";
  flexWrap?: "wrap" | "nowrap";
  variant?: "primary" | "outline" | "disabled" | "download" | "join";
  position?: "absolute" | "relative" | "static" | "fixed";
  top?: number | string;
  bottom?: number | string;
  left?: number | string;
  right?: number | string;
  zIndex?: number;
  overflow?: "hidden" | "scroll" | "auto";
  overflowY?: "hidden" | "scroll" | "auto";
  overflowX?: "hidden" | "scroll" | "auto";
  transition?: "string";
} & SpacesProps &
  BorderProps;

//* Text Props
export type TypographyProps = {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "primary"
    | "outline"
    | "disabled"
    | "light";
  flex?: number;
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
  lineHeight?: number;
  textAlign?: "left" | "center" | "right";
  transform?: "capitalize" | "uppercase" | "lowercase";
  decoration?: "underline" | "overline" | "line-through";
  letter?: number;
  opacity?: number;
} & SpacesProps &
  BorderProps;

//* Custom Text Component Prop Interface
export type TypographyComponent<T = {}> = FunctionComponent<
  TextProps & TypographyProps & T
>;

//* Custom Button Component Prop Interface
export type ButtonComponent<T = {}> = FunctionComponent<
  TouchableOpacityProps & CoreProps & BorderProps & T
>;

//* Custom View & HorizontalView Component Prop Interface
export type ViewComponent<T = {}> = FunctionComponent<
  ViewProps & CoreProps & T
>;
