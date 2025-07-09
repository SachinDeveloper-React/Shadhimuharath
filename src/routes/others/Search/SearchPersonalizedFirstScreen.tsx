import React, {useState} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {CustomButton, CustomDropdownPicker} from '../../../common';
import {theme} from '../../../constant';
import {navigate} from '../../../services';

const SearchPersonalizedFirstScreen = () => {
  const [form, setForm] = useState({
    age: '',
    maritalStatus: '',
    height: '',
    diet: '',
    country: '',
    state: '',
    city: '',
    religion: '',
    community: '',
    subCommunity: '',
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.row}>
        <CustomDropdownPicker
          label="Age"
          placeholder="Select Age"
          selectedValue={form.age}
          onValueChange={val => handleChange('age', val)}
          options={['20–25', '25–30', '30–35', '35–40']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
        <CustomDropdownPicker
          label="Marital Status"
          placeholder="Select Status"
          selectedValue={form.maritalStatus}
          onValueChange={val => handleChange('maritalStatus', val)}
          options={['Single', 'Married', 'Divorced']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
      </View>

      <View style={styles.row}>
        <CustomDropdownPicker
          label="Height"
          placeholder="Select Height"
          selectedValue={form.height}
          onValueChange={val => handleChange('height', val)}
          options={['5ft 5in – 165cm', '5ft 11in – 180cm', '6ft – 183cm']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
        <CustomDropdownPicker
          label="Diet"
          placeholder="Select Diet"
          selectedValue={form.diet}
          onValueChange={val => handleChange('diet', val)}
          options={['Veg', 'Non-Veg', 'Eggetarian']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
      </View>

      <View style={styles.row}>
        <CustomDropdownPicker
          label="Country"
          placeholder="Select Country"
          selectedValue={form.country}
          onValueChange={val => handleChange('country', val)}
          options={['India', 'USA', 'Canada']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
        <CustomDropdownPicker
          label="State"
          placeholder="Select State"
          selectedValue={form.state}
          onValueChange={val => handleChange('state', val)}
          options={['U.P.', 'Delhi', 'Maharashtra']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
      </View>

      <CustomDropdownPicker
        label="City"
        placeholder="Select City"
        selectedValue={form.city}
        onValueChange={val => handleChange('city', val)}
        options={['Ghaziabad', 'Noida', 'Lucknow']}
        style={styles.inputFull}
        borderColor="primary"
        textStyle={{
          color: theme.colors.textPrimaryHeader,
        }}
      />

      <View style={styles.row}>
        <CustomDropdownPicker
          label="Religion"
          placeholder="Select Religion"
          selectedValue={form.religion}
          onValueChange={val => handleChange('religion', val)}
          options={['Hindu', 'Muslim', 'Christian', 'Sikh']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
        <CustomDropdownPicker
          label="Community"
          placeholder="Select Community"
          selectedValue={form.community}
          onValueChange={val => handleChange('community', val)}
          options={['Hindi', 'Tamil', 'Bengali']}
          style={styles.input}
          borderColor="primary"
          textStyle={{
            color: theme.colors.textPrimaryHeader,
          }}
        />
      </View>

      <CustomDropdownPicker
        label="Sub Community"
        placeholder="Select Sub Community"
        selectedValue={form.subCommunity}
        onValueChange={val => handleChange('subCommunity', val)}
        options={['Sub A', 'Sub B', 'Sub C']}
        style={styles.inputFull}
        borderColor="primary"
        textStyle={{
          color: theme.colors.textPrimaryHeader,
        }}
      />

      <CustomButton
        title="Next"
        onPress={() => navigate('SearchPersonalizedSecondScreen')}
      />
    </ScrollView>
  );
};

export default SearchPersonalizedFirstScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 16,
  },
  input: {
    flex: 1,
  },
  inputFull: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
    borderRadius: theme.radius.lg,
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 16,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: theme.text.fontSize.lg,
    fontWeight: theme.text.fontWeight.bold,
  },
});
