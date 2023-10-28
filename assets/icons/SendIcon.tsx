import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const SendIcon = (props: SvgProps) => (
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
        d="M6.03033 7.03033C5.73744 7.32322 5.26256 7.32322 4.96967 7.03033C4.67678 6.73744 4.67678 6.26256 4.96967 5.96967L8.96967 1.96967C9.26256 1.67678 9.73744 1.67678 10.0303 1.96967L14.0303 5.96967C14.3232 6.26256 14.3232 6.73744 14.0303 7.03033C13.7374 7.32322 13.2626 7.32322 12.9697 7.03033L10.25 4.31066L10.25 9.75001C10.25 11.6973 10.4952 13.0713 10.9903 14.1164C11.4759 15.1417 12.2329 15.9151 13.3859 16.6069C13.7411 16.82 13.8562 17.2807 13.6431 17.6359C13.43 17.9911 12.9693 18.1062 12.6141 17.8931C11.2671 17.0849 10.2741 16.1083 9.6347 14.7586C9.00478 13.4288 8.75 11.8027 8.75 9.75001L8.75 4.31066L6.03033 7.03033Z"
        fill="#ffffff"
      />
    </G>
  </Svg>
);
export default SendIcon;
