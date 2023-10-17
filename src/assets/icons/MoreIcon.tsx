import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const MoreIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={4}
    viewBox="0 0 21 4"
    fill="none"
    {...props}
  >
    <Path
      d="M1.75 0.25C0.7875 0.25 0 1.0375 0 2C0 2.9625 0.7875 3.75 1.75 3.75C2.7125 3.75 3.5 2.9625 3.5 2C3.5 1.0375 2.7125 0.25 1.75 0.25ZM19.25 0.25C18.2875 0.25 17.5 1.0375 17.5 2C17.5 2.9625 18.2875 3.75 19.25 3.75C20.2125 3.75 21 2.9625 21 2C21 1.0375 20.2125 0.25 19.25 0.25ZM10.5 0.25C9.5375 0.25 8.75 1.0375 8.75 2C8.75 2.9625 9.5375 3.75 10.5 3.75C11.4625 3.75 12.25 2.9625 12.25 2C12.25 1.0375 11.4625 0.25 10.5 0.25Z"
      fill={props.fill ? props.fill : "#A3A6AB"}
    />
  </Svg>
);
export default MoreIcon;
