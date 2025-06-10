import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
import {theme} from '../../../constant';

const Step2Community = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step2Community'>) => {
  const [selectedReligion, setSelectedReligion] = useState('Hindu');
  const [selectedCommunity, setSelectedCommunity] = useState('Brahmin');
  const [selectedSubCommunity, setSelectedSubCommunity] = useState('Gaur');

  const communityOptions = getCommunityOptions(religionData, selectedReligion);
  const subCommunityOptions = getSubCommunityOptions(
    religionData,
    selectedReligion,
    selectedCommunity,
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
            gap: 20,
          }}>
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
          />

          <CustomDropdownPicker
            label="Sub-Community"
            selectedValue={selectedSubCommunity}
            onValueChange={setSelectedSubCommunity}
            options={subCommunityOptions}
            placeholder="Your Sub-Community"
          />
          <CommunityNote />
        </View>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step3Location')}
          style={{paddingVertical: theme.spacing.md}}
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
    paddingTop: theme.spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
    color: '#5a0c0c',
  },
});
