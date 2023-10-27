import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowUp = (props: SvgProps) => (
  <Svg
    fill="#529864"
    width="800px"
    height="800px"
    viewBox="0 0 52 52"
    {...props}
  >
    <Path d="M41.4,21c0.8-0.8,0.8-1.9,0-2.7l-15-14.7c-0.8-0.8-2-0.8-2.8,0L8.6,18.3c-0.8,0.8-0.8,1.9,0,2.7l2.8,2.7 c0.8,0.8,2,0.8,2.8,0l4.7-4.6c0.8-0.8,2.2-0.2,2.2,0.9v27c0,1,0.9,2,2,2h4c1.1,0,2-1.1,2-2V20c0-1.2,1.4-1.7,2.2-0.9l4.7,4.6 c0.8,0.8,2,0.8,2.8,0L41.4,21z" />
  </Svg>
);
export default ArrowUp;
