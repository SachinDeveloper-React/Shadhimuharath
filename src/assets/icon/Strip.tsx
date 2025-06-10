import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';

type Props = {
  width: number;
  height: number;
};

const Strip = ({height, width}: Props) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      fill="none"
      pointerEvents="none">
      <Path d="M0 0H66V370H0V0Z" fill="url(#paint0_linear_4350_185)" />
      <Path d="M0 0H66V370H0V0Z" fill="url(#paint1_linear_4350_185)" />
      <Path d="M66 0H132V370H66V0Z" fill="#D9D9D9" />
      <Path d="M66 0H132V370H66V0Z" fill="url(#paint2_linear_4350_185)" />
      <Path d="M66 0H132V370H66V0Z" fill="url(#paint3_linear_4350_185)" />
      <Path d="M132 0H198V370H132V0Z" fill="#D9D9D9" />
      <Path d="M132 0H198V370H132V0Z" fill="url(#paint4_linear_4350_185)" />
      <Path d="M132 0H198V370H132V0Z" fill="url(#paint5_linear_4350_185)" />
      <Path d="M198 0H264V370H198V0Z" fill="#D9D9D9" />
      <Path d="M198 0H264V370H198V0Z" fill="url(#paint6_linear_4350_185)" />
      <Path d="M198 0H264V370H198V0Z" fill="url(#paint7_linear_4350_185)" />
      <Path d="M264 0H330V370H264V0Z" fill="#D9D9D9" />
      <Path d="M264 0H330V370H264V0Z" fill="url(#paint8_linear_4350_185)" />
      <Path d="M264 0H330V370H264V0Z" fill="url(#paint9_linear_4350_185)" />
      <Path d="M330 0H375V370H330V0Z" fill="#D9D9D9" />
      <Path d="M330 0H375V370H330V0Z" fill="url(#paint10_linear_4350_185)" />
      <Path d="M330 0H375V370H330V0Z" fill="url(#paint11_linear_4350_185)" />
      <Path d="M0 0H375V370H0V0Z" fill="url(#paint12_linear_4350_185)" />
      <Defs>
        <LinearGradient
          id="paint0_linear_4350_185"
          x1="1.79904e-07"
          y1="185"
          x2="48.3265"
          y2="186.243"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_4350_185"
          x1="33"
          y1="177.5"
          x2="33"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint2_linear_4350_185"
          x1="66"
          y1="185"
          x2="114.326"
          y2="186.243"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint3_linear_4350_185"
          x1="99"
          y1="177.5"
          x2="99"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint4_linear_4350_185"
          x1="132"
          y1="185"
          x2="180.326"
          y2="186.243"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint5_linear_4350_185"
          x1="165"
          y1="177.5"
          x2="165"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint6_linear_4350_185"
          x1="198"
          y1="185"
          x2="246.326"
          y2="186.243"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint7_linear_4350_185"
          x1="231"
          y1="177.5"
          x2="231"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint8_linear_4350_185"
          x1="264"
          y1="185"
          x2="312.326"
          y2="186.243"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint9_linear_4350_185"
          x1="297"
          y1="177.5"
          x2="297"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint10_linear_4350_185"
          x1="330"
          y1="185"
          x2="362.962"
          y2="185.578"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
        <LinearGradient
          id="paint11_linear_4350_185"
          x1="352.5"
          y1="177.5"
          x2="352.5"
          y2="370"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" stopOpacity="0" />
          <Stop offset="1" stopColor="white" />
        </LinearGradient>
        <LinearGradient
          id="paint12_linear_4350_185"
          x1="187.5"
          y1="370"
          x2="187.5"
          y2="72.15"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="white" />
          <Stop offset="1" stopColor="white" stopOpacity="0" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default Strip;

const styles = StyleSheet.create({});
