import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements'
import BudgetItem from './BudgetItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//puting expenses in as a param is just destructoring it from the props


const BudgetList = ({ expenses }) => {

    return (
        <View>

            {expenses.length > 0 && (<Button type='clear' title='clear entire list'></Button>)}

            <FlatList data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text> item charge:{item.charge}</Text>
                            <Text> amount : ${item.amount}</Text>
                        </View>
                    )
                }}
            >

            </FlatList>
        </View>

        //go back and add an icon to this button !!! and find out whyh the color isnt working
    )
}

const styles = StyleSheet.create({
    button: {
        width: '90%',
        height: 40,
        padding: 10,
        borderRadius: 8
    }
});
export default BudgetList;