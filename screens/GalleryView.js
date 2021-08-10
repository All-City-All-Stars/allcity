import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, View, ScrollView, SafeAreaView, Pressable, Dimensions } from 'react-native';
import {Card, CardImage} from '../components/Card';
import {useNavigation} from '@react-navigation/native'
import { black, white } from 'ansi-colors';

export default function PostFeed(props) {

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await fetch('https://stark-cliffs-29867.herokuapp.com/posts/')
            const data = await response.json()
            setPosts(data)
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line
    }, [])

    const navigation = useNavigation();

    const windowWidth = Dimensions.get('window').width;
    // const windowHeight = Dimensions.get('window').height;
    const imageWidth = windowWidth / 2.4;
    const imageStyle = {
        width: imageWidth,
        height: 200,
        borderWidth: 1,
        borderColor: 'white'
    };
    const gridStyle = {
            padding: 30,
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            paddingBottom: 100,
            alignContent: 'center',
            justifyContent: 'center',
    };
    
    return (
        <ImageBackground source={require('../assets/bricks.png')} style={styles.image}>
            <ScrollView
                contentContainerStyle={gridStyle} >
                {
                    posts.map((post, idx) => {
                        return (
                            <SafeAreaView 
                                key={idx}>
                                <Image
                                    source={{uri: post.image_url}}
                                    style={imageStyle}
                                />
                            </SafeAreaView>
                        )
                    })
                }
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',   
    },
})