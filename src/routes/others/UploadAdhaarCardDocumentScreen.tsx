import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {CustomButton} from '../../common';
import {navigate} from '../../services';

interface UploadCardProps {
  label: string;
  imageUri?: string;
  onPress: () => void;
  error?: boolean;
}

const UploadCard = ({label, imageUri, onPress, error}: UploadCardProps) => {
  return (
    <View style={styles.cardWrapper}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={[
          styles.uploadBox,
          error && styles.errorBorder,
          imageUri && styles.uploadedBox,
        ]}
        onPress={onPress}
        activeOpacity={0.8}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.imagePreview} />
        ) : (
          <Icon name="cloud-upload-outline" size={40} color="#C0C0C0" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const AadharUploadScreen = () => {
  const [frontImage, setFrontImage] = useState<string | undefined>();
  const [backImage, setBackImage] = useState<string | undefined>();
  const [errorFront, setErrorFront] = useState(false);

  const pickImage = (onSelect: (uri: string) => void) => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.8,
      },
      response => {
        if (response.assets && response.assets.length > 0) {
          const uri = response.assets[0].uri;
          if (uri) {
            onSelect(uri);
          }
        }
      },
    );
  };

  const handleContinue = () => {
    if (!frontImage) {
      setErrorFront(true);
    } else {
      setErrorFront(false);

      console.log('Front:', frontImage);
      console.log('Back:', backImage);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <UploadCard
        label="Aadhar Front"
        imageUri={frontImage}
        onPress={() => pickImage(setFrontImage)}
        error={!frontImage && errorFront}
      />
      <UploadCard
        label="Aadhar Back"
        imageUri={backImage}
        onPress={() => pickImage(setBackImage)}
      />

      <CustomButton
        title="Continue"
        onPress={() => navigate('UploadMarksheetScreen')}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  cardWrapper: {
    marginBottom: 24,
  },
  label: {
    fontSize: 20,
    fontWeight: '600',
    color: '#700000',
    marginBottom: 10,
  },
  uploadBox: {
    height: 160,
    borderWidth: 1.5,
    borderColor: '#ddd',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  errorBorder: {
    borderColor: '#d60000',
  },
  uploadedBox: {
    borderColor: '#4BB543',
  },
  buttonWrapper: {
    marginTop: 40,
  },
  gradientButton: {
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 17,
  },
});

export default AadharUploadScreen;
