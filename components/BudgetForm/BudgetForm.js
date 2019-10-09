import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    handleBudget = () => {
        setBudget({

        })
    }

    return (
        <View>


        </View>
    )
}


const styles = StyleSheet.create({
    enterBudget: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});
export default BudgetForm