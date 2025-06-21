import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../constant';
import Icon from 'react-native-vector-icons/Feather';

type Props = {
  selected: boolean;
  onPress: () => void;
};

const CommunityNote = ({selected, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={[styles.iconBox, selected && styles.iconBoxSelected]}>
        {selected && <Icon name="check" size={10} color={theme.colors.white} />}
      </View>
      <Text style={styles.text}>
        Not particular about my partner's community (caste no bar)
      </Text>
    </TouchableOpacity>
  );
};

export default CommunityNote;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
  iconBox: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  iconBoxSelected: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  text: {
    flex: 1,
    fontSize: theme.text.fontSize.base,
    color: theme.colors.textPrimary,
  },
});
