import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import HomePage from './components/HomePage/HomePage';
import background from './images/background.png';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation-stack';
import { Button } from 'react-native-elements';
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.backgroundContainer}>
        <View >
          <HomePage />

        </View>
      </ImageBackground>
    );
  }
}

export default createAppContainer(createSwitchNavigator(
  {
    HomePage: HomePage,
    Login: Login,
    Register: Register
  }
))
const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {

  }


});
