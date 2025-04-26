import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: ThemeColors.GRAY,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    color: ThemeColors.WHITE,
    fontWeight: 'bold',
    padding: 10,
  },
  input: {
    fontSize: 25,
    paddingLeft: 10,
    paddingVertical: 10,
    color: ThemeColors.WHITE,
  },
  error: {
    marginTop: 5,
    color: ThemeColors.RED,
    padding: 10,
    fontSize: 20,
    borderTopWidth: 1,
    borderColor: ThemeColors.WHITE,
  },
});
