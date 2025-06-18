import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CustomButton} from '../../common';
import {StarIcon} from '../../assets';

const reviews = [
  {
    id: '1',
    name: 'Guy Hawkins',
    platform: 'Facebook',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 5,
  },
  {
    id: '2',
    name: 'Wade Warren',
    platform: 'Instagram',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  },
  {
    id: '3',
    name: 'Leslie Alexander',
    platform: 'Twitter',
    avatar:
      'https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 3,
  },
];

const UserReviewScreen = () => {
  const [selectedStar, setSelectedStar] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);

  const renderItem = ({item}: {item: (typeof reviews)[0]}) => (
    <View style={styles.reviewCard}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.platform}</Text>
        <View style={styles.starRow}>
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} active={index < item.rating} />
          ))}
        </View>
      </View>
    </View>
  );

  const handleApply = () => {
    setModalVisible(false);
    Alert.alert('Thank you!', `You rated ${selectedStar} out of 5 stars.`);
    // You can call an API here to submit the rating
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        contentContainerStyle={styles.container}
        data={reviews}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{height: 12}} />}
      />
      <CustomButton
        title="Add Review"
        // variant="outline"
        onPress={() => setModalVisible(true)}
        style={{borderRadius: 100, marginHorizontal: 16}}
      />
    </SafeAreaView>
  );
};

export default UserReviewScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  reviewCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF1F2',
    padding: 12,
    borderRadius: 12,
    gap: 16,
  },
  avatar: {
    width: 68,
    height: 68,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  starRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    padding: 24,
    paddingBottom: 40,
    gap: 20,
  },
});
