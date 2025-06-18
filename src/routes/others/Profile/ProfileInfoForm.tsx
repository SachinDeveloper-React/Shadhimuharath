import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {CustomButton, CustomDropdownPicker} from '../../../common'; // Ensure you’ve this reusable dropdown
import {theme} from '../../../constant';
import {goBack} from '../../../services';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const genderOptions = ['Male', 'Female'];
const maritalStatusOptions = ['Single', 'Married', 'Divorced', 'Widowed'];
const heightOptions = ['5ft 11in - 180cm', '5ft 10in - 178cm'];
const dietOptions = ['Veg', 'Non-Veg', 'Eggetarian', 'Vegan'];
const countries = ['India'];
const states = ['U.P.', 'Delhi', 'Maharashtra'];
const cities = ['Ghaziabad', 'Noida', 'Lucknow'];

const ProfileInfoForm = () => {
  const [formData, setFormData] = useState<{[key: string]: string}>({});
  const [date, setDate] = useState<Date | null>(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid={true}
        extraScrollHeight={Platform.OS === 'ios' ? 80 : 100}
        showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Samantha John"
              value={formData.name || ''}
              onChangeText={text => handleValueChange('name', text)}
            />
          </View>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="Gender"
              selectedValue={formData.gender || ''}
              onValueChange={val => handleValueChange('gender', val)}
              options={genderOptions}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={styles.label}>D.O.B</Text>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setShowDatePicker(true)}>
              <Text style={{color: formData.dob ? '#000' : '#888'}}>
                {formData.dob || 'DD/MM/YYYY'}
              </Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date || new Date()}
                mode="date"
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                onChange={(e, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    const formatted = selectedDate.toLocaleDateString('en-GB');
                    handleValueChange('dob', formatted);
                    setDate(selectedDate);
                  }
                }}
              />
            )}
          </View>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="Marital Status"
              selectedValue={formData.maritalStatus || ''}
              onValueChange={val => handleValueChange('maritalStatus', val)}
              options={maritalStatusOptions}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="Height"
              selectedValue={formData.height || ''}
              onValueChange={val => handleValueChange('height', val)}
              options={heightOptions}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="Diet"
              selectedValue={formData.diet || ''}
              onValueChange={val => handleValueChange('diet', val)}
              options={dietOptions}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="Country"
              selectedValue={formData.country || ''}
              onValueChange={val => handleValueChange('country', val)}
              options={countries}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
          <View style={styles.half}>
            <CustomDropdownPicker
              label="State"
              selectedValue={formData.state || ''}
              onValueChange={val => handleValueChange('state', val)}
              options={states}
              placeholder="Select"
              labelStyle={{
                fontSize: 16,
              }}
              textStyle={{
                fontSize: 16,
              }}
            />
          </View>
        </View>

        <CustomDropdownPicker
          label="City"
          selectedValue={formData.city || ''}
          onValueChange={val => handleValueChange('city', val)}
          options={cities}
          placeholder="Select"
          labelStyle={{
            fontSize: 16,
          }}
          textStyle={{
            fontSize: 16,
          }}
        />

        <View style={{marginVertical: theme.spacing.xl}}>
          <Text style={styles.label}>Email ID</Text>
          <TextInput
            style={styles.input}
            placeholder="SamanthaJohn@gmail.com"
            keyboardType="email-address"
            value={formData.email || ''}
            onChangeText={text => handleValueChange('email', text)}
          />
        </View>

        <CustomButton title="Done" onPress={goBack} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ProfileInfoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  half: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: theme.spacing.xs,
  },
  input: {
    borderWidth: 1.5,
    borderColor: theme.colors.inactive,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#000',
  },
  button: {
    padding: 16,
    backgroundColor: '#fff',
  },
  gradient: {
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
