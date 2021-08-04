import React from 'react';
import { Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Data from '../data/seed_data';

export default function CommentFeed () {
    return (
        <ScrollView>
            {
                Data.map((comment, idx) => {
                    return (
                        <SafeAreaView key={idx} >
                            <Text style={styles.comment}>
                                {comment.comments[idx]}
                            </Text>
                        </SafeAreaView>
                    )
                })
            }
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    comment: {
        fontSize: 16,
        flexDirection: 'column',
    }
})