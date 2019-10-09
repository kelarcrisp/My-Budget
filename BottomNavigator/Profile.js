import React, { Component } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'

const Profile = () => {
    return (
        <View>
            <SafeAreaView style={styles.container} >
            </SafeAreaView >
            <Text h2>Profile</Text>
            <View>
                <TextInput
                    placeholder='enter your budget'

                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00C8FF'
    }
})
export default Profile
