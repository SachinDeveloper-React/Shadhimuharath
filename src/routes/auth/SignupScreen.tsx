import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations';
import {
  AuthHeader,
  CustomButton,
  CustomKeyboardAvoidingView,
} from '../../common';
import {LoginLogo, SignupForm} from '../../components/auth';

const SignupScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Signup'>) => {
  const [form, setForm] = useState({
    fullName: '',
    phoneNo: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <CustomKeyboardAvoidingView contentContainerStyle={styles.innerContainer}>
        <AuthHeader
          onPress={() => navigation.goBack()}
          isTitle={true}
          rightTitle="Sign Up"
        />
        <LoginLogo />
        <SignupForm
          fullName={form.fullName}
          phoneNumber={form.phoneNo}
          onChangeFullName={text => setForm({...form, fullName: text})}
          onChangePhoneNumber={text => setForm({...form, phoneNo: text})}
          onLoginPress={() => navigation.navigate('Login')}
        />
        <CustomButton title="Sign Up" />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignupScreen;

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
