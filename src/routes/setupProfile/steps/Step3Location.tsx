import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
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
      <View style={styles.content}>
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
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step4BasicInfo')}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </View>
    </SafeAreaView>
  );
};

export default Step2Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: StatusBar.currentHeight,
  },
  form: {
    flexDirection: 'column',
    gap: 20,
  },
});
