import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Display from './components/Display/Display';

export default function App() {
  return (
    <View style={styles.container}>
      <Display />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkorange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
