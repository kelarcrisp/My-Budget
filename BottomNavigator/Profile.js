import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'

const Profile = () => {

    const [income, setIncome] = useState('');
    const [goal, setGoal] = useState('')
    return (
        <View>
            <SafeAreaView style={styles.container} >
            </SafeAreaView >
            <Text style={styles.profile} h1>Profile</Text>
            <View>
                <Text style={styles.text}>Enter your monthly Income</Text>
                <TextInput

                    style={styles.income}
                    placeholder='enter your monthly income'
                    value={income}
                    onChangeText={(value) => setIncome(value)}
                />
            </View>
            <View>
                <Text style={styles.text}>Enter your savings goal</Text>
                <TextInput
                    style={styles.income}
                    value={goal}
                    onChangeText={(value) => setGoal(value)}
                    placeholder='savings goal'

                />
            </View>

            <Text>{income}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C8FF'
    },
    income: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1
    },
    profile: {
        textAlign: 'center',

    },
    text: {
        textAlign: 'center',
        color: '#00C8FF'
    }
})
export default Profile
