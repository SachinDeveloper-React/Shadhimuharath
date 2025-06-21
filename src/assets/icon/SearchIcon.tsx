import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  width?: number;
  height?: number;
};

const SearchIcon = ({height, width}: Props) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <Path
        d="M18.125 18.125L14.2883 14.2814M16.4145 9.14473C16.4145 11.0728 15.6485 12.9219 14.2852 14.2852C12.9219 15.6485 11.0728 16.4145 9.14473 16.4145C7.21667 16.4145 5.36759 15.6485 4.00425 14.2852C2.64092 12.9219 1.875 11.0728 1.875 9.14473C1.875 7.21667 2.64092 5.36759 4.00425 4.00425C5.36759 2.64092 7.21667 1.875 9.14473 1.875C11.0728 1.875 12.9219 2.64092 14.2852 4.00425C15.6485 5.36759 16.4145 7.21667 16.4145 9.14473Z"
        stroke="#D69892"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SearchIcon;
