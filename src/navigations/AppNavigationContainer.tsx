import React from 'react';
import {NavigationContainer, NavigationState} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import {navigationRef} from '../services';

type Props = {};

const AppNavigationContainer = (props: Props) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
