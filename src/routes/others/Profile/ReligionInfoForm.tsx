import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {CustomButton, CustomDropdownPicker} from '../../../common';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {goBack} from '../../../services';

type Props = {};

const ReligionInfoForm = (props: Props) => {
  const {bottom} = useSafeAreaInsets();
  const [formData, setFormData] = useState<{[key: string]: string}>({});

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const selectedReligion = formData['Religion'];
  const communityList = selectedReligion
    ? ['Community A', 'Community B', 'Community C']
    : [];

  const subCommunityList =
    formData['Community'] === 'Community A'
      ? ['Sub A1', 'Sub A2']
      : ['Sub X', 'Sub Y'];

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
                  label="Religion"
                  selectedValue={selectedReligion || ''}
                  onValueChange={val => handleValueChange('Religion', val)}
                  options={['Hindu', 'Muslim', 'Christian', 'Sikh']}
                  placeholder="Select"
                  labelStyle={styles.label}
                  textStyle={styles.text}
                />
              </View>
              <View style={styles.half}>
                <CustomDropdownPicker
                  label="Community"
                  selectedValue={formData['Community'] || ''}
                  onValueChange={val => handleValueChange('Community', val)}
                  options={communityList}
                  placeholder="Select"
                  labelStyle={styles.label}
                  textStyle={styles.text}
                />
              </View>
            </View>

            <CustomDropdownPicker
              label="Sub Community"
              selectedValue={formData['Sub Community'] || ''}
              onValueChange={val => handleValueChange('Sub Community', val)}
              options={subCommunityList}
              placeholder="Select"
              labelStyle={styles.label}
              textStyle={styles.text}
            />
          </ScrollView>

          <View style={[styles.buttonContainer, {paddingBottom: bottom || 16}]}>
            <CustomButton title="Done" onPress={goBack} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ReligionInfoForm;

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
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#fff',
  },
});
