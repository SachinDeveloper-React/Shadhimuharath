import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

type Props = {
  onPress?: () => void;
};

const InputCameraIcon = ({onPress}: Props) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onPress={onPress}>
      <Path
        d="M9 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H15"
        stroke="#C1645C"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Circle cx="12" cy="13" r="3" stroke="#C1645C" strokeWidth="1.5" />
      <Path
        d="M15 7L14.3501 4.72528C14.2274 4.29598 13.835 4 13.3886 4H10.6114C10.165 4 9.77258 4.29598 9.64992 4.72528L9 7"
        stroke="#C1645C"
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default InputCameraIcon;
