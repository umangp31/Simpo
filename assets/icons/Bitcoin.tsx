import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Bitcoin = (props: SvgProps) => (
  <Svg
    width={64}
    height={64}
    viewBox="0 0 64 64"
    fill="none"
    {...props}
  >
    <Path
      d="M55.2761 37.8059C52.0706 50.663 39.0485 58.4877 26.1899 55.2815C13.3365 52.076 5.51187 39.0531 8.71884 26.1968C11.9228 13.3381 24.9449 5.51272 37.7998 8.71819C50.6577 11.9237 58.4816 24.948 55.2761 37.8059Z"
      fill="#F7931A"
    />
    <Path
      d="M42.5787 28.581C43.0565 25.3875 40.625 23.6708 37.3003 22.5255L38.3788 18.1996L35.7456 17.5433L34.6956 21.7553C34.0033 21.5828 33.2923 21.4201 32.5858 21.2588L33.6433 17.0191L31.0116 16.3629L29.9324 20.6873C29.3594 20.5568 28.7969 20.4278 28.2509 20.2921L28.2539 20.2786L24.6224 19.3718L23.9219 22.1843C23.9219 22.1843 25.8757 22.632 25.8344 22.6598C26.9009 22.926 27.0936 23.6318 27.0614 24.1913L25.8329 29.1195C25.9064 29.1382 26.0017 29.1652 26.1067 29.2072C26.0189 29.1855 25.9252 29.1615 25.8284 29.1382L24.1064 36.0419C23.9759 36.3659 23.6452 36.8519 22.8997 36.6674C22.9259 36.7056 20.9857 36.1897 20.9857 36.1897L19.6785 39.2039L23.1052 40.0581C23.7427 40.2179 24.3674 40.3851 24.9824 40.5426L23.8927 44.9181L26.5229 45.5743L27.6021 41.2454C28.3206 41.4404 29.0181 41.6203 29.7006 41.7898L28.6251 46.0986L31.2583 46.7548L32.3481 42.3876C36.8383 43.2373 40.2148 42.8946 41.636 38.8334C42.7812 35.5634 41.579 33.6772 39.2165 32.4472C40.937 32.0504 42.233 30.9187 42.5787 28.581ZM36.5623 37.0176C35.7486 40.2876 30.2429 38.5199 28.4579 38.0766L29.9039 32.2799C31.6888 32.7254 37.4128 33.6074 36.5623 37.0176ZM37.3768 28.5337C36.6343 31.5082 32.0518 29.997 30.5654 29.6265L31.8763 24.369C33.3628 24.7395 38.15 25.431 37.3768 28.5337Z"
      fill="white"
    />
  </Svg>
);
export default Bitcoin;
