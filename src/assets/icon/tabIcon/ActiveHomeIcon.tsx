import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Defs, LinearGradient, Path, Rect, Stop} from 'react-native-svg';

type Props = {};

const ActiveHomeIcon = (props: Props) => {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Path
        d="M17.867 22.2489C19.477 22.2489 20.75 20.9139 20.75 19.3089V10.5069C20.7512 10.0695 20.6554 9.63729 20.4695 9.24132C20.2836 8.84536 20.0123 8.49551 19.675 8.21695L13.81 3.39995C13.301 2.97935 12.6613 2.74927 12.001 2.74927C11.3407 2.74927 10.701 2.97935 10.192 3.39995L4.32501 8.21795C3.98775 8.49651 3.71642 8.84635 3.53054 9.24232C3.34467 9.63829 3.24886 10.0705 3.25001 10.5079V19.3099C3.25001 20.9149 4.52301 22.2499 6.13301 22.2499L17.867 22.2489Z"
        fill="#D9D9D9"
      />
      <Path
        d="M17.867 22.2489C19.477 22.2489 20.75 20.9139 20.75 19.3089V10.5069C20.7512 10.0695 20.6554 9.63729 20.4695 9.24132C20.2836 8.84536 20.0123 8.49551 19.675 8.21695L13.81 3.39995C13.301 2.97935 12.6613 2.74927 12.001 2.74927C11.3407 2.74927 10.701 2.97935 10.192 3.39995L4.32501 8.21795C3.98775 8.49651 3.71642 8.84635 3.53054 9.24232C3.34467 9.63829 3.24886 10.0705 3.25001 10.5079V19.3099C3.25001 20.9149 4.52301 22.2499 6.13301 22.2499L17.867 22.2489Z"
        fill="url(#paint0_linear_2336_8169)"
      />
      <Rect x="11" y="13.5" width="2" height="5" rx="1" fill="white" />
      <Defs>
        <LinearGradient
          id="paint0_linear_2336_8169"
          x1="3.25"
          y1="12.4996"
          x2="15.8611"
          y2="14.1319"
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#F05A8E" />
          <Stop offset="1" stopColor="#ED1C24" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default ActiveHomeIcon;

const styles = StyleSheet.create({});
