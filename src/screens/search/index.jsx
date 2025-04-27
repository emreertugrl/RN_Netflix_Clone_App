//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const SearchScreen = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>SearchScreen</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default SearchScreen;
