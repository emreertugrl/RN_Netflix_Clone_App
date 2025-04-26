//import liraries
import {View, Text, Image} from 'react-native';
import Button from '../../components/ui/button';
import {WATCHLIST} from '../../utils/routes';
import {getStartStyle} from '../../styles/getStartStyle';

// create a component
const GetStarted = ({navigation, route}) => {
  return (
    <View style={getStartStyle.container}>
      <View style={getStartStyle.bannerContainer}>
        <Image
          style={getStartStyle.banner}
          source={require('../../assets/image/banner.png')}
        />
        <View style={getStartStyle.bannerTextContainer}>
          <Text style={getStartStyle.bannerText}>
            Unlimited entertainment, one low price.
          </Text>
          <Text style={getStartStyle.bannerSubTitle}>
            All of Netflix, starting at just $10.
          </Text>
        </View>
      </View>
      <View style={getStartStyle.buttonContainer}>
        <Button
          onPress={() => navigation.navigate(WATCHLIST)}
          title="Get Started"
          status="primary"
        />
      </View>
    </View>
  );
};

export default GetStarted;
