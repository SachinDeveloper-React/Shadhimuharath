import {Text, View, StyleSheet} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  text: string;
  colors: string[];
};
const GradientText = ({text, colors}: Props) => (
  <MaskedView maskElement={<Text style={styles.gradientText}>{text}</Text>}>
    <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <Text style={[styles.gradientText, {opacity: 0}]}>{text}</Text>
    </LinearGradient>
  </MaskedView>
);

const styles = StyleSheet.create({
  title: {
    color: '#8B2729',
    fontSize: 20,
    fontWeight: '500',
  },
  gradientText: {
    fontSize: 16,
    fontWeight: '400',
  },
});

export default GradientText;
