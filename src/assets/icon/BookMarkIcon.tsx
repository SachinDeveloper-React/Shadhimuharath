import React from 'react';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
};

const BookMarkIcon = ({height = 26, onPress, width = 26}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      onPress={onPress}>
      <Circle cx="12.8374" cy="12.8374" r="12.8374" fill="#D9D9D9" />
      <Circle
        cx="12.8374"
        cy="12.8374"
        r="12.8374"
        fill="url(#paint0_linear_5527_4504)"
      />
      <Path
        d="M16.8379 8.68359C17.0785 8.68359 17.2744 8.8785 17.2744 9.11914V18.8828C17.2743 19.0392 17.1897 19.1833 17.0537 19.2607C16.9177 19.3382 16.7509 19.3367 16.6162 19.2568L13.001 17.1123L9.38281 19.2568C9.31447 19.2974 9.23786 19.3183 9.16113 19.3184C9.08679 19.3184 9.01222 19.2989 8.94531 19.2607C8.80947 19.1833 8.7257 19.0392 8.72559 18.8828V9.11914C8.72559 8.87853 8.9205 8.68359 9.16113 8.68359H16.8379Z"
        fill="white"
        stroke="white"
        strokeWidth="0.2"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_5527_4504"
          x1="6.99849e-08"
          y1="12.8374"
          x2="18.4287"
          y2="15.4954"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default BookMarkIcon;
