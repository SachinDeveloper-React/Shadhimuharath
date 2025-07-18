import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, ScrollView, StyleSheet} from 'react-native';
import {CustomButton, CustomDropdownPicker} from '../../../common';
import {theme} from '../../../constant';
import {RootStackParamList} from '../../../navigations';

const SearchPersonalizedSecondScreen = ({
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  'SearchPersonalizedSecondScreen'
>) => {
  const [form, setForm] = useState({
    religion: '',
    community: '',
    subCommunity: '',
    highestQualification: '',
    college: '',
    annualIncome: '',
    jobSector: '',
    jobProfile: '',
    companyName: '',
  });

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm(prev => ({...prev, [key]: value}));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
      <CustomDropdownPicker
        label="Highest Qualification"
        placeholder="Select Qualification"
        selectedValue={form.highestQualification}
        onValueChange={val => handleChange('highestQualification', val)}
        options={['B.Tech', 'M.Tech', 'MBA', 'PhD', 'Other']}
        style={styles.inputFull}
        borderColor="primary"
        textStyle={{color: theme.colors.textPrimaryHeader}}
      />

      <View style={styles.row}>
        <CustomDropdownPicker
          label="College"
          placeholder="Select College"
          selectedValue={form.college}
          onValueChange={val => handleChange('college', val)}
          options={['IIT Delhi', 'IIM Bangalore', 'DU', 'Other']}
          style={styles.input}
          borderColor="primary"
          textStyle={{color: theme.colors.textPrimaryHeader}}
        />

        <CustomDropdownPicker
          label="Annual Income"
          placeholder="Select Income"
          selectedValue={form.annualIncome}
          onValueChange={val => handleChange('annualIncome', val)}
          options={[
            '₹0–5 LPA',
            '₹5–10 LPA',
            '₹10–20 LPA',
            '₹20–50 LPA',
            '₹50+ LPA',
          ]}
          style={styles.input}
          borderColor="primary"
          textStyle={{color: theme.colors.textPrimaryHeader}}
        />
      </View>
      <View style={styles.row}>
        <CustomDropdownPicker
          label="Job Sector"
          placeholder="Select Sector"
          selectedValue={form.jobSector}
          onValueChange={val => handleChange('jobSector', val)}
          options={['IT', 'Finance', 'Govt', 'Healthcare', 'Other']}
          style={styles.input}
          borderColor="primary"
          textStyle={{color: theme.colors.textPrimaryHeader}}
        />

        <CustomDropdownPicker
          label="Job Profile"
          placeholder="Select Profile"
          selectedValue={form.jobProfile}
          onValueChange={val => handleChange('jobProfile', val)}
          options={['Developer', 'Manager', 'Analyst', 'Consultant']}
          style={styles.input}
          borderColor="primary"
          textStyle={{color: theme.colors.textPrimaryHeader}}
        />
      </View>

      <CustomDropdownPicker
        label="Company Name"
        placeholder="Select Company"
        selectedValue={form.companyName}
        onValueChange={val => handleChange('companyName', val)}
        options={['Google', 'Amazon', 'TCS', 'Infosys', 'Startup', 'Other']}
        style={styles.inputFull}
        borderColor="primary"
        textStyle={{color: theme.colors.textPrimaryHeader}}
      />

      <CustomButton title="Done" onPress={() => navigation.popToTop()} />
    </ScrollView>
  );
};

export default SearchPersonalizedSecondScreen;

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
});
