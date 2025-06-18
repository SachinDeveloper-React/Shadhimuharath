import React from 'react';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {navigationRef} from '../services';
import {StatusBar} from 'react-native';

type Props = {};

const AppNavigationContainer = (props: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle="dark-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
