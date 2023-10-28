import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const Close = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <G id="Menu / Close_LG">
        <Path
          id="Vector"
          d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);
export default Close;
