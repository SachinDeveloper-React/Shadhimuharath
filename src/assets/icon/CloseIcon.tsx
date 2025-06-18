import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const CloseIcon = ({onPress}: Props) => {
  return (
    <Svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      onPress={onPress}>
      <Path
        d="M20.2553 22L10.6595 12.4042L12.4042 10.6595L22 20.2553L31.5958 10.6595L33.3405 12.4042L23.7447 22L33.3405 31.5958L31.5958 33.3404L22 23.7447L12.4042 33.3404L10.6595 31.5958L20.2553 22Z"
        fill="#D9D9D9"
      />
      <Path
        d="M20.2553 22L10.6595 12.4042L12.4042 10.6595L22 20.2553L31.5958 10.6595L33.3405 12.4042L23.7447 22L33.3405 31.5958L31.5958 33.3404L22 23.7447L12.4042 33.3404L10.6595 31.5958L20.2553 22Z"
        fill="url(#paint0_linear_2379_11171)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2379_11171"
          x1="11.5319"
          y1="11.5318"
          x2="24.3919"
          y2="28.7267"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CloseIcon;
