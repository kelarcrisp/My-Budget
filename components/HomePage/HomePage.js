import React from 'react'

import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import Login from './Login';
import LogoEmblem from './LogoEmblem';
import background from '../../images/background.png';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

class HomePage extends React.Component {
  render() {
    return (
      <ImageBackground style={styles.container} source={require('../../images/background.png')}>
        <View >
          <LogoEmblem />
          <Login />



          <View style={styles.signInTextContainer}>
            <Text style={styles.accountText}>Don't have an account yet?</Text>
            <Text style={styles.signUpButton}> Sign Up</Text>
          </View>

        </View>
      </ImageBackground >

    )

  }
}

const styles = StyleSheet.create({
  signInTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  //change this color from black to soemthing else later
  accountText: {
    flexDirection: 'row',
  },
  signUpButton: {
    color: 'gray',
    fontWeight: '900'
  },
  container: {
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default HomePage;



