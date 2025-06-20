import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {};

const DeactiveHomeIcon = (props: Props) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M12.001 1.99902C12.8357 1.99902 13.6446 2.28962 14.2881 2.82129H14.2871L20.1514 7.63672L20.1523 7.63867L20.3076 7.77344C20.659 8.09802 20.9446 8.48867 21.1484 8.92285C21.381 9.41848 21.5012 9.95936 21.5 10.5068V19.3086C21.5 21.2451 20.009 22.8929 18.0576 22.9941L17.8672 22.999L6.13281 23C4.08888 22.9999 2.5 21.3086 2.5 19.3096V10.5078C2.49883 9.96034 2.61897 9.41945 2.85156 8.92383L2.94434 8.74023C3.17128 8.31905 3.47778 7.94515 3.84766 7.63965L3.84863 7.6377L9.71387 2.82129L9.96289 2.63379C10.5602 2.22185 11.2706 1.99903 12.001 1.99902Z"
        stroke="#A0A0A0"
        strokeWidth="1.5"
      />
      <Rect x="11" y="13.5" width="2" height="5" rx="1" fill="#A0A0A0" />
    </Svg>
  );
};

export default DeactiveHomeIcon;
