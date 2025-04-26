import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

const Button = props => {
  const {title, status} = props;

  const setColor = () => {
    switch (status) {
      case 'primary':
        return ThemeColors.RED;
      default:
        return ThemeColors.BLACK;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColors.WHITE,
  },
});
