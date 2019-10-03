import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import HomePage from './components/HomePage/HomePage';
import background from './images/background.png';
import { Button } from 'react-native-elements';
import { NativeRouter, Switch, Route } from 'react-router-native'
import RegisterForm from './components/HomePage/RegisterForm';
const App = () => {

  {

    return (
      <NativeRouter >
        <View >
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </View>
      </NativeRouter>
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
