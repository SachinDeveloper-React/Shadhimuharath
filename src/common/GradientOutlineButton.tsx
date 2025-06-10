import React from 'react';
import {
  Text,
  Pressable,
  StyleSheet,
  StyleProp,
  ViewStyle,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {theme} from '../constant';

type Props = {
  title: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
};

const GradientOutlineButton = ({title, onPress, containerStyle}: Props) => {
  return (
    <Pressable onPress={onPress} style={[styles.pressable, containerStyle]}>
      <View style={styles.transparentBackground}>
        <MaskedView
          maskElement={
            <Text style={[styles.buttonText, {backgroundColor: 'transparent'}]}>
              {title}
            </Text>
          }>
          <LinearGradient
            colors={theme.colors.gradient}
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}>
            <Text style={[styles.buttonText, {opacity: 0}]}>{title}</Text>
          </LinearGradient>
        </MaskedView>
      </View>
    </Pressable>
  );
};

export default GradientOutlineButton;

const styles = StyleSheet.create({
  pressable: {
    borderRadius: theme.radius.full,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  transparentBackground: {
    backgroundColor: theme.colors.transparent,
    borderRadius: theme.radius.full,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: theme.text.fontSize.base,
    fontWeight: theme.text.fontWeight.light,
    textAlign: 'center',
  },
});
