import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const NotificationsScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[1, 2, 4, 5]}
        keyExtractor={(_, i) => i.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View style={styles.cardWrapper}>
              <NotificationCard />
              <NotificationDocumentCard />
              <NotificationVeifiedCard />
            </View>
          );
        }}
        contentContainerStyle={styles.listContent}
        renderItem={({item}) => <NotificationItem />}
      />
    </SafeAreaView>
  );
};

const NotificationCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardTextContainer}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTag}>Message Request</Text>
            <Text style={styles.cardDate}>06 Feb 2025</Text>
          </View>
          <Text style={styles.cardName}>Samantha John</Text>
          <Text style={styles.cardAddress}>H-70, Sector 63</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectText}>Reject</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const NotificationVeifiedCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardTextContainer}>
          <View style={styles.cardTitleRow}>
            <Text
              style={[
                styles.cardTag,
                {
                  color: '#46CF68',
                },
              ]}>
              Profile Verified
            </Text>
            <Text style={styles.cardDate}>06 Feb 2025</Text>
          </View>
          <Text style={styles.cardName}>Samantha John</Text>
          <Text style={styles.cardAddress}>H-70, Sector 63</Text>
        </View>
      </View>
    </View>
  );
};

const NotificationDocumentCard = () => {
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.cardHeader,
          {
            alignItems: 'center',
          },
        ]}>
        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1664298311043-46b3814a511f?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardTitleRow}>
          <Text style={styles.cardTag}>Delete Verification Request</Text>
          <Text style={styles.cardDate}>06 Feb 2025</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.acceptButton}>
          <Text style={styles.acceptText}>Upload Document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rejectButton}>
          <Text style={styles.rejectText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationItem = () => {
  return (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>Notification</Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardWrapper: {
    marginVertical: 16,
    marginHorizontal: 16,
    gap: 10,
  },
  card: {
    backgroundColor: '#FFF1F2',
    borderWidth: 1,
    borderColor: '#EACBC9',
    borderRadius: 16,
    padding: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  cardImage: {
    width: 72,
    height: 72,
    borderRadius: 8,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardTitleRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardTag: {
    fontSize: 10,
    fontWeight: '500',
    color: '#C1645C',
  },
  cardDate: {
    fontSize: 10,
    fontWeight: '400',
    color: '#C1645C',
  },
  cardName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#9F443D',
  },
  cardAddress: {
    fontSize: 12,
    fontWeight: '500',
    color: '#D69892',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    gap: 10,
  },
  acceptButton: {
    backgroundColor: '#46CF68',
    flex: 1,
    height: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  acceptText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  rejectButton: {
    flex: 1,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF534A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FF534A',
  },
  listContent: {
    paddingBottom: 16,
  },
  notificationItem: {
    borderWidth: 1,
    borderColor: '#EACBC9',
    borderRadius: 12,
    height: 48,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  notificationText: {
    fontSize: 14,
    color: '#333',
  },
});
