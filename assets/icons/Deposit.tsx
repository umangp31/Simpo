import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const Deposit = (props: SvgProps) => (
  <Svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ffffff"
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
        d="M14 20L13.6464 20.3536L14 20.7071L14.3536 20.3536L14 20ZM6 3.5C5.72386 3.5 5.5 3.72386 5.5 4C5.5 4.27614 5.72386 4.5 6 4.5L6 3.5ZM8.64645 15.3536L13.6464 20.3536L14.3536 19.6464L9.35355 14.6464L8.64645 15.3536ZM14.3536 20.3536L19.3536 15.3536L18.6464 14.6464L13.6464 19.6464L14.3536 20.3536ZM14.5 20L14.5 10L13.5 10L13.5 20L14.5 20ZM8 3.5L6 3.5L6 4.5L8 4.5L8 3.5ZM14.5 10C14.5 6.41015 11.5899 3.5 8 3.5L8 4.5C11.0376 4.5 13.5 6.96243 13.5 10L14.5 10Z"
        fill="#ffffff"
      />
    </G>
  </Svg>
);
export default Deposit;