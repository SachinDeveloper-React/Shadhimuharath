import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
};

const MatchHeartIcon = ({height = 32, onPress, width = 32}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      onPress={onPress}>
      <Path
        d="M22 4.75C25.6932 4.75 28.5838 7.62827 28.584 11.333C28.584 13.5998 27.5681 15.7221 25.6279 18.0957C24.1667 19.8834 22.2254 21.7617 19.8916 23.9082L17.4297 26.1514L17.4287 26.1523L16 27.4521L14.5723 26.1523L14.5703 26.1514L12.1094 23.9082C9.77561 21.7617 7.83429 19.8834 6.37305 18.0957C4.4329 15.7221 3.41699 13.5998 3.41699 11.333C3.41716 7.62838 6.30692 4.75017 10 4.75C12.0933 4.75 14.1155 5.72827 15.4316 7.26172L16 7.9248L16.5693 7.26172C17.8854 5.72835 19.9068 4.7501 22 4.75Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default MatchHeartIcon;
