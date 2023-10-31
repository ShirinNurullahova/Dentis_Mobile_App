import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

function SvgComponent(props: any) {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={0.25} y={0.25} width={35.5} height={35.5} rx={17.75} fill="#fff" />
      <Path
        d="M21.273 10.636L13.09 18.41l8.182 7.773"
        stroke="#5E6067"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Rect
        x={0.25}
        y={0.25}
        width={35.5}
        height={35.5}
        rx={17.75}
        stroke="#EFEFF1"
        strokeWidth={0.5}
      />
    </Svg>
  );
}

export default SvgComponent;
