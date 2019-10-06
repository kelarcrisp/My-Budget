import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Logo from '../../images/Logo.png';
const LogoEmblem = () => {
    return (
        <View style={styles.container}>

            <Image source={Logo} style={styles.logo} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {

        borderRadius: 15,

        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default LogoEmblem;
