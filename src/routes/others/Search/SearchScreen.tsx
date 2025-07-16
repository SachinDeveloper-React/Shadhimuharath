import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SearchIcon} from '../../../assets';
import {CustomButton, CustomModal} from '../../../common';
import {theme} from '../../../constant';
import {navigate} from '../../../services';
import {TagFilter} from '../../../components';

type Props = {};

const SearchScreen = (props: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const [search, setSearch] = useState('');

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={styles.searchFilterRow}>
          <View style={styles.searchInput}>
            <SearchIcon width={18} height={18} />
            <TextInput
              placeholder="Search"
              style={styles.input}
              value={search}
              onChangeText={handleSearch}
              placeholderTextColor="#888"
            />
          </View>
        </View>

        <CustomButton
          title="Personalized Search"
          style={{
            padding: 16,
          }}
          linearButtonStyle={{
            borderRadius: theme.radius.full,
          }}
          onPress={() => navigate('SearchPersonalizedFirstScreen')}
        />

        <TagFilter />
      </ScrollView>

      <CustomModal isVisible={isModalVisible} closeModal={closeModal}>
        <View style={{gap: 10}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '700',
              letterSpacing: 2,
              color: theme.colors.textPrimaryHeader,
            }}>
            To Unlock this feature buy subscription
          </Text>

          <CustomButton
            title="Explore Now"
            style={{
              borderRadius: 8,
            }}
            onPress={() => {
              navigate('Subscription');
              closeModal();
            }}
          />
        </View>
      </CustomModal>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  searchFilterRow: {
    // flexDirection: 'row',
    marginTop: 26,
    marginHorizontal: 16,
    // alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D69892',
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});
