import React, {JSX} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  leftIcon: JSX.Element;
  rightIcon?: JSX.Element;
  onPress?: () => void;
};

const CustomOptionItem: React.FC<Props> = ({
  title,
  leftIcon,
  rightIcon,
  onPress,
}) => {
  return (
    <Pressable style={styles.item} onPress={onPress}>
      <View style={styles.left}>
        {leftIcon}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightIcon}
    </Pressable>
  );
};

export default CustomOptionItem;

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  title: {
    color: '#32343E',
    marginLeft: 8,
  },
});
