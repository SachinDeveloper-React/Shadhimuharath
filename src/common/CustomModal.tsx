import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CrossIcon, PlusIcon} from '../assets';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
  position?: 'center' | 'flex-end' | 'flex-start';
  modalStyle?: ViewStyle;
  modalContentStyle?: ViewStyle;
};

const CustomModal = ({
  isVisible,
  closeModal,
  children,
  position = 'flex-end',
  modalStyle,
  modalContentStyle,
}: Props) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      style={[
        styles.modalContainer,
        {
          justifyContent: position,
        },
        modalStyle,
      ]}
      swipeDirection="down"
      onSwipeComplete={closeModal}
      animationIn="slideInUp"
      animationOut="slideOutDown">
      <View
        style={[
          styles.modalContent,
          {
            paddingBottom: bottom,
          },
          modalContentStyle,
        ]}>
        <View style={styles.modalHandle} />
        {children}

        <TouchableOpacity
          onPress={closeModal}
          style={{position: 'absolute', zIndex: 99999, top: -20, right: 0}}>
          <CrossIcon />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalContainer: {
    position: 'relative',
    margin: 0,
  },
  modalContent: {
    position: 'relative',
    backgroundColor: '#fff',
    padding: 20,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
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
});
