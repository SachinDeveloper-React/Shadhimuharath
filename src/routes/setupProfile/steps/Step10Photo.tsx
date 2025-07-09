import React, {useState} from 'react';
import {
  Alert,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
} from '../../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {CameraIcon, GallaryIcon} from '../../../assets';
import {theme} from '../../../constant';
import {authService} from '../../../services';
import {mediaPickerService} from '../../../utils/mediaPickerService';
import {Asset} from 'react-native-image-picker';

type Props = NativeStackScreenProps<SetupProfileStackParamList, 'Step10Photo'>;

const Step10Photo = ({navigation}: Props) => {
  const {top, bottom} = useSafeAreaInsets();
  const [profilePhoto, setProfilePhoto] = useState<Asset | null>(null);
  const handleCamera = async () => {
    try {
      const asset = await mediaPickerService.pickFromCamera();
      if (asset) setProfilePhoto(asset);
    } catch (err) {
      Alert.alert('Camera error', err as string);
    }
  };

  const handleGallery = async () => {
    try {
      const asset = await mediaPickerService.pickFromGallery();
      if (asset) setProfilePhoto(asset);
    } catch (err) {
      Alert.alert('Gallery error', err as string);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Image
            source={require('../../../assets/halfcurve.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />

          <View
            style={[
              styles.headerOverlay,
              {
                paddingVertical:
                  Platform.OS === 'ios' ? top : StatusBar.currentHeight,
              },
            ]}>
            <AuthHeader
              iconColor={theme.colors.white}
              onPress={() => navigation.goBack()}
              right={
                <CustomCircularProgressBar
                  progress={80}
                  radius={30}
                  strokeWidth={6}
                  backgroundColor="#ccc"
                  color="#fff"
                  textStyle={{
                    color: '#fff',
                  }}
                />
              }
            />
          </View>

          <View style={styles.photoPlaceholderBorder}>
            {/* <View style={styles.photoPlaceholder} /> */}
            {profilePhoto ? (
              <Image
                source={{uri: profilePhoto.uri}}
                style={styles.photoPlaceholder}
              />
            ) : (
              <View style={styles.photoPlaceholder} />
            )}
          </View>

          <View style={styles.textWrapper}>
            <View style={styles.headingWrapper}>
              <Text style={styles.heading}>Add photo</Text>
              <Text style={styles.heading}>to complete your profile</Text>
            </View>
            <Text style={styles.subtext}>
              Photo Privacy controls available in Setting
            </Text>
          </View>

          <View style={styles.iconRow}>
            <CameraIcon onPress={handleCamera} />
            {/* <GallaryIcon onPress={handleGallery} /> */}
          </View>
        </View>

        <CustomButton
          title="Continue"
          style={[
            styles.continueButton,
            {
              paddingBottom:
                Platform.OS === 'ios' ? bottom : StatusBar.currentHeight,
            },
          ]}
          onPress={() => navigation.navigate('Step11Gallery')}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </View>
    </View>
  );
};

export default Step10Photo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  headerImage: {
    width: theme.layout.screenWidth,
    height: 250,
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    paddingHorizontal: theme.spacing.md,
  },
  photoPlaceholderBorder: {
    marginTop: -theme.spacing.xxxl * 2,
    width: 162,
    height: 162,
    borderRadius: theme.radius.full,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.inactive,
  },
  photoPlaceholder: {
    width: 148,
    height: 148,
    borderRadius: theme.radius.full,
    backgroundColor: '#D9D9D9',
  },
  textWrapper: {
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    gap: theme.spacing.xs,
  },
  headingWrapper: {
    alignItems: 'center',
    gap: theme.spacing.xxs,
  },
  heading: {
    color: theme.colors.textPrimaryHeader,
    fontSize: theme.text.fontSize.lg,
    fontWeight: theme.text.fontWeight.regular,
    letterSpacing: 2,
  },
  subtext: {
    color: theme.colors.textSecondary,
    fontSize: theme.text.fontSize.xs,
    fontWeight: theme.text.fontWeight.regular,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.sm,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  continueButton: {
    paddingHorizontal: theme.spacing.md,
  },
});
