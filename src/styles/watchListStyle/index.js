import {StyleSheet} from 'react-native';
import {getRandomColor} from '../../utils/functions';
import {width} from '../../utils/constants';
import {ThemeColors} from '../../theme/themeColors';

export const watchListStyle = StyleSheet.create({
  watchListContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  watchListIcon: [
    {
      width: width * 0.4,
      height: width * 0.4,
      justifyContent: 'center',
      alignItems: 'center',

      borderRadius: 15,
    },
    {backgroundColor: getRandomColor()},
  ],
  text: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});
