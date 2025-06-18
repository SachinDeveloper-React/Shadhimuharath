import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const InputMicIcon = ({onPress}: Props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}>
      <Path
        d="M18 11C18 14.3137 15.3137 17 12 17C8.68629 17 6 14.3137 6 11"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M9 6C9 4.34315 10.3431 3 12 3V3C13.6569 3 15 4.34315 15 6V11C15 12.6569 13.6569 14 12 14V14C10.3431 14 9 12.6569 9 11V6Z"
        stroke="#C1645C"
        strokeWidth="1.5"
      />
      <Path
        d="M12 17V21"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 21H14"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 6H15"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 9H15"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default InputMicIcon;
