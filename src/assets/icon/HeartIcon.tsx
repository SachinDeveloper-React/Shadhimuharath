import React from 'react';
import {Pressable, PressableProps} from 'react-native';
import Svg, {Path} from 'react-native-svg';

type Props = PressableProps & {
  onPress?: () => void;
};

const HeartIcon = ({onPress, ...props}: Props) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M16.5 3.5C19.3045 3.5 21.5 5.68674 21.5 8.5C21.5 10.2206 20.7289 11.8259 19.2695 13.6113C18.1708 14.9555 16.7113 16.3668 14.96 17.9775L13.1143 19.6592L13.1133 19.6602L12 20.6729L10.8867 19.6602L10.8857 19.6592L9.04004 17.9775C7.28874 16.3668 5.82916 14.9555 4.73047 13.6113C3.27109 11.8259 2.5 10.2206 2.5 8.5C2.5 5.68674 4.69555 3.5 7.5 3.5C9.08865 3.5 10.6216 4.24211 11.6201 5.40527L12 5.84766L12.3799 5.40527C13.3784 4.24211 14.9114 3.5 16.5 3.5Z"
          stroke="#70302B"
        />
      </Svg>
    </Pressable>
  );
};

export default HeartIcon;
