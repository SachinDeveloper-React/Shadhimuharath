import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
};

const FillBookMarkIcon = ({height = 32, width = 32, onPress}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      onPress={onPress}>
      <Path
        d="M7.22532 27.9256C7.09432 27.9256 6.9632 27.8921 6.84538 27.8249C6.60595 27.6884 6.45801 27.434 6.45801 27.1583V4.84153C6.45801 4.41778 6.80151 4.07422 7.22526 4.07422H24.7738C25.1975 4.07422 25.541 4.41772 25.541 4.84153V27.1583C25.541 27.434 25.3931 27.6885 25.1534 27.825C24.9139 27.9614 24.6195 27.9588 24.3823 27.8182L16.0046 22.8495L7.61626 27.8184C7.49588 27.8898 7.36063 27.9256 7.22532 27.9256Z"
        fill="#D9D9D9"
      />
      <Path
        d="M7.22532 27.9256C7.09432 27.9256 6.9632 27.8921 6.84538 27.8249C6.60595 27.6884 6.45801 27.434 6.45801 27.1583V4.84153C6.45801 4.41778 6.80151 4.07422 7.22526 4.07422H24.7738C25.1975 4.07422 25.541 4.41772 25.541 4.84153V27.1583C25.541 27.434 25.3931 27.6885 25.1534 27.825C24.9139 27.9614 24.6195 27.9588 24.3823 27.8182L16.0046 22.8495L7.61626 27.8184C7.49588 27.8898 7.36063 27.9256 7.22532 27.9256Z"
        fill="url(#paint0_linear_5527_5430)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_5527_5430"
          x1="6.45801"
          y1="15.9999"
          x2="20.2565"
          y2="17.5922"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default FillBookMarkIcon;
