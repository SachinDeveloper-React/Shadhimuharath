import React from 'react';
import {View, Text} from 'react-native';
import {
  CustomButton,
  CustomGradientOutlineButton,
  CustomModal,
} from '../common';
import {theme} from '../constant';
import Feather from 'react-native-vector-icons/Feather';
import {navigate} from '../services';
const SubscriptionModal = ({
  isModalVisible,
  closeModal,
}: {
  isModalVisible: boolean;
  closeModal: () => void;
}) => {
  const features = [
    'Custom Matches',
    'Compatibility Check',
    'Profile Privacy',
    'Intro Videos',
    'Member Events',
  ];

  return (
    <CustomModal
      isVisible={isModalVisible}
      closeModal={closeModal}
      position="center">
      <View style={{gap: 10}}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '700',
            letterSpacing: 2,
            color: theme.colors.textPrimaryHeader,
          }}>
          Find Your Perfect Match!
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            letterSpacing: 2,
            color: theme.colors.textPrimaryHeader,
            width: '90%',
          }}>
          Unlock Exclusive Features with our latest subscription - limited time
          offer!
        </Text>

        <View style={{gap: 16, marginVertical: 26}}>
          {features.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Feather name="check" size={12} color={theme.colors.primary} />
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  color: theme.colors.primary,
                }}>
                {item}
              </Text>
            </View>
          ))}
        </View>

        <CustomButton
          title="Explore Now"
          style={{
            borderRadius: 8,
          }}
          onPress={() => {
            navigate('Subscription');
            closeModal();
          }}
        />

        <CustomGradientOutlineButton
          title="Remind Me later"
          onPress={closeModal}
          containerStyle={{
            borderRadius: 8,
          }}
        />
      </View>
    </CustomModal>
  );
};

export default SubscriptionModal;
