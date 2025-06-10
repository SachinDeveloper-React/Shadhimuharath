import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '../../../constant';
import Icon from 'react-native-vector-icons/Feather';
type Props = {
  onPressIcon?: () => void;
};

const CommunityNote = (props: Props) => {
  const {onPressIcon} = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressIcon} style={styles.iconButton}>
        <Icon name="check" size={10} color={theme.colors.white} />
      </TouchableOpacity>
      <Text style={styles.text}>
        Not particular about my partner's community (caste no bar)
      </Text>
    </View>
  );
};

export default CommunityNote;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: theme.spacing.sm,
  },
  iconButton: {
    width: 16,
    height: 16,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    // flex: 1,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
  },
  text: {
    width: theme.layout.screenWidth * 0.7,
    fontSize: theme.text.fontSize.base,
    color: theme.colors.textPrimary,
  },
});
