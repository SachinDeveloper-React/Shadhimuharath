import React, {Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {ActivityIndicator, View} from 'react-native';
import {OtpScreen, OtpVerificationScreen} from '../routes';

const OnboardingScreen = React.lazy(
  () => import('../routes/auth/OnboardingScreen'),
);
const WelcomeScreen = React.lazy(() => import('../routes/auth/WelcomeScreen'));
const LoginScreen = React.lazy(() => import('../routes/auth/LoginScreen'));
const SignupScreen = React.lazy(() => import('../routes/auth/SignupScreen'));

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const Loader = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <ActivityIndicator size="large" color="#F05A8E" />
  </View>
);

const AuthNavigator = () => {
  return (
    <Suspense fallback={<Loader />}>
      <AuthStack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <AuthStack.Screen name="OnBoarding" component={OnboardingScreen} />
        <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Signup" component={SignupScreen} />
        <AuthStack.Screen name="Otp" component={OtpScreen} />
        <AuthStack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />
      </AuthStack.Navigator>
    </Suspense>
  );
};

export default AuthNavigator;
