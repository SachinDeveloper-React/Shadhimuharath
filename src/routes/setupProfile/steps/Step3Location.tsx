import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
  CustomDropdownPicker,
} from '../../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {getCityOptions, getStateOptions} from '../../../utils';
import {countryData} from './helper';
import {theme} from '../../../constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Step2Location = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step3Location'>) => {
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [selectedCity, setSelectedCity] = useState('Mumbai');

  const stateOptions = getStateOptions(countryData, selectedCountry);
  const cityOptions = getCityOptions(
    countryData,
    selectedCountry,
    selectedState,
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid>
        <View style={styles.form}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={20}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          <CustomDropdownPicker
            label="Country"
            selectedValue={selectedCountry}
            onValueChange={val => {
              setSelectedCountry(val);
              setSelectedState('');
              setSelectedCity('');
            }}
            options={countryData.map(item => item.name)}
            placeholder="Select Country"
          />

          <CustomDropdownPicker
            label="State"
            selectedValue={selectedState}
            onValueChange={val => {
              setSelectedState(val);
              setSelectedCity('');
            }}
            options={stateOptions}
            placeholder="Select State"
          />

          <CustomDropdownPicker
            label="City"
            selectedValue={selectedCity}
            onValueChange={setSelectedCity}
            options={cityOptions}
            placeholder="Select City"
          />

          <CustomDropdownPicker
            label="District"
            selectedValue={selectedCity}
            onValueChange={setSelectedCity}
            options={cityOptions}
            placeholder="Select District"
          />

          <View>
            <Text style={styles.label}>Block</Text>
            <TextInput placeholder="Block" style={styles.input} />
          </View>
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step4BasicInfo')}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default Step2Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: StatusBar.currentHeight,
  },
  form: {
    flexDirection: 'column',
    gap: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.inactive,
    borderRadius: theme.radius.md,
    padding: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.text.fontSize.xl,
    color: theme.colors.textPrimaryHeader,
    fontWeight: theme.text.fontWeight.medium,
  },
});
