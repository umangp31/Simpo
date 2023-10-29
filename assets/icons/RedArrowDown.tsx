import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const RedArrowDown = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M18.0699 14.4299L11.9999 20.4999L5.92993 14.4299"
        stroke="#ef233c"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 3.5V20.33"
        stroke="#ef233c"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default RedArrowDown;
