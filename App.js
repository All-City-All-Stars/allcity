import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/Navigator';
import CommentFeed from './screens/CommentFeed';
import PostFeed from './screens/PostFeed';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <ImageBackground source={require('./assets/bricks.png')} style={styles.image}>
        <Header />
        <PostFeed />
        <Nav />
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: 'center',
  }
});
