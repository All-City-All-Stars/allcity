import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/Navigator';
import CommentFeed from './screens/CommentFeed';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <Nav />
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
