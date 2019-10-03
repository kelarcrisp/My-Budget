import React from 'react'
import { Input, Button } from 'react-native-elements';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Login from './Login';
import LogoEmblem from './LogoEmblem';
const HomePage = () => {

  return (
    <View >
      <LogoEmblem />
      <Login />
      <View style={styles.signInTextContainer}>
        <Text style={styles.signUpText}>Don't have an account yet? Signup</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  signInTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  //change this color from black to soemthing else later
  signUpText: {
    paddingBottom: 350
  }
});
export default HomePage;