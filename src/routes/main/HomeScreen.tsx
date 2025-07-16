import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {GradientText, UpgradeButton} from '../../common';
import {RightIcon} from '../../assets';
import {
  CardItem,
  MatchCard,
  ProfileCard,
  ProfileCompletionBanner,
  SubscriptionModal,
} from '../../components';
import {navigate} from '../../services';
import {cardListData} from '../../constant/cardListData';

const CARD_WIDTH = Dimensions.get('window').width;

const HomeScreen: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container} accessibilityRole="summary">
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        accessible={true}
        accessibilityLabel="Main content scroll area"
        showsVerticalScrollIndicator={false}>
        <View style={styles.innerContainer}>
          <ProfileCard />
          <UpgradeButton />

          <View style={styles.headerRow} accessibilityRole="header">
            <Text style={styles.title} accessibilityRole="header">
              New Matches
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
            snapToInterval={CARD_WIDTH - 32}
            decelerationRate="fast"
            snapToAlignment="start"
            accessibilityLabel="List of new matches"
            accessibilityHint="Swipe left or right to see matches"
            renderItem={({item}) => (
              <CardItem {...item} onPress={() => navigate('UserProfile')} />
            )}
          />

          <ProfileCompletionBanner />

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

      <SubscriptionModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  innerContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#fff',
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
});
