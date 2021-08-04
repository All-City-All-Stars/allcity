import React from 'react'
import { StyleSheet, View, Text, Image, } from 'react-native';
import Colors from '../data/Colors.js'
    
const randomColor = {
        shadowColor: Colors[Math.floor(Math.random() * Colors.length)]
    }

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
    const {url} = props
    return (
        <Image style={styles.image} source={{uri: `${url}`}}/>
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
        {props.children}
        </Text>
)}


export function Card(props) {
    return (
        <View style={[styles.card, randomColor]}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        elevation: 3,
        backgroundColor:'#efefef',
        shadowOffset: {width: 1, height: 2},
        // shadowColor: 'green',
        shadowOpacity: 0.8,
        shadowRadius: 8,

    },
    CardHeader: {
        height: 60,
        width: 350,
        padding: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    CardFooter: { 
        height: 60,
        width: 350,
        padding: 10,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    image: {
        width: 350,
        height: 300,
        resizeMode: 'cover',
      },
})