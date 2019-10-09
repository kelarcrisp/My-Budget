import React from 'react';
import { StyleSheet, Text, View, ImageBackground, } from 'react-native';
import HomePage from './components/HomePage/HomePage'
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base'
import * as Facebook from 'expo-facebook'
import background from './images/background.png';
import LogoEmblem from './components/HomePage/LogoEmblem';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import BudgetHome from './components/BudgetForm/BudgetHome';

import Profile from './BottomNavigator/Profile';

const firebaseConfig = {
  apiKey: 'AIzaSyD3jADMJNmy1XfeSboA36tnbLdtYebjK-Y',
  authDomain: 'my-budget-4d50e.firebaseapp.com',
  projectId: "my-budget-4d50e",
  databaseURL: 'https://my-budget-4d50e.firebaseio.com',
  storageBucket: ''
}
firebase.initializeApp(firebaseConfig);

class HomeScreen extends React.Component {
  //this line took away the white space at the top of the screen
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props);
    this.state = ({
      email: '',
      password: '',

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

  async loginWithFacebook() {


    console.log('SHOW BUDGET');
    let AppID = '566023677470057';
    const { type, token, permissions } = await Facebook.logInWithReadPermissionsAsync(AppID,
      {
        permissions: ['public_profile'],
      });

    if (type === 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)
      console.log('it worked');
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error)

      })
    }
  }




  render() {

    {

      return (

        <ImageBackground style={styles.container} source={require('./images/background.png')}>

          <Form>
            <LogoEmblem />

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
              onPress={() => { this.loginUser(this.state.email, this.state.password); this.props.navigation.navigate('BudgetHome') }}>
              <Text>Login</Text>
            </Button>

            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={() => this.signUpUser(this.state.email
              )}>
              <Text>SignUp</Text>
            </Button>

            <Button style={{ marginTop: 10 }}
              full
              rounded
              primary
              onPress={() => { this.loginWithFacebook(this.state.password); this.props.navigation.navigate('BudgetHome') }}
            >
              <Text>Login with FaceBook</Text>
            </Button>

          </Form>


        </ImageBackground>
      )
    }
  }
}

const switchNav = createBottomTabNavigator({

  BudgetHome: {
    screen: BudgetHome

  },
  Profile: {
    screen: Profile
  }
}, {
    initialRouteName: 'BudgetHome'
  })

const SecondNavGroup = createSwitchNavigator({
  Home: {
    screen: HomeScreen
  },
  Feed: {
    screen: switchNav
  }
})





const AppContainer = createAppContainer(SecondNavGroup)

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }

}

const styles = StyleSheet.create({
  container: {


  },
  container: {
    width: '100%',
    height: '100%',
    paddingTop: 100
  },

})


