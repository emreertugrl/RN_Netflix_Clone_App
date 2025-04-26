import {StyleSheet} from 'react-native';
import {width} from '../../utils/constants';
import {ThemeColors} from '../../theme/themeColors';

export const watchListStyle = StyleSheet.create({
  watchListHeaderContainer: {alignItems: 'center'},
  watchListHeaderText: {
    color: ThemeColors.WHITE,
    fontSize: 30,
    fontWeight: '500',
    marginTop: 10,
  },

  watchListContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  watchListIcon: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  text: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
