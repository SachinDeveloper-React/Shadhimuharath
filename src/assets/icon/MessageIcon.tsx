import React from 'react';
import Svg, {
  Circle,
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
};

const MessageIcon = ({height = 128, onPress, width = 128}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 129 128"
      fill="none"
      onPress={onPress}>
      <G filter="url(#filter0_d_2338_10249)">
        <Circle cx="64.5" cy="58" r="40" fill="#D9D9D9" />
        <Circle
          cx="64.5"
          cy="58"
          r="40"
          fill="url(#paint0_linear_2338_10249)"
        />
        <Path
          d="M57.1667 52.4999H71.8333M57.1667 59.8333H68.1667M75.5 43.3333C76.9587 43.3333 78.3576 43.9127 79.3891 44.9442C80.4205 45.9756 81 47.3746 81 48.8333V63.4999C81 64.9586 80.4205 66.3576 79.3891 67.389C78.3576 68.4205 76.9587 68.9999 75.5 68.9999H66.3333L57.1667 74.4999V68.9999H53.5C52.0413 68.9999 50.6424 68.4205 49.6109 67.389C48.5795 66.3576 48 64.9586 48 63.4999V48.8333C48 47.3746 48.5795 45.9756 49.6109 44.9442C50.6424 43.9127 52.0413 43.3333 53.5 43.3333H75.5Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_2338_10249"
          x="0.5"
          y="0"
          width="128"
          height="128"
          filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="6" />
          <FeGaussianBlur stdDeviation="12" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_2338_10249"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_2338_10249"
            result="shape"
          />
        </Filter>
        <LinearGradient
          id="paint0_linear_2338_10249"
          x1="24.5"
          y1="58"
          x2="81.9218"
          y2="66.282"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default MessageIcon;
