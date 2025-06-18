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
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomDropdownPicker, CustomButton} from '../../../common';
import {theme} from '../../../constant';
import {navigate} from '../../../services';

const maritalStatusOptions = ['Single', 'Divorced', 'Widowed'];
const religionOptions = ['Hindu', 'Muslim', 'Christian', 'Sikh'];
const communityOptions = [
  'Brahmin',
  'Rajput',
  'Jat',
  'Maratha',
  'Yadav',
  'Other',
];
const subCommunityOptions = ['Subgroup A', 'Subgroup B', 'Subgroup C', 'Other'];

const Preferences2Form = () => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});
  const {bottom} = useSafeAreaInsets();

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

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
                label="Marital Status"
                selectedValue={formData['Marital Status'] || ''}
                onValueChange={val => handleValueChange('Marital Status', val)}
                options={maritalStatusOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />

              <CustomDropdownPicker
                label="Your Religion"
                selectedValue={formData['Religion'] || ''}
                onValueChange={val => handleValueChange('Religion', val)}
                options={religionOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />

              <CustomDropdownPicker
                label="Community"
                selectedValue={formData['Community'] || ''}
                onValueChange={val => handleValueChange('Community', val)}
                options={communityOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />

              <CustomDropdownPicker
                label="Sub-Community"
                selectedValue={formData['Sub Community'] || ''}
                onValueChange={val => handleValueChange('Sub Community', val)}
                options={subCommunityOptions}
                placeholder="Select"
                labelStyle={styles.label}
                textStyle={styles.text}
              />
            </ScrollView>

            <View
              style={[styles.buttonContainer, {paddingBottom: bottom || 16}]}>
              <CustomButton
                title="Done"
                onPress={() => navigate('Preferences3')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Preferences2Form;

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
    gap: 12,
    paddingBottom: 32,
  },
  label: {
    fontSize: 24,
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
