import {NavigatorScreenParams} from '@react-navigation/native';

export type AuthStackParamList = {
  OnBoarding: undefined;
  Welcome: undefined;
  Login: undefined;
  Signup: undefined;
  Otp: undefined;
  OtpVerification: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Discover: undefined;
  Inbox: undefined;
  Profile: undefined;
};
export type DrawerParamList = {
  Main: NavigatorScreenParams<BottomTabParamList>;
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
  Drawer: NavigatorScreenParams<DrawerParamList>;
  SetupProfile: NavigatorScreenParams<SetupProfileStackParamList>;
  Chat: undefined;
  UserProfile: undefined;
  UserReview: undefined;
  Notification: undefined;
  PaymentMethod: undefined;
  AddPaymentMethod: undefined;
  PremiumConfirmation: undefined;
  Subscription: undefined;
  Faq: undefined;
  Setting: undefined;
  PersonalInfo: undefined;
  ProfileInfo: undefined;
  ReligionInfo: undefined;
  Preferences: undefined;
  Preferences2: undefined;
  Preferences3: undefined;
  ProfessionalInfo: undefined;
};
