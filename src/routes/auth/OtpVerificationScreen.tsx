import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CustomButton} from '../../common';
import {theme} from '../../constant';
import {authService} from '../../services';
import LottieView from 'lottie-react-native';

type Props = {};

const OtpVerificationScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View />
        <View>
          <LottieView
            source={require('../../assets/animations/completeRegistation.json')}
            autoPlay
            loop
            style={{
              width: Dimensions.get('screen').width * 0.6,
              height: Dimensions.get('screen').height * 0.3,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: 2,
              textAlign: 'center',
            }}>
            Verification Successful
          </Text>
        </View>
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
    paddingVertical: StatusBar.currentHeight,
  },
});
