import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from './types';
import {
  DiscoverScreen,
  HomeScreen,
  InboxScreen,
  ProfileScreen,
} from '../routes';
import {
  ActiveDiscoverIcon,
  ActiveInboxIcon,
  ActiveProfileIcon,
  BarIcon,
  DeactiveDiscoverIcon,
  DeactiveHomeIcon,
  DeactiveInboxIcon,
  DeactiveProfileIcon,
  DiscoverIcon,
  HeartIcon,
  InboxIcon,
  NotificationIcon,
  ProfileIcon,
} from '../assets';
import {Alert, View} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import {theme} from '../constant';
import {ActiveHomeIcon} from '../assets';
import {navigate} from '../services';
type Props = {};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const MainNavigator = (props: Props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: true,
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({color, size, focused}) => {
          if (route.name === 'Home')
            return focused ? <ActiveHomeIcon /> : <DeactiveHomeIcon />;
          if (route.name === 'Discover')
            return focused ? <ActiveDiscoverIcon /> : <DeactiveDiscoverIcon />;
          if (route.name === 'Inbox')
            return focused ? <ActiveInboxIcon /> : <DeactiveInboxIcon />;
          if (route.name === 'Profile')
            return focused ? <ActiveProfileIcon /> : <DeactiveProfileIcon />;
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.inactive,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation, route}) => ({
          headerTitle: () => {
            return (
              <BarIcon
                onPress={() =>
                  navigation?.dispatch(DrawerActions.toggleDrawer())
                }
              />
            );
          },
          tabBarLabel: 'Home',
          headerTitleAllowFontScaling: true,
          headerTitleAlign: 'left',
          headerRightContainerStyle: {
            marginHorizontal: 10,
          },
          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', gap: 10, marginRight: 15}}>
                <HeartIcon onPress={() => navigate('ShortList')} />
                <NotificationIcon onPress={() => navigate('Notification')} />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Discover',
          tabBarLabel: 'Discover',
          headerTitleAllowFontScaling: true,
          headerTitleAlign: 'left',

          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', gap: 10, marginRight: 15}}>
                <DiscoverIcon />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Inbox"
        component={InboxScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Inbox',
          tabBarLabel: 'Inbox',
          headerTitleAllowFontScaling: true,
          headerTitleAlign: 'left',

          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', gap: 10, marginRight: 15}}>
                <InboxIcon />
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation, route}) => ({
          headerTitle: 'Profile',
          tabBarLabel: 'Profile',
          headerTitleAllowFontScaling: true,
          headerTitleAlign: 'left',

          headerRight: () => {
            return (
              <View style={{flexDirection: 'row', gap: 10, marginRight: 15}}>
                <ProfileIcon />
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
