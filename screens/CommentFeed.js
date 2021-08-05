import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import Data from '../data/seed_data';
import { CommentCard } from '../components/Comment';

export default function CommentFeed () {
    // console.log(Data[0].comments);
    return (
        <SafeAreaView>
            <ScrollView>  
                {
                    Data.map((post, idx) => {
                    
                        return (
                            <>
                                { 
                                    post.comments.map((comment, i) => {
                                        return (
                                            <CommentCard>
                                                <Text>
                                                    {comment}
                                                </Text>
                                            </CommentCard>
                                    )})
                                }
                            </>
                        )
                    })
                }               
            </ScrollView>
        </SafeAreaView>
    )
};

