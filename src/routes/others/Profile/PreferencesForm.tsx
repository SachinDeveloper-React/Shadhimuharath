import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  ScrollView,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../constant';
import {CustomDropdownPicker, CustomButton} from '../../../common';
import {navigate} from '../../../services';

type Props = {};

const genderOptions = ['Male', 'Female'];
const ageOptions = Array.from({length: 50}, (_, i) => `${18 + i}`);
const heightOptions = [
  'Below 5ft',
  '5ft 0in',
  '5ft 1in',
  '5ft 2in',
  '5ft 3in',
  '5ft 4in',
  '5ft 5in',
  '5ft 6in',
  '5ft 7in',
  '5ft 8in',
  '5ft 9in',
  '5ft 10in',
  '5ft 11in',
  '6ft 0in',
  'Above 6ft',
];
const dietOptions = ['Veg', 'Non-Veg', 'Eggetarian', 'Vegan'];

const PreferencesForm = (props: Props) => {
  const [selectedGender, setSelectedGender] = useState<string>('Male');
  const [formData, setFormData] = useState<{[key: string]: string}>({});
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();
  const genderItemWidth = (width - 32) / 2;

  const handleValueChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const renderOption = (
    label: string,
    selected: string,
    onSelect: (val: string) => void,
    itemWidth: number,
  ) => {
    const isSelected = selected === label;
    return (
      <TouchableOpacity
        key={label}
        onPress={() => onSelect(label)}
        style={{width: itemWidth, padding: 5}}>
        {isSelected ? (
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={[theme.colors.secondary, theme.colors.primary]}
            style={[
              {
                ...Platform.select({
                  ios: {
                    alignItems: 'center',
                    borderRadius: theme.radius.sm + 2,
                  },
                  android: {
                    ...styles.selectedButton,
                  },
                }),
              },
            ]}>
            <Text
              style={[
                styles.selectedText,
                {
                  paddingVertical:
                    Platform.OS === 'android' ? 0 : theme.spacing.sm,
                },
              ]}>
              {label}
            </Text>
          </LinearGradient>
        ) : (
          <View style={styles.unselectedButton}>
            <Text style={styles.unselectedText}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.flex}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Gender</Text>
          <View style={styles.optionsGrid}>
            {genderOptions.map(option =>
              renderOption(
                option,
                selectedGender,
                setSelectedGender,
                genderItemWidth,
              ),
            )}
          </View>

          <View style={{flexDirection: 'column', gap: 10}}>
            <CustomDropdownPicker
              label="Age"
              selectedValue={formData['Age'] || ''}
              onValueChange={val => handleValueChange('Age', val)}
              options={ageOptions}
              placeholder="Select"
              labelStyle={styles.label}
              textStyle={styles.text}
            />

            <CustomDropdownPicker
              label="Height"
              selectedValue={formData['Height'] || ''}
              onValueChange={val => handleValueChange('Height', val)}
              options={heightOptions}
              placeholder="Select"
              labelStyle={styles.label}
              textStyle={styles.text}
            />

            <CustomDropdownPicker
              label="Diet"
              selectedValue={formData['Diet'] || ''}
              onValueChange={val => handleValueChange('Diet', val)}
              options={dietOptions}
              placeholder="Select"
              labelStyle={styles.label}
              textStyle={styles.text}
            />
          </View>
        </ScrollView>

        <View
          style={[
            styles.buttonContainer,
            {
              paddingBottom:
                Platform.OS === 'ios' ? 0 : StatusBar?.currentHeight,
            },
          ]}>
          <CustomButton
            title="Continue"
            onPress={() => {
              navigate('Preferences2');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PreferencesForm;

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
  },
  title: {
    fontSize: theme.text.fontSize.lg,
    fontWeight: theme.text.fontWeight.regular,
    color: theme.colors.textPrimary,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.md,
  },
  selectedButton: {
    paddingVertical: theme.spacing.sm,
    alignItems: 'center',
    borderRadius: theme.radius.sm + 2,
  },
  unselectedButton: {
    paddingVertical: theme.spacing.sm,
    borderWidth: 0.5,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    borderRadius: theme.radius.sm + 2,
  },
  selectedText: {
    color: theme.colors.white,
    fontWeight: theme.text.fontWeight.semiBold,
  },
  unselectedText: {
    color: theme.colors.primary,
    fontWeight: theme.text.fontWeight.semiBold,
  },
  label: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
});
