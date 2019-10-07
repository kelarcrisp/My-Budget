import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>dfsfdsf</Text>
            </View>
        )
    }
}

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen
    }
})

const AppContainer = createAppContainer(AppNavigator)

export default createAppContainer;