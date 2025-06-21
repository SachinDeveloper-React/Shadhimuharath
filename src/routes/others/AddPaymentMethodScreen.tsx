import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  StatusBar,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {CustomButton} from '../../common';
import {RightIcon} from '../../assets';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from '../../services';

const FormScreen = () => {
  const {bottom} = useSafeAreaInsets();
  const [paymentMethod, setPaymentMethod] = useState('Master Card');
  const [cardHolder, setCardHolder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <KeyboardAwareScrollView
          style={styles.wrapper}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          enableOnAndroid={true}
          extraScrollHeight={Platform.OS === 'ios' ? 20 : 80}
          keyboardShouldPersistTaps="handled">
          <View style={{flex: 1}}>
            <Text style={styles.label}>Payment Method</Text>
            <View style={styles.input}>
              <RNPickerSelect
                onValueChange={value => setPaymentMethod(value)}
                value={paymentMethod}
                items={[
                  {label: 'Visa', value: 'Visa'},
                  {label: 'Master Card', value: 'Master Card'},
                  {label: 'Google Pay', value: 'Google Pay'},
                  {label: 'Apple Pay', value: 'Apple Pay'},
                ]}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                placeholder={{}}
                Icon={() => (
                  <View style={styles.dropdownIconWrapper}>
                    <RightIcon />
                  </View>
                )}
              />
            </View>

            <Text style={styles.label}>Card Holder Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Card Holder Name"
              placeholderTextColor="#999"
              value={cardHolder}
              onChangeText={setCardHolder}
            />

            <Text style={styles.label}>Card Number</Text>
            <TextInput
              style={styles.input}
              placeholder="1234 5678 9012 3456"
              placeholderTextColor="#999"
              keyboardType="numeric"
              value={cardNumber}
              onChangeText={setCardNumber}
            />

            <View style={styles.row}>
              <View style={styles.column}>
                <Text style={styles.labelSmall}>Expired Date</Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="MM/YYYY"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    style={styles.inputField}
                  />
                </View>
              </View>

              <View style={[styles.column, {marginLeft: 10}]}>
                <Text style={styles.labelSmall}>CVV</Text>
                <View style={styles.input}>
                  <TextInput
                    placeholder="123"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={cvv}
                    onChangeText={setCvv}
                    style={styles.inputField}
                    secureTextEntry
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>

        <CustomButton
          title="Save"
          onPress={() => navigate('PremiumConfirmation')}
          style={{
            paddingHorizontal: 16,
            paddingBottom:
              Platform.OS === 'ios' ? bottom : StatusBar?.currentHeight,
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
    paddingBottom: 60,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: '500',
    color: '#000',
  },
  labelSmall: {
    fontSize: 14,
    color: '#000',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#b00020',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 48,
    marginBottom: 16,
    justifyContent: 'center',
  },
  inputField: {
    fontSize: 16,
    color: '#600000',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 16,
  },
  column: {
    flex: 1,
  },
  halfInput: {
    width: '48%',
  },
  dropdownIcon: {
    // position: 'absolute',
    // right: 12,
    // top: 10,
    fontSize: 18,
    color: '#b00020',
  },
  saveButton: {
    // backgroundColor: 'linear-gradient(90deg, #f35, #d00)', // fallback for native gradient
    backgroundColor: '#e53935',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  dropdownIconWrapper: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    transform: [{rotate: '90deg'}],
  },
});

const pickerSelectStyles = {
  inputIOS: {
    fontSize: 16,
    color: '#600000',
    paddingVertical: 12,
  },
  inputAndroid: {
    fontSize: 16,
    color: '#600000',
    paddingVertical: 8,
  },
};
