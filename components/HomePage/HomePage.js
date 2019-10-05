import React from 'react'

import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';

import LogoEmblem from './LogoEmblem';
import background from '../../images/background.png';

class HomePage extends React.Component {
  render() {
    return (

      <View >
        <LogoEmblem />


      </View>


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



