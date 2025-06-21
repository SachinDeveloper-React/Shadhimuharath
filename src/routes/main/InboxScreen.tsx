import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SearchIcon} from '../../assets';
import {navigate} from '../../services';

const data = [
  {
    id: '1',
    name: 'Aarav',
    message: "Oh i don't like fish 🙈",
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Vihaan',
    message: 'Can we go somewhere?',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960',
    unreadCount: 1,
  },
  {
    id: '3',
    name: 'Reyansh',
    message: 'You: If I were a stop light, I’d turn',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960',
    verified: true,
  },
  {
    id: '4',
    name: 'Krishna',
    message: 'See you soon 😉',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960',
  },
  {
    id: '5',
    name: 'Rudra',
    message: 'Are you serious?!',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960',
    verified: true,
  },
];

const InboxScreen = () => {
  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      name: string;
      message: string;
      avatar: string;
      verified?: boolean;
      unreadCount?: number;
    };
  }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.7}
      onPress={() => navigate('Chat')}>
      <Image source={{uri: item.avatar}} style={styles.avatar} />
      <View style={styles.textContainer}>
        <View style={styles.nameRow}>
          <Text style={styles.name}>{item.name}</Text>
          {item.verified && (
            <Icon
              name="check-decagram"
              size={16}
              color="#00c853"
              style={styles.checkIcon}
            />
          )}
        </View>
        <Text style={styles.message} numberOfLines={1}>
          {item.message}
        </Text>
      </View>
      {item.unreadCount ? (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.unreadCount}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );

  const renderSearchBar = () => (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        placeholderTextColor="#D69892"
        style={styles.searchInput}
      />
      <SearchIcon width={18} height={18} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListHeaderComponent={renderSearchBar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#111',
  },
  checkIcon: {
    marginLeft: 6,
  },
  message: {
    color: '#555',
    fontSize: 14,
    marginTop: 2,
  },
  badge: {
    backgroundColor: '#c62828',
    borderRadius: 12,
    minWidth: 24,
    paddingHorizontal: 6,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
  },
  searchContainer: {
    marginHorizontal: 16,
    marginBottom: 12,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 44,
    borderWidth: 0.5,
    borderColor: '#D69892',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default InboxScreen;
