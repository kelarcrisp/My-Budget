import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import HomePage from './components/HomePage/HomePage';
import background from './images/background.png';
import { Button } from 'react-native-elements';

const App = () => {

  {

    return (
      <ImageBackground source={background} style={styles.backgroundContainer}>
        <View >
          <HomePage />

        </View>
      </ImageBackground>
    );
  }
}




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

export default App;
