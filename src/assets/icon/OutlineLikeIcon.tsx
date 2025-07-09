import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
};

const OutlineLikeIcon = ({height = 27, width = 29, onPress}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 29 27"
      fill="none"
      onPress={onPress}>
      <Path
        d="M14.3333 25.4667L12.4 23.7067C5.53333 17.48 1 13.36 1 8.33333C1 4.21333 4.22667 1 8.33333 1C10.6533 1 12.88 2.08 14.3333 3.77333C15.7867 2.08 18.0133 1 20.3333 1C24.44 1 27.6667 4.21333 27.6667 8.33333C27.6667 13.36 23.1333 17.48 16.2667 23.7067L14.3333 25.4667Z"
        stroke="#D9D9D9"
        strokeWidth="1.4"
      />
      <Path
        d="M14.3333 25.4667L12.4 23.7067C5.53333 17.48 1 13.36 1 8.33333C1 4.21333 4.22667 1 8.33333 1C10.6533 1 12.88 2.08 14.3333 3.77333C15.7867 2.08 18.0133 1 20.3333 1C24.44 1 27.6667 4.21333 27.6667 8.33333C27.6667 13.36 23.1333 17.48 16.2667 23.7067L14.3333 25.4667Z"
        stroke="url(#paint0_linear_5527_5417)"
        strokeWidth="1.4"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_5527_5417"
          x1="1"
          y1="13.2333"
          x2="20.0676"
          y2="16.2308"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default OutlineLikeIcon;
