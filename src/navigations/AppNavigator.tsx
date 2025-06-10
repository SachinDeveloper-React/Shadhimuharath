import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import AuthNavigator from './AuthNavigator';
import SetupProfileNavigator from './SetupProfileNavigator';
import MainNavigator from './MainNavigator';
import {authService} from '../services';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const isAuth = authService.isAuthenticated();
  const isProfileComplete = authService.isProfileComplete();
  const isSkipped = authService.isSkipped();

  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      {!isAuth ? (
        <RootStack.Screen name="Auth" component={AuthNavigator} />
      ) : !isProfileComplete && !isSkipped ? (
        <RootStack.Screen
          name="SetupProfile"
          component={SetupProfileNavigator}
        />
      ) : (
        <RootStack.Screen name="Main" component={MainNavigator} />
      )}
    </RootStack.Navigator>
  );
};

export default AppNavigator;
