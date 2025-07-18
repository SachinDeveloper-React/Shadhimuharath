import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const ThreeDotMenuIcon = ({onPress}: Props) => {
  return (
    <Svg width="5" height="24" viewBox="0 0 5 24" fill="none" onPress={onPress}>
      <Path
        d="M2.5 18.3623C3.88069 18.3623 4.99997 19.476 5 20.8496C5 22.2233 3.88071 23.3369 2.5 23.3369C1.11929 23.3369 0 22.2233 0 20.8496C2.84923e-05 19.476 1.11931 18.3623 2.5 18.3623ZM2.5 9.18164C3.88055 9.18164 4.99974 10.2945 5 11.668C5 13.0416 3.88071 14.1553 2.5 14.1553C1.11929 14.1553 0 13.0416 0 11.668C0.000260542 10.2945 1.11945 9.18164 2.5 9.18164ZM2.5 0C3.88071 0 5 1.11364 5 2.4873C4.99996 3.86093 3.88069 4.97461 2.5 4.97461C1.11931 4.97461 3.78171e-05 3.86093 0 2.4873C0 1.11364 1.11929 0 2.5 0Z"
        fill="white"
      />
    </Svg>
  );
};

export default ThreeDotMenuIcon;
