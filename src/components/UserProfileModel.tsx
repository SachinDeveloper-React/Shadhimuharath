import React from 'react';
import {View, Text} from 'react-native';
import {CustomModal} from '../common';
const UserProfileModel = ({
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
      position="flex-end">
      <View style={{marginVertical: 20}}>
        <Text
          style={{
            fontSize: 24,
            letterSpacing: 2,
            fontWeight: 700,
            fontStyle: 'normal',
            color: '#380700',
          }}>
          You will get notification after being Profile Verified
        </Text>
      </View>
    </CustomModal>
  );
};

export default UserProfileModel;
