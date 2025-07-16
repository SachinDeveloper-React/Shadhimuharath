import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Logo2 from '../assets/icon/Logo2';
import {CloseIcon} from '../assets';

const CustomDrawer = (props: any) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View style={styles.header}>
        <Image
          source={{uri: 'https://i.pravatar.cc/100'}}
          style={styles.avatar}
        />

        <CloseIcon onPress={() => props.navigation.closeDrawer()} />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Main')}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('Main', {screen: 'Discover'})
          }>
          <Text style={styles.menuText}>Discover</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => props.navigation.navigate('Main', {screen: 'Inbox'})}>
          <Text style={styles.menuText}>Inbox</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('Main', {screen: 'Profile'})
          }>
          <Text style={styles.menuText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('Main', {screen: 'Profile'})
          }>
          <Text style={styles.menuText}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('Main', {screen: 'Profile'})
          }>
          <Text style={styles.menuText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            props.navigation.navigate('Main', {screen: 'Profile'})
          }>
          <Text style={styles.menuText}>Support</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Logo2 />
        <Text style={styles.version}>App version 1.0.0.1</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 32,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuContainer: {
    padding: 16,
    gap: 16,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#70302B',
  },
  footer: {
    marginTop: 'auto',
    gap: 10,
    padding: 16,
    alignSelf: 'center',
    alignItems: 'center',
  },
  version: {
    color: '#D36366',
    fontSize: 10,
    lineHeight: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default CustomDrawer;
