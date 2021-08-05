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
    backgroundColor: "#efefef",
    borderBottomColor: "#222222",
    borderBottomWidth: 1,
    padding: 10,
  },

  comment: {
    width: 350,
    borderBottomColor: "#222222",
    borderBottomWidth: 1,
  },
});


