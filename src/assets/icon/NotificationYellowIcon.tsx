import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {};

const NotificationYellowIcon = (props: Props) => {
  return (
    <Svg width="40" height="41" viewBox="0 0 40 41" fill="none">
      <Circle cx="20" cy="20.5" r="19.5" fill="white" stroke="white" />
      <Path
        d="M24.147 17.443C24.147 16.2996 23.6928 15.203 22.8843 14.3945C22.0758 13.586 20.9793 13.1318 19.8359 13.1318C18.6925 13.1318 17.5959 13.586 16.7874 14.3945C15.9789 15.203 15.5247 16.2996 15.5247 17.443C15.5247 22.4727 13.3691 23.9097 13.3691 23.9097H26.3026C26.3026 23.9097 24.147 22.4727 24.147 17.443Z"
        stroke="#FFAA2A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.0789 26.7842C20.9525 27.0019 20.7712 27.1827 20.5531 27.3084C20.3349 27.434 20.0876 27.5002 19.8358 27.5002C19.5841 27.5002 19.3367 27.434 19.1186 27.3084C18.9004 27.1827 18.7191 27.0019 18.5928 26.7842"
        stroke="#FFAA2A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default NotificationYellowIcon;
