import React from "react";
import { View, Text, StyleSheet } from "react-native";

export function CommentCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.comment}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "auto",
    backgroundColor: "#e9e9e9",
    marginHorizontal:10,
    borderRadius:5,
    padding: 20,
    marginTop:20,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: '#000'
  },

  comment: {
    width: 350,
    borderBottomColor: "#222222",
    borderBottomWidth: 1,
  },
});