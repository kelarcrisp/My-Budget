
import React, { Component } from 'react'
import {
  Text, View, StyleSheet, Image, StatusBar,
  TextInput, TouchableOpacity
} from 'react-native'


const Login = () => {

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder="username" />
      <TextInput style={styles.input} placeholder="password" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>


  )

}



const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 100

  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    marginVertical: 10,

  },
  button: {
    width: 150,
    borderRadius: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'gray',
    textAlign: 'center'


  }

});

export default Login;