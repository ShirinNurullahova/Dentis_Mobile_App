import * as React from "react"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={40}
        cy={40}
        r={39}
        fill="#D5FFD9"
        stroke="#12CC89"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default SvgComponent