import * as React from "react"
import { ViewStyle } from "react-native"
import Svg, { Rect, Path } from "react-native-svg"

interface Props {
    style:ViewStyle,
    color?:string
}

function Edit({style, color}:Props) {
  return (
    <Svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      style={style}


    >
      <Rect x={0.5} width={20} height={20} rx={10} fill="#31353D" />
      <Path
        d="M14.836 8.384L12.51 6.082l.766-.767c.21-.21.468-.315.774-.315.305 0 .563.105.772.315l.766.767c.21.21.32.464.328.76a.99.99 0 01-.3.76l-.78.782zm-.794.808L8.242 15H5.917v-2.329l5.8-5.808 2.325 2.329z"
        fill={color?.length ?  color : "#A3A6AB"}

      />
    </Svg>
  )
}

export default Edit
