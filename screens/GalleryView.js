import React, { useState, useEffect, useCallback } from 'react';
import { Image, ImageBackground, StyleSheet, View, ScrollView, SafeAreaView, Pressable, Dimensions, RefreshControl } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function PostFeed(props) {
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        wait(1000).then(() => setRefreshing(false));
        }, []);

    const [posts, setPosts] = useState([])
    const getPosts = async () => {
        try {
            const response = await fetch('https://stark-cliffs-29867.herokuapp.com/posts/')
            const data = await response.json()
            setPosts(data.reverse());
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line
    }, [refreshing]);

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
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingBottom: 100,
            alignContent: 'center',
            justifyContent: 'center',
    };
    
    return (
        <ImageBackground source={require('../assets/bricks.png')} style={styles.image}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        tintColor='white'
                    />
                }
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