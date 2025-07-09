import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {profileList, theme} from '../../constant';
import {authService, navigate} from '../../services';
import {CustomButton, CustomModal} from '../../common';
import {CustomOptionItem, ProfileCard} from '../../components';

const ProfileScreen = () => {
  const isLogin = true;
  const [deleteModal, setDeleteModal] = useState(false);

  const renderHeader = () => (
    <View>
      {isLogin ? (
        <ProfileCard
          pregressActive={false}
          source={require('../../assets/profile.png')}
        />
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
        } else if (item?.navigation === 'Delete') {
          setDeleteModal(true);
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
        <CustomModal
          isVisible={deleteModal}
          closeModal={() => setDeleteModal(!deleteModal)}>
          <View style={{gap: 20}}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#C1645C',
                fontWeight: '700',
              }}>
              Delete Account
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                color: '#D36366',
                fontWeight: '400',
              }}>
              Are you sure want to delete Account?
            </Text>
            <CustomButton title="Confirm" />
          </View>
        </CustomModal>
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
