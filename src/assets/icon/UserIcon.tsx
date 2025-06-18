import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {};

const UserIcon = (props: Props) => {
  return (
    <Svg width="40" height="41" viewBox="0 0 40 41" fill="none">
      <Circle cx="20" cy="20.5" r="19.5" fill="white" stroke="white" />
      <Path
        d="M26 27.5V25.8333C26 24.9493 25.6839 24.1014 25.1213 23.4763C24.5587 22.8512 23.7956 22.5 23 22.5H17C16.2044 22.5 15.4413 22.8512 14.8787 23.4763C14.3161 24.1014 14 24.9493 14 25.8333V27.5"
        stroke="#FB6F3D"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20 19.5C21.6569 19.5 23 18.1569 23 16.5C23 14.8431 21.6569 13.5 20 13.5C18.3431 13.5 17 14.8431 17 16.5C17 18.1569 18.3431 19.5 20 19.5Z"
        stroke="#FB6F3D"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default UserIcon;
