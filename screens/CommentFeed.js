import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView, View } from 'react-native';
import Data from '../data/seed_data';

export default function CommentFeed () {
  
    return (
        <View>
            <ScrollView>
                
                {
                    Data.map((post, idx) => {
                        return (
                            <SafeAreaView key={idx} >
                                { 
                                    post.comments.map((comment, idx) => {
                                        return (
                                            <Text style={styles.comment}>
                                                {comments.comment}
                                            </Text>
                                    )})
                                }
                            </SafeAreaView>
                        )
                    })
                }               
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    comment: {
        fontSize: 16,
        flexDirection: 'column',
    }
})