import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props) {
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
      <G
        clipPath="url(#clip0_675_287)"
        stroke="#5E6067"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M23.625 12.375l-11.25 11.25M23.625 23.625l-11.25-11.25" />
      </G>
      <Rect
        x={0.25}
        y={0.25}
        width={35.5}
        height={35.5}
        rx={17.75}
        stroke="#EFEFF1"
        strokeWidth={0.5}
      />
      <Defs>
        <ClipPath id="clip0_675_287">
          <Path fill="#fff" transform="translate(8 8)" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
