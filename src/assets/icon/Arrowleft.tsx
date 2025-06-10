import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {};

const Arrowleft = (props: Props) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.97484 4.94165L2.9165 9.99998L7.97484 15.0583"
        stroke="#B2B2B5"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.0831 10H3.05811"
        stroke="#B2B2B5"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Arrowleft;
