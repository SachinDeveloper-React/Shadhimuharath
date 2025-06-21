import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import AuthNavigator from './AuthNavigator';
import SetupProfileNavigator from './SetupProfileNavigator';
import {useAuthStore} from '../store';
import DrawerNavigator from './DrawerNavigator';
import {
  AddPaymentMethodScreen,
  ChatScreen,
  FaqScreen,
  NotificationScreen,
  PaymentMethodScreen,
  PersonalInfoScreen,
  Preferences2Form,
  Preferences3Form,
  PreferencesForm,
  PremiumConfirmationScreen,
  ProfessionalInfo,
  ProfileInfoForm,
  ReligionInfoForm,
  SettingScreen,
  ShortListScreen,
  SubscriptionScreen,
  UserProfileScreen,
  UserReviewScreen,
} from '../routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const {isAuthenticated, isProfileComlete, skip} = useAuthStore();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : !isProfileComlete && !skip ? (
        <RootStack.Screen
          name="SetupProfile"
          component={SetupProfileNavigator}
        />
      ) : (
        <>
          <RootStack.Screen name="Drawer" component={DrawerNavigator} />
          <RootStack.Screen name="Chat" component={ChatScreen} />
          <RootStack.Screen name="UserProfile" component={UserProfileScreen} />
          <RootStack.Screen
            name="PersonalInfo"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Favourite',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={PersonalInfoScreen}
          />
          <RootStack.Screen
            name="UserReview"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'User Reviews',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={UserReviewScreen}
          />
          <RootStack.Screen
            name="Notification"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Notification',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={NotificationScreen}
          />
          <RootStack.Screen
            name="ShortList"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Shortlist',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={ShortListScreen}
          />
          <RootStack.Screen
            name="PaymentMethod"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Payment Setting',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={PaymentMethodScreen}
          />
          <RootStack.Screen
            name="AddPaymentMethod"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Add Payment Method',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={AddPaymentMethodScreen}
          />
          <RootStack.Screen
            name="PremiumConfirmation"
            options={{
              headerShown: false,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: '',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
              headerShadowVisible: false,
              headerBackVisible: false,
            }}
            component={PremiumConfirmationScreen}
          />
          <RootStack.Screen
            name="Subscription"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Subscription',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={SubscriptionScreen}
          />
          <RootStack.Screen
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'FAQ',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            name="Faq"
            component={FaqScreen}
          />
          <RootStack.Screen
            name="Setting"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Setting',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={SettingScreen}
          />
          <RootStack.Screen
            name="ProfileInfo"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Personal Info',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={ProfileInfoForm}
          />
          <RootStack.Screen
            name="ReligionInfo"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Religion Info',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={ReligionInfoForm}
          />
          <RootStack.Screen
            name="Preferences"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Preferences',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={PreferencesForm}
          />
          <RootStack.Screen
            name="Preferences2"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Preferences',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={Preferences2Form}
          />
          <RootStack.Screen
            name="Preferences3"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Preferences',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={Preferences3Form}
          />
          <RootStack.Screen
            name="ProfessionalInfo"
            options={{
              headerShown: true,
              headerBackButtonDisplayMode: 'minimal',
              headerTitle: 'Professional Info',
              headerTitleAlign: 'left',
              headerTintColor: '#4F1617',
            }}
            component={ProfessionalInfo}
          />
        </>
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
