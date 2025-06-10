import React from 'react';
import {View, Text, StyleSheet, ViewProps, TextStyle} from 'react-native';
import Svg, {Circle} from 'react-native-svg';

type Props = ViewProps & {
  radius?: number;
  strokeWidth?: number;
  progress: number;
  color?: string;
  backgroundColor?: string;
  textStyle?: TextStyle;
};

const CircularProgressBar = ({
  radius = 50,
  strokeWidth = 10,
  progress,
  color = '#f44158',
  backgroundColor = '#e0e0e0',
  textStyle,
  ...props
}: Props) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (circumference * progress) / 100;

  return (
    <View style={styles.container} {...props}>
      <Svg height={radius * 2} width={radius * 2}>
        <Circle
          stroke={backgroundColor}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke={color}
          fill="none"
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          originX={radius}
          originY={radius}
        />
      </Svg>
      <Text style={[styles.progressText, textStyle]}>{`${Math.round(
        progress,
      )}%`}</Text>
    </View>
  );
};

export default CircularProgressBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  progressText: {
    position: 'absolute',
    fontWeight: 'bold',
    color: '#333',
  },
});
