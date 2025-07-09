import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from './types';
import {
  Step1ProfileScreen,
  Step2CommunityScreen,
  Step3LocationScreen,
  Step4BasicInfoScreen,
  Step5EmailScreen,
  Step6LifestyleScreen,
  Step7EducationScreen,
  Step8CollegeScreen,
  Step9ProfessionScreen,
  Step10PhotoScreen,
  Step11GalleryScreen,
} from '../routes';

type Props = {};

const Stack = createNativeStackNavigator<SetupProfileStackParamList>();

const SetupProfileNavigator = (props: Props) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Step1Profile" component={Step1ProfileScreen} />
      <Stack.Screen name="Step2Community" component={Step2CommunityScreen} />
      <Stack.Screen name="Step3Location" component={Step3LocationScreen} />
      <Stack.Screen name="Step4BasicInfo" component={Step4BasicInfoScreen} />
      <Stack.Screen name="Step5Email" component={Step5EmailScreen} />
      <Stack.Screen name="Step6Lifestyle" component={Step6LifestyleScreen} />
      <Stack.Screen name="Step7Education" component={Step7EducationScreen} />
      <Stack.Screen name="Step8College" component={Step8CollegeScreen} />
      <Stack.Screen name="Step9Profession" component={Step9ProfessionScreen} />
      <Stack.Screen name="Step10Photo" component={Step10PhotoScreen} />
      <Stack.Screen name="Step11Gallery" component={Step11GalleryScreen} />
    </Stack.Navigator>
  );
};

export default SetupProfileNavigator;
