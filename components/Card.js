import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const shadowColors = [
    'AliceBlue',
    'AntiqueWhite',
    'Aqua',
    'Aquamarine',
    'Azure',
    'Beige',
    'Bisque',
    'Black',
    'BlanchedAlmond',
    'Blue',
    'BlueViolet',
    'Brown',
    'BurlyWood',
    'CadetBlue',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'CornflowerBlue',
    'Cornsilk',
    'Crimson',
    'Cyan',
    'DarkBlue',
    'DarkCyan',
    'DarkGoldenRod',
    'DarkGray',
    'DarkGrey',
    'DarkGreen',
    'DarkKhaki',
    'DarkMagenta',
    'DarkOliveGreen',
    'DarkOrange',
    'DarkOrchid',
    'DarkRed',
    'DarkSalmon',
    'DarkSeaGreen',
    'DarkSlateBlue',
    'DarkSlateGray',
    'DarkSlateGrey',
    'DarkTurquoise',
    'DarkViolet',
    'DeepPink',
    'DeepSkyBlue',
    'DimGray',
    'DimGrey',
    'DodgerBlue',
    'FireBrick',
    'FloralWhite',
    'ForestGreen',
    'Fuchsia',
    'Gainsboro',
    'GhostWhite',
    'Gold',
    'GoldenRod',
    'Gray',
    'Grey',
    'Green',
    'GreenYellow',
    'HoneyDew',
    'HotPink',
    'IndianRed',
    'Indigo',
    'Ivory',
    'Khaki',
    'Lavender',
    'LavenderBlush',
    'LawnGreen',
    'LemonChiffon',
    'LightBlue',
    'LightCoral',
    'LightCyan',
    'LightGoldenRodYellow',
    'LightGray',
    'LightGrey',
    'LightGreen',
    'LightPink',
    'LightSalmon',
    'LightSeaGreen',
    'LightSkyBlue',
    'LightSlateGray',
    'LightSlateGrey',
    'LightSteelBlue',
    'LightYellow',
    'Lime',
    'LimeGreen',
    'Linen',
    'Magenta',
    'Maroon',
    'MediumAquaMarine',
    'MediumBlue',
    'MediumOrchid',
    'MediumPurple',
    'MediumSeaGreen',
    'MediumSlateBlue',
    'MediumSpringGreen',
    'MediumTurquoise',
    'MediumVioletRed',
    'MidnightBlue',
    'MintCream',
    'MistyRose',
    'Moccasin',
    'NavajoWhite',
    'Navy',
    'OldLace',
    'Olive',
    'OliveDrab',
    'Orange',
    'OrangeRed',
    'Orchid',
    'PaleGoldenRod',
    'PaleGreen',
    'PaleTurquoise',
    'PaleVioletRed',
    'PapayaWhip',
    'PeachPuff',
    'Peru',
    'Pink',
    'Plum',
    'PowderBlue',
    'Purple',
    'RebeccaPurple',
    'Red',
    'RosyBrown',
    'RoyalBlue',
    'SaddleBrown',
    'Salmon',
    'SandyBrown',
    'SeaGreen',
    'SeaShell',
    'Sienna',
    'Silver',
    'SkyBlue',
    'SlateBlue',
    'SlateGray',
    'SlateGrey',
    'Snow',
    'SpringGreen',
    'SteelBlue',
    'Tan',
    'Teal',
    'Thistle',
    'Tomato',
    'Turquoise',
    'Violet',
    'Wheat',
    'White',
    'WhiteSmoke',
    'Yellow',
    'YellowGreen',
    ]
    
const randomColor = {
        shadowColor: shadowColors[Math.floor(Math.random() * shadowColors.length)]
    }

    console.log('====================================');
    console.log(randomColor);
    console.log('====================================');

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
