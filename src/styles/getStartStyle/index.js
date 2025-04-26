import {StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

export const getStartStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bannerContainer: {flex: 5},
  bannerTextContainer: {
    position: 'absolute',
    bottom: 40,
    height: '15%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'space-between',
    padding: 5,
  },
  bannerText: {
    fontSize: 24,
    color: ThemeColors.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bannerSubTitle: {
    fontSize: 18,
    color: ThemeColors.WHITE,
    textAlign: 'center',
    fontWeight: '400',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: ThemeColors.BLACK,
    justifyContent: 'center',
  },
});
