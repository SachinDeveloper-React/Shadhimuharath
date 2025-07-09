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
import {profileOptionsData} from './helper'; // <-- Import your data
import {theme} from '../../../constant';

const Step2Community = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step6Lifestyle'>) => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});

  const handleValueChange = (category: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [category]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formGroup}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={50}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          {profileOptionsData.map(({category, options}) => (
            <CustomDropdownPicker
              key={category}
              label={category}
              selectedValue={formData[category] || ''}
              onValueChange={val => handleValueChange(category, val)}
              options={options}
              placeholder={`Select your ${category.toLowerCase()}`}
            />
          ))}
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step7Education')}
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
    justifyContent: 'space-between',
    paddingVertical: StatusBar.currentHeight,
  },
  formGroup: {
    gap: 20,
  },
});
