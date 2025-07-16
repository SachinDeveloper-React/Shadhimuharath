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

const SilverPremium = (props: Props) => {
  return (
    <Svg width="48" height="47" viewBox="0 0 48 47" fill="none">
      <G filter="url(#filter0_d_6223_1468)">
        <Rect x="4" y="0.5" width="40" height="40" rx="20" fill="#D9D9D9" />
        <Rect
          x="4"
          y="0.5"
          width="40"
          height="40"
          rx="20"
          fill="url(#paint0_linear_6223_1468)"
          fillOpacity="0.9"
        />
        <Path
          d="M15.9572 28.663H31.7589C32.0208 28.663 32.239 28.4448 32.239 28.1829V27.0043H15.4771V28.1829C15.4771 28.4884 15.6953 28.663 15.9572 28.663ZM33.0248 14.6947C32.2827 14.6947 31.7152 15.2622 31.7152 16.0043C31.7152 16.3535 31.8462 16.7027 32.1081 16.9209L28.1795 20.9368L24.4692 14.3019C24.862 14.0836 25.1239 13.6471 25.1239 13.1669C25.1239 12.4249 24.5565 11.8574 23.8144 11.8574C23.0723 11.8574 22.5049 12.4249 22.5049 13.1669C22.5049 13.6471 22.7668 14.0836 23.1596 14.3019L19.4493 20.9368L15.5207 16.9209C15.8699 16.7027 16.0009 16.3535 16.0009 16.0043C16.0009 15.2622 15.4334 14.6947 14.6914 14.6947C13.9493 14.6947 13.3818 15.2622 13.3818 16.0043C13.3818 16.7463 13.9493 17.3138 14.6914 17.3138C14.735 17.3138 14.7787 17.3138 14.7787 17.3138L15.4771 26.2186H32.239L32.9375 17.3138C32.9811 17.3138 33.0248 17.3138 33.0248 17.3138C33.7668 17.3138 34.3343 16.7463 34.3343 16.0043C34.3343 15.3058 33.7668 14.6947 33.0248 14.6947Z"
          fill="white"
        />
      </G>
      <Defs>
        <Filter
          id="filter0_d_6223_1468"
          x="0.862745"
          y="0.5"
          width="46.2745"
          height="46.2745"
          filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="3.13725" />
          <FeGaussianBlur stdDeviation="1.56863" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_6223_1468"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_6223_1468"
            result="shape"
          />
        </Filter>
        <LinearGradient
          id="paint0_linear_6223_1468"
          x1="4"
          y1="20.5"
          x2="32.7109"
          y2="24.641"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default SilverPremium;
