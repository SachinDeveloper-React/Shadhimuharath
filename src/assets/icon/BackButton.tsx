import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const BackButton = ({onPress}: Props) => {
  return (
    <Svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      onPress={onPress}>
      <Path
        d="M17.5 21.5999L12.0667 16.1666C11.425 15.5249 11.425 14.4749 12.0667 13.8332L17.5 8.3999"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default BackButton;
