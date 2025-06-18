import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {
  educationData,
  profileAnnualIncomeData,
} from '../../setupProfile/steps/helper';
import {CustomButton, CustomDropdownPicker} from '../../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../../services';

type Props = {};

const ProfessionalInfo = (props: Props) => {
  const {bottom} = useSafeAreaInsets();
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
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.select({ios: 'padding', android: undefined})}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.innerContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled">
            <View style={styles.row}>
              <View style={styles.half}>
                <CustomDropdownPicker
                  label="Highest Qualification"
                  selectedValue={selectedQualification || ''}
                  onValueChange={val =>
                    handleValueChange('Highest Qualification', val)
                  }
                  options={educationData.map(item => item.qualification)}
                  placeholder="Select"
                  labelStyle={styles.label}
                  textStyle={styles.text}
                />
              </View>
              <View style={styles.half}>
                <CustomDropdownPicker
                  label="College"
                  selectedValue={formData['College'] || ''}
                  onValueChange={val => handleValueChange('College', val)}
                  options={selectedCollegeList}
                  placeholder="Select"
                  labelStyle={styles.label}
                  textStyle={styles.text}
                />
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.half}>
                {profileAnnualIncomeData.map(item => (
                  <CustomDropdownPicker
                    key={item.category}
                    label={item.category}
                    selectedValue={formData[item.category] || ''}
                    onValueChange={val => handleValueChange(item.category, val)}
                    options={item.options}
                    placeholder="Select"
                    labelStyle={styles.label}
                    textStyle={styles.text}
                  />
                ))}
              </View>
              <View style={styles.half}>
                <CustomDropdownPicker
                  label="Work Sector"
                  selectedValue={formData['Work Sector'] || ''}
                  onValueChange={val => handleValueChange('Work Sector', val)}
                  options={['Select', 'Private', 'Govt']}
                  placeholder="Select"
                  labelStyle={styles.label}
                  textStyle={styles.text}
                />
              </View>
            </View>

            <CustomDropdownPicker
              label="Profile"
              selectedValue={formData['Profile'] || ''}
              onValueChange={val => handleValueChange('Profile', val)}
              options={[
                'Select',
                'Software Engineer',
                'Manager',
                'Team Lead',
                'Analyst',
                'Consultant',
                'Director',
                'CEO/Founder',
                'Other',
              ]}
              placeholder="Select"
              labelStyle={styles.label}
              textStyle={styles.text}
            />
            <View style={{marginTop: 16}}>
              <CustomDropdownPicker
                label="Company Name"
                selectedValue={formData['Company Name'] || ''}
                onValueChange={val => handleValueChange('Company Name', val)}
                options={[
                  'Select',
                  'TCS',
                  'Infosys',
                  'Google',
                  'Amazon',
                  'Microsoft',
                  'Government of India',
                  'Self-employed',
                  'Other',
                ]}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />
            </View>
          </ScrollView>

          {/* Bottom Done Button */}
          <View
            style={[
              styles.buttonContainer,
              {
                marginBottom: bottom,
              },
            ]}>
            <CustomButton title="Done" onPress={goBack} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ProfessionalInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 16,
  },
  half: {
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
  text: {
    fontSize: 10,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#fff',
  },
});
