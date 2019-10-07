import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import Alert from './Alert';
import BudgetForm from './BudgetForm';
import BudgetItem from './BudgetItem';
import BudgetList from './BudgetList';
import uuid from 'uuid/v4'

// to use uuid all you have to do is the following, import it and invoke it on the id: property
const initialExpenses = [
    { id: uuid(), charge: 'rent', amount: 1600 },
    { id: uuid(), charge: 'car payment', amount: 400 },
    { id: uuid(), charge: 'credit card bill', amount: 1200 }

];
console.log(initialExpenses);

const BudgetHome = () => {
    const [expenses, setExpenses] = useState(initialExpenses);

    return (

        <View style={styles.container}>

            <Text h2>Budget Calculator</Text>

            <Text>Hello from BudgetHome</Text>
            <BudgetList expenses={expenses} />
            <View>
            </View>
            <Text h3>Total Spending : {expenses.reduce((total, current) => {
                return total += current.amount
            }, 0)}</Text>
        </View>

    )
}
//the reduce function above always takes two params, the total and the current value or index youre on. 
const styles = StyleSheet.create({
    container: {


    },
    statusBar: {

    }
});
export default BudgetHome;