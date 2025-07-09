import React, {useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigations';
import {AnalyzeIcon} from '../../assets';
import {theme} from '../../constant';

const TermsAndConditionsScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'TermAndConditionScreen'>) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <AnalyzeIcon />;
      },
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.subTitle}>AGREEMENT</Text>
        <Text style={styles.mainTitle}>Terms and Condition</Text>
      </View>
      <View style={styles.divider} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {[1, 2].map(num => (
          <View key={num} style={styles.clauseBox}>
            <Text style={styles.clauseTitle}>Clause {num}</Text>
            <Text style={styles.clauseText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              condimentum eget purus in. Consectetur eget id morbi amet amet,
              in. Ipsum viverra pretium tellus neque. Ullamcorper suspendisse
              aenean leo pharetra in sit semper et. Amet quam placerat sem.
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TermsAndConditionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  backButton: {
    paddingRight: 8,
    paddingVertical: 4,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    color: '#000',
    marginLeft: -16,
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  titleSection: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 16,
    color: theme.colors.textPrimaryHeader,
    fontWeight: '400',
    marginBottom: 2,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: theme.colors.textPrimaryHeader,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  clauseBox: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    // elevation: 1,
  },
  clauseTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
    color: '#494949',
  },
  clauseText: {
    fontSize: 16,
    color: '#494949',
    lineHeight: 20,
    fontWeight: '400',
  },
});
