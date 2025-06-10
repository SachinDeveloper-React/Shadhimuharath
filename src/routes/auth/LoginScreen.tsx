import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigations';
import {LoginForm, LoginHeader, LoginLogo} from '../../components';
import {CustomKeyboardAvoidingView} from '../../common';

const LoginScreen = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList, 'Login'>) => {
  const [form, setForm] = useState({
    phoneNo: '',
  });
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <CustomKeyboardAvoidingView contentContainerStyle={styles.innerContainer}>
        <LoginHeader navigation={navigation} />
        <LoginLogo />
        <LoginForm
          phoneNumber={form.phoneNo}
          onChangePhoneNumber={text => setForm({...form, phoneNo: text})}
          onLoginPress={() => navigation.navigate('Signup')}
          onLoginHandle={() => navigation.navigate('Otp')}
        />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

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
