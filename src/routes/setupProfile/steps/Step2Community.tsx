import React, {useMemo, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
  CustomDropdownPicker,
} from '../../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {getCommunityOptions, getSubCommunityOptions} from '../../../utils';
import {religionData} from './helper';
import CommunityNote from '../components/CommunityNote';

const Step2Community = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step2Community'>) => {
  const [selectedReligion, setSelectedReligion] = useState('Hindu');
  const [selectedCommunity, setSelectedCommunity] = useState('Brahmin');
  const [selectedSubCommunity, setSelectedSubCommunity] = useState('Gaur');
  const [communityNoBar, setCommunityNoBar] = useState(true);
  const communityOptions = useMemo(
    () => getCommunityOptions(religionData, selectedReligion),
    [selectedReligion],
  );

  const subCommunityOptions = useMemo(
    () =>
      getSubCommunityOptions(religionData, selectedReligion, selectedCommunity),
    [selectedReligion, selectedCommunity],
  );

  const isFormValid =
    !!selectedReligion && !!selectedCommunity && !!selectedSubCommunity;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formWrapper}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={10}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          <CustomDropdownPicker
            label="Your Religion"
            selectedValue={selectedReligion}
            onValueChange={val => {
              setSelectedReligion(val);
              setSelectedCommunity('');
              setSelectedSubCommunity('');
            }}
            options={religionData.map(r => r.name)}
            placeholder="Your Religion"
            accessibilityLabel="Select your religion"
            accessibilityHint="Opens dropdown to choose your religion"
          />

          <CustomDropdownPicker
            label="Community"
            selectedValue={selectedCommunity}
            onValueChange={val => {
              setSelectedCommunity(val);
              setSelectedSubCommunity('');
            }}
            options={communityOptions}
            placeholder="Your Community"
            accessibilityLabel="Select your community"
            accessibilityHint="Opens dropdown to choose your community"
          />

          <CustomDropdownPicker
            label="Sub-Community"
            selectedValue={selectedSubCommunity}
            onValueChange={setSelectedSubCommunity}
            options={subCommunityOptions}
            placeholder="Your Sub-Community"
            accessibilityLabel="Select your sub-community"
            accessibilityHint="Opens dropdown to choose your sub-community"
          />

          <CommunityNote
            selected={communityNoBar}
            onPress={() => setCommunityNoBar(prev => !prev)}
          />
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step3Location')}
          disabled={!isFormValid}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </View>
    </SafeAreaView>
  );
};

export default Step2Community;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: StatusBar.currentHeight,
  },
  formWrapper: {
    flexDirection: 'column',
    gap: 20,
  },
});
