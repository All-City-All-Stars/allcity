import React, { useState, useEffect, useCallback } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Pressable, RefreshControl } from 'react-native';
import { Body, Card, CardFooter, CardImage, User } from '../components/Card'
import Data from '../data/seed_data';
import {useNavigation} from '@react-navigation/native'

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function PostFeed(props) {

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
            setPosts(data.reverse())
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts()
        // eslint-disable-next-line
    }, [refreshing])

    const navigation = useNavigation();
    const fillCrown = require('../assets/crownfill.png');
    const emptyCrown = require('../assets/crown.png');
    let crownState = true;
    const [crown, setCrown] = useState(crownState);
    const iconDisplay = crown ? emptyCrown : fillCrown
    
    return (
        <ImageBackground source={require('../assets/bricks.png')} style={styles.image}>
            <ScrollView 
                refreshControl={
            <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                tintColor="white"
            />
        }>
                {
                    posts.map((post, idx) => {

                        const onPress = () => {
                            setCrown(!crown);
                        };

                        return (
                            <SafeAreaView key={idx}>
                                <Card>
                                    <Text style={styles.location}>📍{post.location}</Text>
                                    <CardImage imgUrl={post.image_url} />
                                    <CardFooter>
                                        <User children={post.author} />
                                        <Body children={post.caption_body} />
                                    </CardFooter>
                                       
                                    <View style={styles.iconcontainer}>
                                        <Pressable
                                            accessible={true}
                                            accessibilityLabel={'Double tap to like this post'}
                                            onPress={onPress}>
                                            <Image 
                                                key={idx}
                                                style={styles.icons} 
                                                source={iconDisplay} />
                                        </Pressable>

                                        <TouchableOpacity
                                            accessible={true}
                                            accessibilityLabel={'Double tap to view the comments screen'} 
                                            key={idx} 
                                            onPress={() => {navigation.navigate('Comments', {postIdx: idx})}} >
                                                <Image style={styles.icons} source={require('../assets/roller.png')} />
                                        </TouchableOpacity>
                                    </View>
                                </Card>
                            </SafeAreaView>
                        )
                    })
                }
            </ScrollView>
        </ImageBackground>

    );
}

const styles = StyleSheet.create({
    icons: {
        width: 50,
        height: 50,
        marginHorizontal: 120,
        marginBottom: 20,
    },
    iconcontainer: {
        flexDirection: 'row',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    location: {
        fontWeight: 'bold',
        paddingTop: 10,
    }
})