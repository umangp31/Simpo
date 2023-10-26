import * as React from "react";
import Svg, {
  SvgProps,
  G,
  Rect,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  ClipPath,
  Image,
} from "react-native-svg";
const Cover = (props: SvgProps) => (
  <Svg
    width={428}
    height={926}
    viewBox="0 0 428 926"
    fill="none"
    {...props}
  >
    <G clipPath="url(#clip0_1_66)">
      <Rect width={428} height={926} fill="url(#paint0_linear_1_66)" />
      <G
        style={{
          mixBlendMode: "overlay",
        }}
      >
        <Rect x={-208} width={779} height={983} fill="url(#pattern0)" />
      </G>
    </G>
    <Defs>
      <Pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width={0.172015}
        height={0.136317}
      >
        <Use
          xlinkHref="#image0_1_66"
          transform="scale(0.000781888 0.000619625)"
        />
      </Pattern>
      <LinearGradient
        id="paint0_linear_1_66"
        x1={428}
        y1={926}
        x2={-28}
        y2={-20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop />
        <Stop offset={0.317708} stopOpacity={0.79} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="clip0_1_66">
        <Rect width={428} height={926} fill="white" />
      </ClipPath>
      <Image
        id="image0_1_66"
        width={220}
        height={220}
      />
    </Defs>
  </Svg>
);
export default Cover;
