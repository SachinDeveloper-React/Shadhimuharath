import React from 'react';
import Svg, {
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
  Rect,
  Stop,
} from 'react-native-svg';

type Props = {};

const CrossIcon = (props: Props) => {
  return (
    <Svg width="53" height="53" viewBox="0 0 53 53" fill="none">
      <G filter="url(#filter0_d_4756_13103)">
        <Rect x="10.5" y="6.5" width="32" height="32" rx="16" fill="white" />
        <Path
          d="M25.3804 22.4995L19.2227 16.3418L20.3423 15.2222L26.5 21.3799L32.6577 15.2222L33.7773 16.3418L27.6196 22.4995L33.7773 28.6572L32.6577 29.7768L26.5 23.6191L20.3423 29.7768L19.2227 28.6572L25.3804 22.4995Z"
          fill="#D9D9D9"
        />
        <Path
          d="M25.3804 22.4995L19.2227 16.3418L20.3423 15.2222L26.5 21.3799L32.6577 15.2222L33.7773 16.3418L27.6196 22.4995L33.7773 28.6572L32.6577 29.7768L26.5 23.6191L20.3423 29.7768L19.2227 28.6572L25.3804 22.4995Z"
          fill="url(#paint0_linear_4756_13103)"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_4756_13103"
          x="0.5"
          y="0.5"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="4" />
          <FeGaussianBlur stdDeviation="5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4756_13103"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4756_13103"
            result="shape"
          />
        </Filter>
        <LinearGradient
          id="paint0_linear_4756_13103"
          x1="19.7825"
          y1="15.782"
          x2="28.0349"
          y2="26.8161"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default CrossIcon;
