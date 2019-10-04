import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook'



const firebaseConfig = {
  apiKey: 'AIzaSyD3jADMJNmy1XfeSboA36tnbLdtYebjK-Y',
  authDomain: 'my-budget-4d50e.firebaseapp.com',
  projectId: "my-budget-4d50e",
  databaseURL: 'https://my-budget-4d50e.firebaseio.com',
  storageBucket: ''
}
firebase.initializeApp(firebaseConfig);



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: ''
    })
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log(user)
      }
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('please enter atleast 6 characters')
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
        console.log(user);

      })
    } catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)

      })
    } catch (error) {
      console.log(error.toString());
    }
  }
  ///////THIS DOESNT WORK
  async loginWithFacebook() {
    let AppID = '566023677470057';
    console.log('it failed')
    const { type, token, permissions } = await Facebook.logInWithReadPermissionsAsync(AppID,
      {
        permissions: ['public_profile'],
      });
    console.log('dsdsdsd');
    if (type === 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      console.log('it worked');
      firebase.auth().signInWithCredential(credential).catch((error) => {
        console.log(error)
      })
    }
  }




  render() {
    {

      return (
        <Container style={styles.container}>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => this.setState({ email })}
              />

            </Item>
            <Item floatingLabel>
              <Label>password</Label>
              <Input
                secureTextEntry={true}
                autCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => this.setState({ password })}
              />

            </Item>
            <Button style={{ marginTop: 10 }}
              full
              rounded
              success
              onPress={() => this.loginUser(this.state.email, this.state.password)}>
              <Text>Login</Text>
            </Button>

            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={() => this.signUpUser(this.state.email, this.state.password)}>
              <Text>SignUp</Text>
            </Button>

            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={() => this.loginWithFacebook()}
            >
              <Text>Login with FaceBook</Text>
            </Button>
          </Form>

        </Container>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 10
  },
})

