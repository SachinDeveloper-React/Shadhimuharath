import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Platform,
  TextStyle,
  ViewProps,
  useColorScheme,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ArrowDownIcon} from '../assets';
import {theme} from '../constant';

type Props = ViewProps & {
  label?: string;
  selectedValue: string;
  placeholder: string;
  onValueChange: (val: string) => void;
  options: string[];
  labelStyle?: TextStyle;
  textStyle?: TextStyle;
  borderColor?: 'primary' | 'inactive';
};

const DropdownPicker = ({
  label,
  selectedValue,
  onValueChange,
  options,
  placeholder,
  labelStyle,
  textStyle,
  borderColor = 'inactive',
  ...props
}: Props) => {
  const darkTheme = useColorScheme();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View {...props}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      {Platform.OS === 'ios' && (
        <TouchableOpacity
          style={[
            styles.dropdown,
            {
              borderColor:
                borderColor === 'inactive'
                  ? theme.colors.inactive
                  : theme.colors.primary,
            },
          ]}
          onPress={() => setModalVisible(true)}>
          <Text style={[styles.valueText, textStyle]}>
            {selectedValue || placeholder}
          </Text>
          <ArrowDownIcon />
        </TouchableOpacity>
      )}

      {Platform.OS === 'ios' ? (
        <Modal visible={modalVisible} transparent animationType="slide">
          <TouchableOpacity
            style={styles.modalOverlay}
            onPress={() => setModalVisible(false)}
            activeOpacity={1}>
            <View
              style={[
                styles.modalContent,
                {
                  backgroundColor:
                    darkTheme === 'dark'
                      ? theme.colors.textSecondary
                      : theme.colors.background,
                },
              ]}>
              <Picker
                selectedValue={selectedValue}
                onValueChange={val => {
                  onValueChange(val);
                  setModalVisible(false);
                }}>
                {options.map(option => (
                  <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
          </TouchableOpacity>
        </Modal>
      ) : (
        <View style={styles.androidPickerWrapper}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            mode="dropdown"
            style={styles.androidPicker}>
            {options.map(option => (
              <Picker.Item key={option} label={option} value={option} />
            ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

export default DropdownPicker;

const styles = StyleSheet.create({
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.text.fontSize.xl,
    color: theme.colors.textPrimaryHeader,
    fontWeight: theme.text.fontWeight.medium,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: theme.colors.inactive,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  valueText: {
    fontSize: theme.text.fontSize.base,
    color: theme.colors.textSecondary,
  },
  androidPickerWrapper: {
    borderWidth: 1.5,
    borderColor: theme.colors.inactive,
    borderRadius: theme.radius.md,
    overflow: 'hidden',
  },
  androidPicker: {
    height: 50,
    width: '100%',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  modalContent: {
    padding: theme.spacing.lg,
    borderTopLeftRadius: theme.radius.lg,
    borderTopRightRadius: theme.radius.lg,
  },
});
