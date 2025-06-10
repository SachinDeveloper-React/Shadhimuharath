import React, {useState} from 'react';
import {
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
  CustomKeyboardAvoidingView,
} from '../../../common';
import {theme} from '../../../constant';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {ArrowDownIcon} from '../../../assets';

const Step4BasicInfo = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step4BasicInfo'>) => {
  const defaultStyles = useDefaultStyles();
  const [fullName, setFullName] = useState('');
  const [selectedDOB, setSelectedDOB] = useState<DateType>();
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const formattedDOB = selectedDOB
    ? dayjs(selectedDOB).format('DD MMM YYYY')
    : '';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <CustomKeyboardAvoidingView contentContainerStyle={styles.innerContainer}>
        <View style={styles.mainContainer}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={30}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />

          <Text style={styles.label}>Date of Birth</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setIsDatePickerVisible(true)}
            activeOpacity={0.7}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: formattedDOB ? '#000' : '#999'}}>
                {formattedDOB || 'DD/MM/YYYY'}
              </Text>
              <ArrowDownIcon />
            </View>
          </TouchableOpacity>

          <Modal
            visible={isDatePickerVisible}
            transparent
            animationType="slide">
            <View style={styles.modalOverlay}>
              <View style={styles.modalContent}>
                <DateTimePicker
                  mode="single"
                  date={selectedDOB}
                  onChange={({date}) => {
                    setSelectedDOB(date);
                    setIsDatePickerVisible(false);
                  }}
                  styles={defaultStyles}
                />
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsDatePickerVisible(false)}>
                  <Text style={styles.closeButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step5Email')}
          style={{paddingVertical: theme.spacing.md}}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </CustomKeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Step4BasicInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: theme.spacing.md,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.xl,
  },
  label: {
    marginTop: 20,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#00000099',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  closeButton: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
