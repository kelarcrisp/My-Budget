import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const BudgetItem = ({ expense }) => {


    return (
        <View>
            <Text>{expense.id}</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});
export default BudgetItem