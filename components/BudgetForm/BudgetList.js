import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { Button, Input } from 'react-native-elements'
import BudgetItem from './BudgetItem';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

//puting expenses in as a param is just destructoring it from the props


const BudgetList = ({ expenses }) => {

    return (
        <View>
            <View style={styles.button}>

                <Button type='clear' title='Add item'></Button>

                {expenses.length > 0 && (<Button type='clear' title='clear entire list'></Button>)}
            </View>
            <FlatList data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View>
                            <Text> item charge:{item.charge}</Text>
                            <Text> amount : ${item.amount}</Text>
                            <Text>{"\n"}</Text>
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
        justifyContent: 'center',
        flexDirection: 'row'

    }
});
export default BudgetList;