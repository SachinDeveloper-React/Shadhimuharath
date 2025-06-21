import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {cardListData} from '../../constant/cardListData';
import {useSharedValue} from 'react-native-reanimated';

import {GradientText} from '../../common';
import {NegativeIcon, PositiveIcon, RightIcon, SearchIcon} from '../../assets';
import {MatchCard, SwipeableCard, SwipeableCardRef} from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MAX_VISIBLE_CARDS = 3;

const DiscoverScreen = () => {
  const [newData, setNewData] = useState([...cardListData, ...cardListData]);
  const cardRef = useRef<SwipeableCardRef>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [search, setSearch] = useState('');
  const animatedValue = useSharedValue(0);

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <GestureHandlerRootView style={styles.flexContainer}>
      <SafeAreaView style={styles.flexContainer}>
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

          <View style={styles.cardContainer}>
            {newData.map((item, index) => {
              if (
                index > currentIndex + MAX_VISIBLE_CARDS ||
                index < currentIndex
              ) {
                return null;
              }
              return (
                <SwipeableCard
                  key={index}
                  ref={index === currentIndex ? cardRef : undefined}
                  newData={newData}
                  setNewData={setNewData}
                  maxVisibleItems={MAX_VISIBLE_CARDS}
                  item={item}
                  index={index}
                  dataLength={newData.length}
                  animatedValue={animatedValue}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                />
              );
            })}
          </View>

          <View style={styles.bottomContent}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <NegativeIcon onPress={() => cardRef?.current?.swipeLeft()} />
              <PositiveIcon onPress={() => cardRef?.current?.swipeRight()} />
            </View>

            <View style={styles.headerRow} accessibilityRole="header">
              <Text style={styles.title} accessibilityRole="header">
                Matches
              </Text>
              <View
                style={styles.seeAllRow}
                accessibilityRole="button"
                accessibilityLabel="See all matches">
                <GradientText text="See All" colors={['#FF6B6B', '#D93B65']} />
                <RightIcon />
              </View>
            </View>

            <FlatList
              data={cardListData}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 10,
              }}
              accessibilityLabel="List of new matches"
              accessibilityHint="Swipe left or right to see matches"
              renderItem={({item}) => <MatchCard {...item} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  cardContainer: {
    height: Dimensions.get('window').height * 0.5 + 30 + 20 + 10, // set a height that allows vertical scroll
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContent: {
    padding: 16,
  },
  title: {
    color: '#8B2729',
    fontSize: 20,
    fontWeight: '500',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 12,
  },
  seeAllRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  filterBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#333',
  },
});
