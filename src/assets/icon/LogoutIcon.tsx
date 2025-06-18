import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {};

const LogoutIcon = (props: Props) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Circle cx="20" cy="20" r="20" fill="white" />
      <Path
        d="M23.0041 16.4947V15.7886C23.0041 14.2486 21.7907 13 20.2942 13H16.7092C15.2134 13 14 14.2486 14 15.7886V24.2114C14 25.7514 15.2134 27 16.7092 27H20.3016C21.7937 27 23.0041 25.7551 23.0041 24.2197V23.5061"
        stroke="#FB4A59"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M26.9999 19.9995H18.145"
        stroke="#FB4A59"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M24.8467 17.7939L26.9999 19.9999L24.8467 22.2066"
        stroke="#FB4A59"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default LogoutIcon;
