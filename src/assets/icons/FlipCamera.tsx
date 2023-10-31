import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6.359 7.808l1.594-.488a1 1 0 11.585 1.913l-3.825 1.17a1 1 0 01-1.249-.665l-1.17-3.825a1 1 0 011.913-.585l.44 1.441c2.408-3.709 7.185-5.304 11.426-3.566a9.38 9.38 0 015.38 5.831 1.002 1.002 0 01-1.035 1.317 1 1 0 01-.87-.709A7.382 7.382 0 006.359 7.808zm12.327 8.195l-1.775.443a1 1 0 11-.484-1.94l3.643-.909a.997.997 0 01.61-.08 1 1 0 01.84.75l.968 3.88a1 1 0 01-1.94.484l-.33-1.322a9.382 9.382 0 01-16.384-1.796l-.26-.634a1 1 0 111.851-.758l.26.633a7.38 7.38 0 0013.001 1.249z"
        fill="#31353D"
      />
    </Svg>
  )
}

export default SvgComponent
