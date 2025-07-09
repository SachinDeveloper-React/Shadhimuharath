import React from 'react';
import Svg, {Defs, Image, Pattern, Rect, Use} from 'react-native-svg';

type Props = {};

const AnalyzeIcon = (props: Props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" fill="url(#pattern0_4756_13190)" />
      <Defs>
        <Pattern
          id="pattern0_4756_13190"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1">
          <Use xlinkHref="#image0_4756_13190" transform="scale(0.0111111)" />
        </Pattern>
        <Image
          id="image0_4756_13190"
          width="90"
          height="90"
          preserveAspectRatio="none"
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
};

export default AnalyzeIcon;
