import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CustomButton} from '../../common';
import {theme} from '../../constant';
import {authService} from '../../services';

type Props = {};

const OtpVerificationScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View />
        <CustomButton
          title="Create Profile"
          onPress={() => authService.login()}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
  },
});
