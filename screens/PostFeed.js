import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Body, Card, CardFooter, CardImage, User } from '../components/Card'
import Data from '../data/seed_data';

import {useNavigation} from '@react-navigation/native'

const onPress = () => {
console.log('====================================');
console.log();
console.log('====================================');
}


export default function PostFeed(props) {
    const navigation = useNavigation()
    return (
        <ImageBackground source={require('../assets/bricks.png')} style={styles.image}>
            <ScrollView>
                {
                    Data.map((post, idx) => {
                        return (
                            <SafeAreaView key={idx}>
                                <Card>
                                    <CardImage imgUrl={post.image_url} />
                                    <CardFooter>
                                        <User children={post.author} />
                                        <Body children={post.caption_body} />
                                        <Text>Location: {post.location}</Text>
                                    </CardFooter>
                                        {
                                            post.comments.length ?
                                            <TouchableOpacity onPress={() => {navigation.navigate('Comments')}} >
                                                <Text>View Comments...</Text>
                                            </TouchableOpacity>
                                            : null
                                            
                                        }
                                    <View style={styles.iconcontainer}>
                                        <Image style={styles.icons} source={require('../assets/crown.png')} />
                                        <Image style={styles.icons} source={require('../assets/roller.png')} />
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
    }
})