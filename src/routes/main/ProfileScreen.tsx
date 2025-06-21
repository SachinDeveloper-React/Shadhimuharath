import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {profileList, theme} from '../../constant';
import {authService, navigate} from '../../services';
import {CustomButton} from '../../common';
import {CustomOptionItem} from '../../components';

const ProfileScreen = () => {
  const isLogin = true;

  const renderHeader = () => (
    <View>
      {isLogin ? (
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3087',
            }}
            resizeMode="cover"
            style={styles.avatar}
          />
          <View style={{flexDirection: 'column', gap: 4}}>
            <Text style={styles.whiteText}>Samantha John</Text>
            <View>
              <Text style={styles.addressText}>
                H-70, Sector 63, Noida, U.P
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.logoutprofileCard}>
          <Text style={styles.whiteText}>You are not sign in!</Text>
          <CustomButton
            title="Sign in"
            onPress={() =>
              navigate('Auth', {
                screen: 'Login',
              })
            }
            style={{
              borderColor: '#fff',
              paddingVertical: 10,
            }}
          />
        </View>
      )}
    </View>
  );

  const renderSubItem = ({item}: any) => (
    <CustomOptionItem
      title={item.title}
      leftIcon={<item.leftIcon />}
      rightIcon={<item.rightIcon />}
      onPress={async () => {
        if (item?.navigation === 'Logout') {
          await authService.logout();
        } else {
          navigate(item?.navigation as any);
        }
      }}
    />
  );

  const renderSection = ({item}: any) => (
    <View style={styles.section}>
      <FlatList
        data={item.sublist}
        keyExtractor={subItem => subItem.id.toString()}
        renderItem={renderSubItem}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={profileList}
          renderItem={renderSection}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingVertical: 16}}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  profileCard: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  logoutprofileCard: {
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  whiteText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
  addressText: {
    fontSize: 10,
    fontWeight: '400',
    color: '#EACBC9',
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#FFF1F2',
    borderRadius: 12,
    paddingVertical: 8,
  },
});
