import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
  onPress?: () => void;
  color?: string;
};

const NegativeIcon = ({
  color = '#040509',
  height = 70,
  onPress,
  width = 70,
}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 70 70"
      fill="none"
      onPress={onPress}>
      <Circle cx="35" cy="35" r="35" fill={color} />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.9627 22.7069C24.3398 22.084 23.3298 22.084 22.7069 22.7069C22.084 23.3298 22.084 24.3398 22.7069 24.9627L32.7444 35.0002L22.7069 45.0377C22.084 45.6606 22.084 46.6705 22.7069 47.2934C23.3298 47.9163 24.3398 47.9163 24.9627 47.2934L35.0002 37.2559L45.0377 47.2934C45.6606 47.9163 46.6705 47.9163 47.2934 47.2934C47.9163 46.6705 47.9163 45.6606 47.2934 45.0377L37.2559 35.0002L47.2934 24.9627C47.9163 24.3398 47.9163 23.3298 47.2934 22.7069C46.6705 22.084 45.6606 22.084 45.0377 22.7069L35.0002 32.7444L24.9627 22.7069Z"
        fill="white"
      />
    </Svg>
  );
};

export default NegativeIcon;
