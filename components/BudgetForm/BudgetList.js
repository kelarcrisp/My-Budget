import React from 'react';
import { Text, StyleSheet, View, FlatList, Button } from 'react-native';
import BudgetItem from './BudgetItem';

//puting expenses in as a param is just destructoring it from the props


const BudgetList = ({ expenses }) => {

    return (
        <FlatList data={expenses}
            keyExtractor={(expense, index) => index.toString()}
            renderItem={({ expense, index }) => {
                return (
                    <BudgetItem />
                )
            }}
        >

        </FlatList>

    )
}

const styles = StyleSheet.create({
    text: {

    }
});
export default BudgetList;