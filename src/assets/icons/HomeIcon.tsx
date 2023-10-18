import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={23}
    viewBox="0 0 21 23"
    fill="none"
    {...props}
  >
    <Path
      d="M20.4345 9.34981L11.6845 1.09419C11.6803 1.09046 11.6762 1.08644 11.6725 1.08216C11.3503 0.789179 10.9305 0.626831 10.4951 0.626831C10.0596 0.626831 9.63981 0.789179 9.31766 1.08216L9.30562 1.09419L0.565469 9.34981C0.387185 9.51375 0.244873 9.71292 0.147538 9.9347C0.0502023 10.1565 -3.67969e-05 10.3961 2.02211e-08 10.6383V20.75C2.02211e-08 21.2141 0.184374 21.6592 0.512563 21.9874C0.840752 22.3156 1.28587 22.5 1.75 22.5H7C7.46413 22.5 7.90925 22.3156 8.23744 21.9874C8.56563 21.6592 8.75 21.2141 8.75 20.75V15.5H12.25V20.75C12.25 21.2141 12.4344 21.6592 12.7626 21.9874C13.0908 22.3156 13.5359 22.5 14 22.5H19.25C19.7141 22.5 20.1592 22.3156 20.4874 21.9874C20.8156 21.6592 21 21.2141 21 20.75V10.6383C21 10.3961 20.9498 10.1565 20.8525 9.9347C20.7551 9.71292 20.6128 9.51375 20.4345 9.34981ZM19.25 20.75H14V15.5C14 15.0358 13.8156 14.5907 13.4874 14.2625C13.1592 13.9343 12.7141 13.75 12.25 13.75H8.75C8.28587 13.75 7.84075 13.9343 7.51256 14.2625C7.18437 14.5907 7 15.0358 7 15.5V20.75H1.75V10.6383L1.76203 10.6273L10.5 2.37497L19.2391 10.6251L19.2511 10.6361L19.25 20.75Z"
      fill={props.fill ? props.fill : "#A3A6AB"}
    />
  </Svg>
);
export default HomeIcon;