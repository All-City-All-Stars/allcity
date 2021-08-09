import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../assets/AllCityLogo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gold',
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
    logo: {
        width: 300,
        height: 80,
        marginTop: 20,
        shadowColor: "#FF1493",
        shadowOffset: { width: 0, height: 8},
        shadowOpacity: 0.85,
        shadowRadius: 5.00,
    },
})