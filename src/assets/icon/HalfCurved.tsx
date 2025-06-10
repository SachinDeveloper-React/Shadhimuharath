import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
};

const HalfCurved = ({height, width}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      fill="none"
      pointerEvents="none">
      <Path
        d="M493 -59.6573C493 21.3663 460.813 99.0714 403.521 156.364C346.229 213.656 268.524 245.843 187.5 245.843C106.476 245.843 28.7713 213.656 -28.5211 156.364C-85.8135 99.0715 -118 21.3664 -118 -59.6573L187.5 -59.6573H493Z"
        fill="#D9D9D9"
      />
      <Path
        d="M493 -59.6573C493 21.3663 460.813 99.0714 403.521 156.364C346.229 213.656 268.524 245.843 187.5 245.843C106.476 245.843 28.7713 213.656 -28.5211 156.364C-85.8135 99.0715 -118 21.3664 -118 -59.6573L187.5 -59.6573H493Z"
        fill="url(#paint0_linear_1648_12445)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1648_12445"
          x1="210.311"
          y1="-58.8426"
          x2="256.857"
          y2="177.286"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default HalfCurved;
