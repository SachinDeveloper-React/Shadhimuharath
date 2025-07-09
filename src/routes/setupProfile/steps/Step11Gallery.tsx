import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import ImagePicker from 'react-native-image-crop-picker';

import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
} from '../../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {theme} from '../../../constant';
import {authService} from '../../../services';
import {CameraIcon, GallaryIcon} from '../../../assets';

type Props = NativeStackScreenProps<
  SetupProfileStackParamList,
  'Step11Gallery'
>;

const MAX_PHOTOS = 6;

const Step11Gallery = ({navigation}: Props) => {
  const [galleryImages, setGalleryImages] = useState<(string | null)[]>(
    Array(MAX_PHOTOS).fill(null),
  );
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedIndex(null);
  };

  const pickFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
      });
      if (selectedIndex !== null) {
        const updatedImages = [...galleryImages];
        updatedImages[selectedIndex] = image.path;
        setGalleryImages(updatedImages);
      }
    } catch {}
    closeModal();
  };

  const pickFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo',
      });
      if (selectedIndex !== null) {
        const updatedImages = [...galleryImages];
        updatedImages[selectedIndex] = image.path;
        setGalleryImages(updatedImages);
      }
    } catch {}
    closeModal();
  };

  const renderItem = ({index}: {index: number}) => {
    const uri = galleryImages[index];

    return (
      <TouchableOpacity
        key={index}
        style={[styles.photoBox, uri ? styles.filledBox : styles.emptyBox]}
        onPress={() => openModal(index)}
        activeOpacity={0.8}>
        {uri ? (
          <Image source={{uri}} style={styles.imagePreview} />
        ) : (
          <View style={styles.addIconContainer}>
            <View style={styles.iconCircle}>
              <Icon name="plus" size={24} color="#D11A2A" />
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  const isFormValid = galleryImages.some(img => img !== null);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <AuthHeader
          onPress={() => navigation.goBack()}
          right={
            <CustomCircularProgressBar
              progress={90}
              radius={30}
              strokeWidth={6}
            />
          }
        />

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.headerText}>Upload Your Gallery Photos</Text>
          <Text style={styles.subText}>
            To Boost your Daily Match Potential, include your photos
          </Text>

          <FlatList
            data={galleryImages}
            keyExtractor={(_, index) => index.toString()}
            numColumns={2}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={styles.galleryList}
            columnWrapperStyle={styles.columnWrapper}
          />
        </ScrollView>

        <CustomButton
          title="Continue"
          onPress={() => authService.setProfileComplete(true)}
          style={{
            marginBottom: 16,
          }}
        />
      </View>

      {/* Bottom Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={closeModal}
        style={styles.modalContainer}
        swipeDirection="down"
        onSwipeComplete={closeModal}
        animationIn="slideInUp"
        animationOut="slideOutDown">
        <View style={styles.modalContent}>
          <View style={styles.modalHandle} />
          <View style={styles.iconRow}>
            <CameraIcon onPress={pickFromCamera} />
            <GallaryIcon onPress={pickFromGallery} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Step11Gallery;

const boxSize = Dimensions.get('window').width * 0.5 - 30;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,
    paddingTop: StatusBar.currentHeight,
    justifyContent: 'space-between',
  },
  scrollContent: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1,
    color: theme.colors.textPrimaryHeader,
    marginBottom: 10,
  },
  subText: {
    fontSize: 12,
    fontWeight: '500',
    color: theme.colors.inactive,
    textAlign: 'center',
    marginBottom: 20,
  },
  galleryList: {
    width: '100%',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 10,
  },
  photoBox: {
    width: boxSize,
    height: 225,
    borderRadius: 12,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyBox: {
    borderWidth: 1,
    borderStyle: 'dotted',
    borderColor: '#D11A2A',
  },
  filledBox: {
    borderWidth: 0,
  },
  imagePreview: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  addIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: '#FDEDEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  modalHandle: {
    width: 40,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 2.5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    gap: 10,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#000',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    gap: theme.spacing.sm,
    marginVertical: theme.spacing.lg,
  },
});
