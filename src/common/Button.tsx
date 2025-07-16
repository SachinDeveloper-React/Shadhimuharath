import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import {theme} from '../constant';

type Props = PressableProps & {
  title: string;
  linearButtonStyle?: ViewStyle;
};

const Button = ({title, linearButtonStyle, ...props}: Props) => {
  return (
    <Pressable {...props}>
      <LinearGradient
        colors={['#F05A8E', '#ED1C24']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        style={[styles.linearGradient, linearButtonStyle]}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: theme.radius.xs,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    padding: theme.spacing.md,
    color: theme.colors.white,
    backgroundColor: theme.colors.transparent,
  },
});
