import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, View, Text, ScrollView, SafeAreaView, TouchableOpacity, Pressable } from 'react-native';
import { Body, Card, CardFooter, CardImage, User } from '../components/Card'
import Data from '../data/seed_data';


import {useNavigation} from '@react-navigation/native'

export default function PostFeed(props) {

    const navigation = useNavigation();
    const fillCrown = require('../assets/crownfill.png');
    const emptyCrown = require('../assets/crown.png');
    let crownState = true;

    return (
        <ImageBackground source={require('../assets/bricks.png')} style={styles.image}>
            <ScrollView>
                {
                    Data.map((post, idx) => {

                        const [crown, setCrown] = useState(crownState);
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
                                            onPress={onPress}>
                                            <Image 
                                                key={idx}
                                                style={styles.icons} 
                                                source={crown ? emptyCrown : fillCrown} />
                                        </Pressable>

                                        <TouchableOpacity 
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