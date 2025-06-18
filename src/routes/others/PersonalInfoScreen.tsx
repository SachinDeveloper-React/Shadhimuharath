import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../constant';
import {navigate} from '../../services';

const ProfileScreen = () => {
  const sections = [
    {
      label: 'Personal Info',
      next: 'ProfileInfo',
    },
    {label: 'Regional Info', next: 'ReligionInfo'},
    {label: 'Preferences', next: 'Preferences'},
    {label: 'Professional Info', next: 'ProfessionalInfo'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Image
            source={{uri: 'https://i.pravatar.cc/300'}}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.cameraIcon}>
            <Icon name="photo-camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Info Cards */}
        <View style={styles.cardsContainer}>
          {sections.map(({label, next}, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => navigate(next as any)}>
              <Text style={styles.cardText}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Gallery Footer */}
        <View style={styles.galleryRow}>
          <Text style={styles.galleryTitle}>Gallery</Text>
          <TouchableOpacity style={styles.seeAll}>
            <Text style={styles.seeAllText}>See All</Text>
            <Icon name="arrow-forward-ios" size={14} color="#F43F5E" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          numColumns={2}
          scrollEnabled={false}
          keyExtractor={(_, i) => i.toString()}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.galleryContainer}
          renderItem={({item}) => (
            <Image
              source={{uri: 'https://i.pravatar.cc/300'}}
              resizeMode="cover"
              style={styles.galleryImage}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    padding: 16,
    paddingBottom: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 56,
  },
  cameraIcon: {
    position: 'absolute',
    right: '35%',
    bottom: 0,
    backgroundColor: '#F43F5E',
    padding: 8,
    borderRadius: 20,
    elevation: 4, // Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 3,
  },
  cardsContainer: {
    marginTop: 32,
    gap: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#EACBC9',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  cardText: {
    color: '#EACBC9',
    fontSize: 14,
    fontWeight: '400',
  },
  galleryRow: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  galleryTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#8B2729',
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 16,
    color: '#F43F5E',
    fontWeight: '400',
    marginRight: 4,
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
