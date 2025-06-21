// services/mediaPickerService.ts

import {Alert, Platform} from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
  ImageLibraryOptions,
  CameraOptions,
  Asset,
} from 'react-native-image-picker';
import {
  check,
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

const getPermission = async (permission: string | any) => {
  const status = await check(permission);

  if (status === RESULTS.GRANTED) return true;

  if (status === RESULTS.DENIED) {
    const requestStatus = await request(permission);
    return requestStatus === RESULTS.GRANTED;
  }

  if (status === RESULTS.BLOCKED) {
    Alert.alert(
      'Permission Required',
      'Please enable permission in settings to proceed.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Open Settings', onPress: () => openSettings()},
      ],
    );
  }

  return false;
};

const getCameraPermission = () => {
  const permission =
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
  return getPermission(permission);
};

const getGalleryPermission = () => {
  const permission =
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

  return getPermission(permission);
};

const pickFromCamera = async (): Promise<Asset | null> => {
  const hasPermission = await getCameraPermission();
  if (!hasPermission) return null;

  return new Promise((resolve, reject) => {
    const options: CameraOptions = {
      mediaType: 'photo',
      quality: 0.8,
      saveToPhotos: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) return resolve(null);
      if (response.errorCode) return reject(response.errorMessage);
      return resolve(response.assets?.[0] || null);
    });
  });
};

const pickFromGallery = async (): Promise<Asset | null> => {
  const hasPermission = await getGalleryPermission();
  if (!hasPermission) return null;

  return new Promise((resolve, reject) => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) return resolve(null);
      if (response.errorCode) return reject(response.errorMessage);
      return resolve(response.assets?.[0] || null);
    });
  });
};

export const mediaPickerService = {
  pickFromCamera,
  pickFromGallery,
};
