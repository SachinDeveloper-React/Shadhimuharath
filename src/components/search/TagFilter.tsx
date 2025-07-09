import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, FlatList} from 'react-native';

const TAG_CATEGORIES = {
  Gender: ['Male', 'Female'],
  Language: ['Hindi', 'English', 'Tamil'],
  Religion: ['Hindu', 'Muslim', 'Sikh', 'Christian'],
  Age: ['Age 25-30', 'Age 30-35', 'Age 35-40', 'Age 40-45'],
};

const TagFilter = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Male']);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag],
    );
  };

  const renderTag = (tag: string) => {
    const selected = selectedTags.includes(tag);
    return (
      <Pressable
        key={tag}
        onPress={() => toggleTag(tag)}
        style={[styles.tag, selected && styles.selectedTag]}>
        <Text style={[styles.tagText, selected && styles.selectedTagText]}>
          {tag}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tag</Text>
      {Object.entries(TAG_CATEGORIES).map(([category, tags]) => (
        <View style={styles.tagRow} key={category}>
          {tags.map(renderTag)}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    fontSize: 18,
    color: '#b2514f',
    fontWeight: '600',
    marginBottom: 8,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  tag: {
    borderWidth: 1,
    borderColor: '#b2514f',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
  },
  tagText: {
    color: '#b2514f',
    fontSize: 14,
  },
  selectedTag: {
    backgroundColor: '#f0d1ce',
  },
  selectedTagText: {
    fontWeight: '700',
  },
});

export default TagFilter;
