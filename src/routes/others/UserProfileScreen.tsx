import React, {useState} from 'react';
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
  FillBookMarkIcon,
  FillLikeIcon,
  MessageIcon,
  OutlineBookMarkIcon,
  OutlineLikeIcon,
  PremiumIcon,
  ThreeDotMenuIcon,
} from '../../assets';
import {goBack} from '../../services';
import {ProfileTabs, UserProfileModel} from '../../components';
import {AnimatedReportMenu, CustomGradientOutlineButton} from '../../common';
import {theme} from '../../constant';

const UserProfileScreen = () => {
  const navigation = useNavigation();
  const [sendIntrest, setSendIntrest] = useState(false);
  const [like, setLike] = useState(false);
  const [bookmark, setbookMark] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const closeModal = () => {
    setIsModalVisible(false);
  };

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
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
              {/* <MatchHeartIcon onPress={goBack} /> */}
              {sendIntrest ? (
                <TouchableOpacity
                  style={styles.intrestButton}
                  onPress={() => setSendIntrest(!sendIntrest)}>
                  <Text style={styles.intrestText}>Interst Sent</Text>
                </TouchableOpacity>
              ) : (
                <CustomGradientOutlineButton
                  title="Send Interest"
                  onPress={() => setSendIntrest(!sendIntrest)}
                  containerStyle={{
                    borderRadius: 10,
                  }}
                />
              )}
              <PremiumIcon />
              {/* <View style={{position: 'relative', backgroundColor: 'red'}}>
                <ThreeDotMenuIcon />
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,

                    backgroundColor: '#fff',
                  }}>
                  <Text>Report</Text>
                </TouchableOpacity>
              </View> */}

              <AnimatedReportMenu />
            </View>
          </View>
        </ImageBackground>

        <View style={styles.contentContainer}>
          <View style={styles.iconRow}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setLike(!like)}
              style={{
                backgroundColor: '#fff',
                width: 64,
                height: 64,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 64 / 2,
              }}>
              {like ? <FillLikeIcon /> : <OutlineLikeIcon />}
            </TouchableOpacity>

            <MessageIcon />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setbookMark(!bookmark)}
              style={{
                backgroundColor: '#fff',
                width: 64,
                height: 64,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 64 / 2,
              }}>
              {bookmark ? <FillBookMarkIcon /> : <OutlineBookMarkIcon />}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.verificationButton}>
            <Text style={styles.verificationText}>Send Verification</Text>
          </TouchableOpacity>

          <ProfileTabs />
          <UserProfileModel
            isModalVisible={isModalVisible}
            closeModal={closeModal}
          />
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
    paddingRight: 8,
    borderRadius: 20,
    alignSelf: 'center',
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
    // gap: 20,
  },
  verificationButton: {
    backgroundColor: '#E8E8E8',
    margin: 16,
    borderRadius: 8,
    marginTop: -10,
  },
  intrestButton: {
    backgroundColor: theme.colors.transparent,
    borderRadius: theme.radius.sm,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.white,
  },
  intrestText: {
    fontSize: theme.text.fontSize.base,
    fontWeight: theme.text.fontWeight.light,
    textAlign: 'center',
    color: theme.colors.white,
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
