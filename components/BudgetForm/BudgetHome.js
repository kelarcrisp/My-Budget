import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import Alert from './Alert';
import BudgetForm from './BudgetForm';

import BudgetList from './BudgetList';
import uuid from 'uuid/v4'


// to use uuid all you have to do is the following, import it and invoke it on the id: property
const initialExpenses = [
    { id: uuid(), charge: 'rent', amount: 1600 },
    { id: uuid(), charge: 'car payment', amount: 400 },
    { id: uuid(), charge: 'credit card bill', amount: 1200 }

];


const BudgetHome = () => {
    const [expenses, setExpenses] = useState(initialExpenses);


    return (
        <View>
            <SafeAreaView style={styles.container} >
            </SafeAreaView >
            <Text h2>Budget Calculator</Text>
            <View>

                <Text>Your Monthly Budget is: {}</Text>
                <Text>savings left for the month: {}</Text>
                <Text h5>Total Spending so far this month: {expenses.reduce((total, current) => {
                    return total += current.amount
                }, 0)}</Text>
                <BudgetForm />

            </View>
            <ScrollView>
                <BudgetList expenses={expenses} />
            </ScrollView>



        </View>

    )
}
//the reduce function above always takes two params, the total and the current value or index youre on. 
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C8FF',


    },
    statusBar: {

    }
});
export default BudgetHome;