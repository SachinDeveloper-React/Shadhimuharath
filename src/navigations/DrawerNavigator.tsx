import {View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerParamList} from './types';
import MainNavigator from './MainNavigator';
import {HeartIcon, NotificationIcon} from '../assets';
import CustomDrawer from './CustomDrawer';

type Props = {};

const DrawerStack = createDrawerNavigator<DrawerParamList>();
const DrawerNavigator = (props: Props) => {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <DrawerStack.Screen
        name="Main"
        options={() => ({
          headerTitle: '',
          headerRightContainerStyle: {
            marginHorizontal: 10,
          },
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', gap: 10, marginRight: 15}}>
                <HeartIcon />
                <NotificationIcon />
              </View>
            );
          },
        })}
        component={MainNavigator}
      />
    </DrawerStack.Navigator>
  );
};

export default DrawerNavigator;
