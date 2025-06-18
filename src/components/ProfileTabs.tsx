import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  SafeAreaView,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import {theme} from '../constant';

const profileData = [
  {
    label: 'Personal Info',
    key: 'Personal_Info',
    data: {
      name: 'John',
      dob: '08/02/2001',
      phoneNo: '8700707668',
      gender: 'Male',
      country: 'India',
      state: 'Delhi',
      city: 'New Delhi',
      email: 'sachinkumarq87@gmail.com',
      maritalStatus: 'Single',
      height: '5 ft 2 inch',
      diet: 'Veg',
    },
  },
  {
    label: 'Religion Info',
    key: 'Religion_Info',
    data: {
      religion: 'Hindu',
      community: 'Jat',
      sub_community: 'Malik',
    },
  },
  {
    label: 'Professional Info',
    key: 'Professional_Info',
    data: {
      highest_qualification: 'BCA',
      collage: 'St. Andrew Institute of Technology and Management',
      annual_income: '12L',
      profile: 'Web Developer',
      company: 'SNVA',
    },
  },
  {
    label: 'Gallary',
    key: 'Gallary',
    data: [
      'https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
  },
];

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState(profileData[0]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabContent}>
        <View style={styles.tabBar}>
          {profileData.map((tab, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tabItem,
                activeTab.key === tab.key && styles.activeTabItem,
              ]}
              onPress={() => setActiveTab(tab)}>
              <Text
                style={[
                  styles.tabText,
                  activeTab.key === tab.key && styles.activeTabText,
                ]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.contentView}>
        {activeTab.key === 'Gallary' ? (
          <FlatList
            data={(activeTab.data as any) ?? []}
            numColumns={2}
            scrollEnabled={false}
            keyExtractor={(_, i) => i.toString()}
            columnWrapperStyle={styles.columnWrapper}
            contentContainerStyle={styles.galleryContainer}
            renderItem={({item}) => (
              <Image
                source={{uri: item}}
                resizeMode="cover"
                style={styles.galleryImage}
              />
            )}
          />
        ) : (
          <View style={styles.infoCard}>
            {Object.entries(activeTab.data).map(([key, value], index) => (
              <View key={index} style={styles.row}>
                <View style={styles.rowLeft}>
                  <Text style={styles.label}>{formatKey(key)}</Text>
                </View>
                <Text style={styles.separator}>-</Text>
                <Text style={styles.value}>{value}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const formatKey = (key: string) =>
  key.replace(/_/g, ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());

export default ProfileTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  activeTabItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ED1C24',
  },
  tabText: {
    color: '#555',
    fontWeight: '600',
  },
  activeTabText: {
    color: '#ED1C24',
  },
  tabContent: {
    paddingHorizontal: 8,
  },
  contentView: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  infoCard: {
    backgroundColor: '#FFF1F2',
    padding: 16,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 6,
    alignItems: 'center',
  },
  rowLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    marginHorizontal: 10,
    color: '#70302B',
    fontWeight: '400',
    fontSize: 16,
  },
  label: {
    color: '#70302B',
    fontWeight: '400',
    fontSize: 16,
  },
  value: {
    flex: 1,
    color: '#C1645C',
    fontSize: 16,
    fontWeight: '400',
  },
  columnWrapper: {
    gap: 16,
    marginBottom: 16,
    alignSelf: 'center',
  },
  galleryImage: {
    width: Dimensions.get('window').width / 2 - 24,
    height: 300,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  galleryContainer: {
    paddingBottom: 16,
  },
});
