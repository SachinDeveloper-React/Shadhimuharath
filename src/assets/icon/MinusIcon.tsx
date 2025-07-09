import React from 'react';
import Svg, {Circle, Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const MinusIcon = ({onPress}: Props) => {
  return (
    <Svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      onPress={onPress}>
      <Circle cx="13" cy="13" r="13" fill="#D9D9D9" />
      <Circle cx="13" cy="13" r="13" fill="url(#paint0_linear)" />

      {/* Centered horizontal line */}
      <Path d="M8 13H18" stroke="white" strokeWidth="2" strokeLinecap="round" />

      <Defs>
        <LinearGradient
          id="paint0_linear"
          x1="0"
          y1="13"
          x2="26"
          y2="13"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MinusIcon;
