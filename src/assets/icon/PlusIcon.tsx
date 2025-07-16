import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  FeBlend,
  FeColorMatrix,
  FeComposite,
  FeFlood,
  FeGaussianBlur,
  FeOffset,
  Filter,
  G,
  Path,
  Rect,
} from 'react-native-svg';

type Props = {};

const PlusIcon = (props: Props) => {
  return (
    <Svg width="53" height="52" viewBox="0 0 53 52" fill="none">
      <G filter="url(#filter0_d_4756_12104)">
        <Rect x="10.5" y="6" width="32" height="32" rx="16" fill="white" />
        <G clipPath="url(#clip0_4756_12104)">
          <Path
            d="M24.9046 21.4059C25.4568 21.4059 25.9046 20.9582 25.9046 20.4059V15.4581C25.9046 15.1296 26.1709 14.8633 26.4993 14.8633C26.8278 14.8633 27.0941 15.1296 27.0941 15.4581V20.4059C27.0941 20.9582 27.5418 21.4059 28.0941 21.4059H33.0419C33.3704 21.4059 33.6367 21.6722 33.6367 22.0007C33.6367 22.3291 33.3704 22.5954 33.0419 22.5954H28.0941C27.5418 22.5954 27.0941 23.0432 27.0941 23.5954V28.5433C27.0941 28.8717 26.8278 29.138 26.4993 29.138C26.1709 29.138 25.9046 28.8717 25.9046 28.5433V23.5954C25.9046 23.0432 25.4568 22.5954 24.9046 22.5954H19.9567C19.6283 22.5954 19.362 22.3291 19.362 22.0007C19.362 21.6722 19.6283 21.4059 19.9567 21.4059H24.9046Z"
            fill="#620B00"
          />
        </G>
      </G>
      <Defs>
        <Filter
          id="filter0_d_4756_12104"
          x="0.5"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse">
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
            result="effect1_dropShadow_4756_12104"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4756_12104"
            result="shape"
          />
        </Filter>
        <ClipPath id="clip0_4756_12104">
          <Rect
            width="21.2133"
            height="21.2133"
            fill="white"
            transform="translate(26.5 7) rotate(45)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default PlusIcon;
