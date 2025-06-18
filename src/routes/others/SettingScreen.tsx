import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {CustomOptionItem} from '../../components';
import {RightIcon, SettingIcon, UserReviewIcon} from '../../assets';
import {navigate} from '../../services';

type SettingItem = {
  id: number;
  title: string;
  leftIcon: React.ElementType;
  rightIcon: React.ElementType;
  navigation: string;
};

type SettingSection = {
  id: number;
  sublist: SettingItem[];
};

const SETTINGS_LIST: SettingSection[] = [
  {
    id: 1,
    sublist: [
      {
        id: 1,
        title: 'Contact Us',
        leftIcon: UserReviewIcon,
        rightIcon: RightIcon,
        navigation: '',
      },
    ],
  },
  {
    id: 2,
    sublist: [
      {
        id: 1,
        title: 'Reset Password',
        leftIcon: SettingIcon,
        rightIcon: RightIcon,
        navigation: '',
      },
    ],
  },
];

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {SETTINGS_LIST.map(section => (
          <View key={section.id} style={styles.section}>
            {section.sublist.map(item => (
              <CustomOptionItem
                key={item.id}
                title={item.title}
                leftIcon={<item.leftIcon />}
                rightIcon={<item.rightIcon />}
                onPress={() => navigate(item.navigation as any)}
              />
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 16,
  },
  section: {
    marginBottom: 16,
    backgroundColor: '#FFF1F2',
    borderRadius: 12,
    paddingVertical: 8,
  },
});
