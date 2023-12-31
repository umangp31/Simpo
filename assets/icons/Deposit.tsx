import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const Deposit = (props: SvgProps) => (
  <Svg
    viewBox="0 0 20 20"
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
        d="M6.61413 3.14311C6.25894 2.93 6.14377 2.4693 6.35688 2.11412C6.56999 1.75893 7.03069 1.64376 7.38587 1.85687C8.73287 2.66507 9.72595 3.64168 10.3653 4.99143C10.9952 6.32124 11.25 7.94728 11.25 9.99999V15.4393L13.9697 12.7197C14.2626 12.4268 14.7374 12.4268 15.0303 12.7197C15.3232 13.0126 15.3232 13.4874 15.0303 13.7803L11.0303 17.7803C10.7374 18.0732 10.2626 18.0732 9.96967 17.7803L5.96967 13.7803C5.67678 13.4874 5.67678 13.0126 5.96967 12.7197C6.26256 12.4268 6.73744 12.4268 7.03033 12.7197L9.75 15.4393V9.99999C9.75 8.0527 9.50478 6.67874 9.0097 5.63356C8.52405 4.6083 7.76713 3.83491 6.61413 3.14311Z"
        fill="#ffffff"
      />
    </G>
  </Svg>
);
export default Deposit;
