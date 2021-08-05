import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image } from 'react-native';
import Data from '../data/seed_data';

export default function CommentFeed () {
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
                                            <CommentCard key={i}>
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

const styles = StyleSheet.create({
    comment: {
        fontSize: 16,
        flexDirection: 'column',
    }
})