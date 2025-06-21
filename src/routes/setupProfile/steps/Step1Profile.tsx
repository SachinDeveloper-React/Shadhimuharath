import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../../constant';
import {
  AuthHeader,
  CustomButton,
  CustomCircularProgressBar,
} from '../../../common';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SetupProfileStackParamList} from '../../../navigations/types';

const profileOptions = [
  'Myself',
  'Son',
  'Daughter',
  'Brother',
  'Sister',
  'Friend',
  'Relative',
];

const genderOptions = ['Male', 'Female'];

const Step1Profile = ({
  navigation,
}: NativeStackScreenProps<SetupProfileStackParamList, 'Step1Profile'>) => {
  const [selectedProfile, setSelectedProfile] = useState<string>('Myself');
  const [selectedGender, setSelectedGender] = useState<string>('Male');
  const {width} = useWindowDimensions();

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

  const profileItemWidth = (width - 32) / 3;
  const genderItemWidth = (width - 32) / 2;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.innercontainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View>
            <AuthHeader
              onPress={() => navigation.goBack()}
              right={
                <CustomCircularProgressBar
                  progress={0}
                  radius={30}
                  strokeWidth={6}
                />
              }
            />
            <Text style={styles.title}>This Profile is for</Text>
            <View style={styles.optionsGrid}>
              {profileOptions.map(option =>
                renderOption(
                  option,
                  selectedProfile,
                  setSelectedProfile,
                  profileItemWidth,
                ),
              )}
            </View>

            <Text style={styles.title}>Your Gender</Text>
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
          </View>
          <CustomButton
            title="Continue"
            onPress={() => navigation.navigate('Step2Community')}
            accessible
            accessibilityRole="button"
            accessibilityLabel="Continue button"
            accessibilityHint="Goes to the next step"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Step1Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  innercontainer: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.white,
    paddingVertical: StatusBar.currentHeight,
  },
  title: {
    fontSize: theme.text.fontSize.lg,
    fontWeight: theme.text.fontWeight.regular,
    color: theme.colors.textPrimary,
    marginBottom: theme.spacing.sm,
    marginTop: theme.spacing.lg,
  },
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
});
