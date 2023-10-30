import * as React from "react";
import Svg, { SvgProps, G, Rect, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */
const SwapIcon = (props: SvgProps) => (
  <Svg viewBox="-4.8 -4.8 57.60 57.60" fill="#ffffff" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G id="Layer_2" data-name="Layer 2">
        <G id="invisible_box" data-name="invisible box">
          <Rect width={48} height={48} fill="none" />
        </G>
        <G id="icons_Q2" data-name="icons Q2">
          <Path d="M36.4,28.6l-4.9-5a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L30.2,28H15a2,2,0,0,0,0,4H30.2l-1.6,1.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l4.9-5A1.9,1.9,0,0,0,36.4,28.6Z" />
          <Path d="M33,16H17.8l1.6-1.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-4.9,5a1.9,1.9,0,0,0,0,2.8l4.9,5a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L17.8,20H33a2,2,0,0,0,0-4Z" />
          <Path d="M42,24A18,18,0,1,1,24,6,18.1,18.1,0,0,1,42,24m4,0A22,22,0,1,0,24,46,21.9,21.9,0,0,0,46,24Z" />
        </G>
      </G>
    </G>
  </Svg>
);
export default SwapIcon;
