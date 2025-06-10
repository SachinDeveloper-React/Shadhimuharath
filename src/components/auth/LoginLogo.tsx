import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Logo2Icon} from '../../assets';
import {theme} from '../../constant';

const LoginLogo = () => (
  <View style={styles.logoContainer}>
    <Logo2Icon />
  </View>
);

export default LoginLogo;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginVertical: theme.spacing.lg,
  },
});
