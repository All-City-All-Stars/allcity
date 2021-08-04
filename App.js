import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Nav from './navigation/TabNavigator';
import CommentFeed from './screens/CommentFeed';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="hidden" />
      {/* <CommentFeed /> */}
      <Nav />
    </View>
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
