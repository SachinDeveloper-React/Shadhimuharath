import {StyleSheet, View} from 'react-native';
import React, {ReactNode} from 'react';
import Modal from 'react-native-modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  children: ReactNode;
};

const CustomModal = ({isVisible, closeModal, children}: Props) => {
  const {bottom} = useSafeAreaInsets();
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={closeModal}
      style={styles.modalContainer}
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
        ]}>
        <View style={styles.modalHandle} />
        {children}
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
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
});
