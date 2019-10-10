import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, } from 'react-native';
import { Button } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const BudgetForm = () => {

    const [budget, setBudget] = useState(0);

    const [item, setItem] = useState('');
    const [cost, setCost] = useState('')

    return (
        <View>
            <Text style={styles.add}>Add Item</Text>
            <TextInput placeholder='Item charge' style={styles.form} onChangeText={value => setItem(value)} value={item} />
            <Text style={styles.add}>Cost</Text>
            <TextInput style={styles.form} placeholder='cost' onChangeText={value => setCost(value)} value={cost} />
            <View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    form: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    add: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#00C8FF'
    }
});
export default BudgetForm