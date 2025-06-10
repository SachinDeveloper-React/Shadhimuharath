import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Otp: undefined;
  OtpVerification: undefined;
};

export type BottomTabParamList = {};

export type MainStackParamList = {
  Home: undefined;
};
export type SetupProfileStackParamList = {
  SetupProfile: undefined;
  SetupPreferences: undefined;
  Step1Profile: undefined;
  Step2Community: undefined;
  Step3Location: undefined;
  Step4BasicInfo: undefined;
  Step5Email: undefined;
  Step6Lifestyle: undefined;
  Step7Education: undefined;
  Step8College: undefined;
  Step9Profession: undefined;
  Step10Photo: undefined;
};
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Bottom: NavigatorScreenParams<BottomTabParamList>;
  Main: NavigatorScreenParams<MainStackParamList>;
  SetupProfile: NavigatorScreenParams<SetupProfileStackParamList>;
};
