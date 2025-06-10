import React from 'react';
import {Pressable, PressableProps, StyleSheet, Text, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {theme} from '../constant';

type Props = PressableProps & {
  title: string;
  color: string;
};

const BlurButton = ({title, color, ...props}: Props) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="white"
      />
      <Pressable style={styles.button} {...props}>
        <Text style={[styles.text, {color}]}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default BlurButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.radius.xs,
    overflow: 'hidden',
    // marginHorizontal: theme.spacing.xl,
  },
  button: {
    paddingVertical: theme.spacing.md,
    alignItems: 'center',
  },
  text: {
    fontSize: theme.text.fontSize.base,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
