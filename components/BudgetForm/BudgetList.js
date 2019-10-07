import React from 'react';
import { Text, StyleSheet } from 'react-native';
import BudgetItem from './BudgetItem';

const BudgetList = () => {
    return (
        <View>
            <BudgetItem />
            <Text>Hello from BudgetForm</Text>
        </View>

    )
}

const styles = StyleSheet.create({

});
export default BudgetList