import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/Navigator';
import CommentFeed from './screens/CommentFeed';
import PostFeed from './screens/PostFeed';

export default function App() {
  return (
    <>
      <Nav />
      <PostFeed />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
