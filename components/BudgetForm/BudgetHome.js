import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Alert from './Alert';
import BudgetForm from './BudgetForm';
import BudgetItem from './BudgetItem';
import BudgetList from './BudgetList';
import uuid from 'uuid/v4'


const initialExpenses = [
    { id: uuid(), charge: 'rent', amount: 1600 },
    { id: uuid(), charge: 'car payment', amount: 400 },
    { id: uuid(), charge: 'credit card bill', amount: 1200 }

];
console.log(initialExpenses);

const BudgetHome = () => {
    return (
        <View>
            <Text>Hello from BudgetHome</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});
export default BudgetHome;