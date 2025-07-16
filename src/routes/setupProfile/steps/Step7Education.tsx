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
import {educationData} from './helper';
import {theme} from '../../../constant';

const Step7Education = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step7Education'>) => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
      ...(key === 'Highest Qualification' ? {College: ''} : {}),
    }));
  };

  const selectedQualification = formData['Highest Qualification'];
  const selectedCollegeList =
    educationData.find(item => item.qualification === selectedQualification)
      ?.colleges ?? [];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formGroup}>
          <AuthHeader
            onPress={() => navigation.goBack()}
            right={
              <CustomCircularProgressBar
                progress={60}
                radius={30}
                strokeWidth={6}
              />
            }
          />

          <CustomDropdownPicker
            label="Highest Qualification"
            selectedValue={selectedQualification || ''}
            onValueChange={val =>
              handleValueChange('Highest Qualification', val)
            }
            options={educationData.map(item => item.qualification)}
            placeholder="Select your highest qualification"
          />

          <View>
            <Text style={styles.label}>Collage</Text>
            <TextInput placeholder="Collage" style={styles.input} />
          </View>
        </View>

        <CustomButton
          title="Continue"
          onPress={() => navigation.navigate('Step9Profession')}
          accessible
          accessibilityRole="button"
          accessibilityLabel="Continue button"
          accessibilityHint="Goes to the next step"
        />
      </View>
    </SafeAreaView>
  );
};

export default Step7Education;

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
