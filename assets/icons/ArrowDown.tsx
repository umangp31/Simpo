import * as React from "react";
import Svg, { SvgProps, Path, G, Polygon } from "react-native-svg";
const ArrowDown = (props: SvgProps) => (
  <Svg
    width="800px"
    height="800px"
    viewBox="0 0 48 48"
    {...props}
  >
    <Path d="M0 0h48v48H0z" fill="none" />
    <G id="Shopicon">
      <Polygon points="24,29.172 9.414,14.586 6.586,17.414 24,34.828 41.414,17.414 38.586,14.586  " />
    </G>
  </Svg>
);
export default ArrowDown;
