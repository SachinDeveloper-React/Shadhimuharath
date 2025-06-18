import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import {RightIcon} from '../../assets';

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ_DATA: FAQItem[] = [
  {
    question: 'What is BlitzShipz?',
    answer:
      'BlitzShipz is a logistics service platform offering fast and reliable shipping solutions for businesses of all sizes.',
  },
  {
    question: 'How can I track my shipment?',
    answer:
      'You can track your shipment using the tracking ID provided on our website or mobile app under the Track Shipment section.',
  },
  {
    question: 'Do you offer COD services?',
    answer:
      'Yes, we offer Cash on Delivery services for eligible shipments across India.',
  },
];

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  !global._IS_FABRIC
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FaqScreen = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {FAQ_DATA.map((item, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <View key={index} style={styles.item}>
              <TouchableOpacity
                onPress={() => toggleExpand(index)}
                activeOpacity={0.7}>
                <View style={styles.questionContainer}>
                  <Text style={styles.question}>{item.question}</Text>
                  <View
                    style={{
                      transform: [
                        {
                          rotate: isExpanded ? '90deg' : '270deg',
                        },
                      ],
                    }}>
                    <RightIcon />
                  </View>
                </View>
              </TouchableOpacity>
              {isExpanded && (
                <View style={styles.answerContainer}>
                  <Text style={styles.answer}>{item.answer}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FaqScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 16,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    flex: 1,
  },
  icon: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  answerContainer: {
    marginTop: 8,
  },
  answer: {
    fontSize: 14,
    color: '#555',
  },
});
