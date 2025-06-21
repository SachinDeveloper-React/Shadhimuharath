import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomDropdownPicker, CustomButton} from '../../../common';
import {theme} from '../../../constant';
import {navigate} from '../../../services';

const countryOptions = ['India', 'USA', 'UK'];
const stateOptionsByCountry: {[key: string]: string[]} = {
  India: ['Maharashtra', 'Delhi', 'Karnataka'],
  USA: ['California', 'New York', 'Texas'],
  UK: ['England', 'Scotland', 'Wales'],
};
const cityOptionsByState: {[key: string]: string[]} = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
  California: ['Los Angeles', 'San Francisco', 'San Diego'],
  NewYork: ['New York City', 'Buffalo', 'Albany'],
  Texas: ['Houston', 'Austin', 'Dallas'],
  England: ['London', 'Manchester', 'Birmingham'],
  Scotland: ['Edinburgh', 'Glasgow', 'Aberdeen'],
  Wales: ['Cardiff', 'Swansea', 'Newport'],
};

const Preferences3Form = () => {
  const {bottom} = useSafeAreaInsets();
  const [formData, setFormData] = useState<{[key: string]: string}>({});

  const handleValueChange = (key: string, value: string) => {
    let updatedForm = {
      ...formData,
      [key]: value,
    };

    if (key === 'Country') {
      updatedForm = {...updatedForm, State: '', City: ''};
    } else if (key === 'State') {
      updatedForm = {...updatedForm, City: ''};
    }

    setFormData(updatedForm);
  };

  const selectedCountry = formData['Country'];
  const selectedState = formData['State'];
  const stateOptions = stateOptionsByCountry[selectedCountry] || [];
  const cityOptions = cityOptionsByState[selectedState] || [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.flex}>
            <ScrollView
              contentContainerStyle={styles.container}
              keyboardShouldPersistTaps="handled">
              <CustomDropdownPicker
                label="Country"
                selectedValue={formData['Country'] || ''}
                onValueChange={val => handleValueChange('Country', val)}
                options={countryOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />

              <CustomDropdownPicker
                label="State"
                selectedValue={formData['State'] || ''}
                onValueChange={val => handleValueChange('State', val)}
                options={stateOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />

              <CustomDropdownPicker
                label="City"
                selectedValue={formData['City'] || ''}
                onValueChange={val => handleValueChange('City', val)}
                options={cityOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />
            </ScrollView>

            <View
              style={[
                styles.buttonContainer,
                {
                  paddingBottom:
                    Platform.OS === 'ios' ? 0 : StatusBar?.currentHeight,
                },
              ]}>
              <CustomButton title="Done" onPress={() => navigate('Drawer')} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Preferences3Form;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  flex: {
    flex: 1,
  },
  container: {
    padding: theme.spacing.md,
    gap: 18,
  },
  label: {
    fontSize: 26,
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
});
