import React from 'react';
import {Pressable, PressableProps} from 'react-native';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = PressableProps & {
  onPress?: () => void;
};

const NotificationIcon = ({onPress, ...props}: Props) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M2.52952 14.7705C2.31652 16.1645 3.26752 17.1315 4.43152 17.6135C8.89452 19.4635 15.1045 19.4635 19.5675 17.6135C20.7315 17.1315 21.6825 16.1635 21.4695 14.7705C21.3395 13.9135 20.6925 13.2005 20.2135 12.5035C19.5865 11.5795 19.5245 10.5725 19.5235 9.50049C19.5245 5.35849 16.1565 2.00049 11.9995 2.00049C7.84252 2.00049 4.47452 5.35849 4.47452 9.50049C4.47452 10.5725 4.41252 11.5805 3.78452 12.5035C3.30652 13.2005 2.66052 13.9135 2.52952 14.7705Z"
          stroke="#70302B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.99902 19.0007C8.45702 20.7257 10.075 22.0007 11.999 22.0007C13.924 22.0007 15.54 20.7257 15.999 19.0007"
          stroke="#70302B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Circle
          cx="17.4"
          cy="4.19982"
          r="3.371"
          fill="#E11D48"
          stroke="white"
          strokeWidth="0.919363"
        />
      </Svg>
    </Pressable>
  );
};

export default NotificationIcon;
