import React from 'react'
import { StyleSheet, View, Text, Image, } from 'react-native';

export function CardHeader(props) {
    return (
        <View style={styles.CardHeader}>
            {props.children}
        </View>
)}

export function User(props){
    return (
        <Text style={{fontWeight:'bold'}}>{props.children}</Text>
    )
}

export function CardImage(props){
    return (
        <Image style={styles.image} source={{uri: props.imgUrl}}/>
    )
} 

export function CardFooter(props) {
    return (
        <Text style={styles.CardFooter}>
        {props.children}
        </Text>
)}

export function Body(props) {
    return (
        <Text>
        : {props.children}
        </Text>
)}

export function Card(props) {
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        borderRadius: 5,
        elevation: 5,
        backgroundColor:'#efefef',
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
    },
    CardHeader: {
        height: 50,
        width: 350,
        padding: 15,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    CardFooter: { 
        height: 'auto',
        width: 350,
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        width: 320,
        height: 320,
        marginTop:10,
        resizeMode:'cover',
      },
})
