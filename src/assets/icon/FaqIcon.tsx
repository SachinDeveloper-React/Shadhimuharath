import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {};

const FaqIcon = (props: Props) => {
  return (
    <Svg width="40" height="41" viewBox="0 0 40 41" fill="none">
      <Circle cx="20" cy="20.5" r="20" fill="white" />
      <Path
        d="M19.5512 28.4998C24.2172 28.4998 27.9998 24.7172 27.9998 20.0512C27.9998 15.3851 24.2172 11.6025 19.5512 11.6025C14.8851 11.6025 11.1025 15.3851 11.1025 20.0512C11.1025 24.7172 14.8851 28.4998 19.5512 28.4998Z"
        stroke="#FB6D3A"
        strokeWidth="1.67823"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0928 17.5168C17.2914 16.9521 17.6835 16.476 18.1995 16.1727C18.7156 15.8694 19.3223 15.7585 19.9122 15.8597C20.5022 15.9609 21.0373 16.2676 21.4228 16.7256C21.8082 17.1835 22.0192 17.763 22.0183 18.3616C22.0183 20.0513 19.4837 20.8962 19.4837 20.8962"
        stroke="#FB6D3A"
        strokeWidth="1.67823"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.5518 24.2344H19.5598"
        stroke="#FB6D3A"
        strokeWidth="1.67823"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default FaqIcon;
