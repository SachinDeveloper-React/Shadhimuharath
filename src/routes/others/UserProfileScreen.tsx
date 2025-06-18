import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  BackButton,
  MatchHeartIcon,
  MessageIcon,
  VideoCallIcon,
  VoiceCallIcon,
} from '../../assets';
import {goBack} from '../../services';
import {ProfileTabs} from '../../components';

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: 'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.imageBackground}
          resizeMode="cover">
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <BackButton onPress={goBack} />
              </TouchableOpacity>
              <Text style={styles.headerTitle}>Profile</Text>
            </View>
            <MatchHeartIcon onPress={goBack} />
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.iconRow}>
            <VoiceCallIcon width={64} height={64} />
            <MessageIcon />
            <VideoCallIcon width={64} height={64} />
          </View>

          <TouchableOpacity style={styles.verificationButton}>
            <Text style={styles.verificationText}>Send Verification</Text>
          </TouchableOpacity>

          <ProfileTabs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.4,
    justifyContent: 'flex-start',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 8,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  headerTitle: {
    fontSize: 16,
    lineHeight: 42,
    fontWeight: '700',
    color: '#fff',
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -64, // -128 / 2
    gap: 20,
  },
  verificationButton: {
    backgroundColor: '#E8E8E8',
    margin: 16,
    borderRadius: 8,
    marginTop: -10,
  },
  verificationText: {
    color: '#BBBBBB',
    textAlign: 'center',
    padding: 16,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});
