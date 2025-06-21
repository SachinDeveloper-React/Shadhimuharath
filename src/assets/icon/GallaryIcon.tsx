import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

type Props = {
  onPress?: () => void;
  width?: number;
  height?: number;
};

const GallaryIcon = ({onPress, height = 54, width = 55}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 55 54"
      fill="none"
      onPress={onPress}>
      <Rect
        x="0.9"
        y="0.4"
        width="53.2"
        height="53.2"
        rx="9.6"
        stroke="#620B00"
        strokeWidth="0.8"
      />
      <Path
        d="M18.5 25C19.2956 25 20.0587 24.6839 20.6213 24.1213C21.1839 23.5587 21.5 22.7956 21.5 22C21.5 21.2044 21.1839 20.4413 20.6213 19.8787C20.0587 19.3161 19.2956 19 18.5 19C17.7044 19 16.9413 19.3161 16.3787 19.8787C15.8161 20.4413 15.5 21.2044 15.5 22C15.5 22.7956 15.8161 23.5587 16.3787 24.1213C16.9413 24.6839 17.7044 25 18.5 25ZM17.5 31L21.5 27L25.5 31L33.5 23L39.5 29V35H17.5V31Z"
        fill="#620B00"
      />
    </Svg>
  );
};

export default GallaryIcon;
