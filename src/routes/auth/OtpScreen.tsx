import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomKeyboardAvoidingView,
} from '../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations';
import {theme} from '../../constant';
import {OtpInput} from '../../components';
import {useOtpHandler} from '../../hooks/useOtpHandler';

const OtpScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Otp'>) => {
  const {handleOtpChange, handleResend, inputRefs, otp, timer} =
    useOtpHandler();

  console.log('Otp', otp);
  return (
    <SafeAreaView style={styles.container}>
      <CustomKeyboardAvoidingView contentContainerStyle={styles.innerContainer}>
        <View>
          <AuthHeader onPress={navigation.goBack} isTitle rightTitle="OTP" />

          <View style={styles.content}>
            <Text style={styles.heading}>Verify OTP</Text>
            <Text style={styles.subText}>
              Enter the OTP sent to +91 8700707668
            </Text>

            <OtpInput inputRefs={inputRefs} handleOtpChange={handleOtpChange} />

            <Pressable onPress={handleResend} disabled={timer > 0}>
              <Text style={styles.resendText}>
                Didn’t receive the OTP?{' '}
                <Text
                  style={[styles.resendLink, {opacity: timer > 0 ? 0.5 : 1}]}>
                  Resend OTP
                </Text>
              </Text>
            </Pressable>

            <Text style={styles.timerText}>
              🕒 00:{timer < 10 ? `0${timer}` : timer}
            </Text>
          </View>
        </View>

        <CustomButton
          title="Verify OTP"
          onPress={() => navigation.navigate('OtpVerification')}
          style={{
            paddingBottom: StatusBar.currentHeight,
          }}
        />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default OtpScreen;

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
  content: {
    gap: theme.spacing.md,
    alignItems: 'center',
    marginTop: 30,
  },
  heading: {
    fontSize: theme.text.fontSize.xxl,
    fontWeight: theme.text.fontWeight.bold,
    color: theme.colors.textPrimaryHeader,
    letterSpacing: 2,
  },
  subText: {
    fontSize: theme.text.fontSize.base,
    color: theme.colors.textSecondary,
    lineHeight: 23,
    fontWeight: theme.text.fontWeight.regular,
  },
  otpContainer: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    justifyContent: 'center',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.md,
    textAlign: 'center',
    fontSize: theme.text.fontSize.lg,
    color: theme.colors.textPrimary,
  },
  resendText: {
    fontSize: theme.text.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  resendLink: {
    color: theme.colors.primary,
    fontWeight: theme.text.fontWeight.semiBold,
  },
  timerText: {
    fontSize: theme.text.fontSize.sm,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.sm,
  },
});
