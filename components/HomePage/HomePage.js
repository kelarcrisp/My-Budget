import React from 'react'
import { Input, Button } from 'react-native-elements';
import { StyleSheet, Text, View, Image, } from 'react-native';
import Logo from '../../images/Logo.png';


import Login from './Login';
const HomePage = () => {

  return (
    <View >
      <Image source={Logo} style={styles.logo} />
      <Button
        title="Create an Account"

      >Go to Register an account</Button>
      <Text>{"\n"}</Text>
      <Button
        title="Login to your Account"

      />
      <Text>
      </Text>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {

  },
  button: {

  },
  logo: {
    alignContent: 'center'
  }
});
export default HomePage;