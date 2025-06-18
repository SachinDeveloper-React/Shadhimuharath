import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {};

const PaymentMethodIcon = (props: Props) => {
  return (
    <Svg width="40" height="41" viewBox="0 0 40 41" fill="none">
      <Circle cx="20" cy="20.5" r="19.5" fill="white" stroke="white" />
      <Path
        d="M25.7274 15.0557H14.2736C13.5708 15.0557 13.001 15.665 13.001 16.4167V24.5832C13.001 25.335 13.5708 25.9443 14.2736 25.9443H25.7274C26.4303 25.9443 27.0001 25.335 27.0001 24.5832V16.4167C27.0001 15.665 26.4303 15.0557 25.7274 15.0557Z"
        stroke="#369BFF"
        strokeWidth="1.16664"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.0005 19.1387H26.9996"
        stroke="#369BFF"
        strokeWidth="1.16664"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default PaymentMethodIcon;
