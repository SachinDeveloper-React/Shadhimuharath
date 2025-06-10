import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {Suspense} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, RootStackParamList} from './types';
import {HomeScreen} from '../routes';

type Props = {};

const AuthStack = createNativeStackNavigator<MainStackParamList>();
const MainNavigator = (props: Props) => {
  const Loader = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#F05A8E" />
    </View>
  );

  return (
    <Suspense fallback={<Loader />}>
      <AuthStack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <AuthStack.Screen name="Home" component={HomeScreen} />
      </AuthStack.Navigator>
    </Suspense>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
