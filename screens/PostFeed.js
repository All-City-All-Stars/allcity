import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Body, Card, CardFooter, CardHeader, CardImage, User } from '../components/Card'
import Data from '../data/seed_data';


function PostFeed(props) {
    return (
        <ScrollView>
            {
                Data.map((post, idx) => {
                    return (
                        <SafeAreaView key={idx}>
                            <Card>
                                <CardHeader>
                                    <User children={post.author} />
                                </CardHeader>
                                <CardImage imgUrl={post.image_url} />
                                <CardFooter>
                                    <User children={post.author} />
                                    <Body children={post.caption_body} />
                                </CardFooter>
                            </Card>
                        </SafeAreaView>
                    )
                })
            }
        </ScrollView>
    );
}

export default PostFeed;