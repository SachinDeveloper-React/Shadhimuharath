import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
  CustomDropdownPicker,
} from '../../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations';
import {profileAnnualIncomeData, profileWorkDetailsData} from './helper';
import {theme} from '../../../constant';

type Props = NativeStackScreenProps<
  SetupProfileStackParamList,
  'Step9Profession'
>;

const Step9Profession = ({navigation}: Props) => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const isFormValid =
    profileAnnualIncomeData.every(item => formData[item.category]) &&
    profileWorkDetailsData[0].fields.every(field => formData[field.label]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={{flexDirection: 'column', gap: 20}}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={70}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          <View style={styles.formGroup}>
            {profileAnnualIncomeData.map(item => (
              <CustomDropdownPicker
                key={item.category}
                label={item.category}
                selectedValue={formData[item.category] || ''}
                onValueChange={val => handleValueChange(item.category, val)}
                options={item.options}
                placeholder={`Select your ${item.category.toLowerCase()}`}
              />
            ))}

            <Text style={styles.sectionTitle}>Work Details</Text>

            {profileWorkDetailsData[0].fields.map(field => (
              <CustomDropdownPicker
                key={field.label}
                selectedValue={formData[field.label] || ''}
                onValueChange={val => handleValueChange(field.label, val)}
                options={field.options}
                placeholder={`Select your ${field.label.toLowerCase()}`}
              />
            ))}
          </View>
        </View>
        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step10Photo')}
          // disabled={!isFormValid}
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

export default Step9Profession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingTop: theme.spacing.md,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: theme.spacing.md,

    justifyContent: 'space-between',
  },
  formGroup: {
    gap: theme.spacing.lg,
  },
  sectionTitle: {
    marginBottom: theme.spacing.xs,
    fontSize: theme.text.fontSize.xl,
    color: theme.colors.textPrimaryHeader,
    fontWeight: theme.text.fontWeight.medium,
  },
});
