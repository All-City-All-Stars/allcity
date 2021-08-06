import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import Data from "../data/seed_data";
import { CommentCard } from "../components/Comment";

export default function CommentFeed({ route }) {
  const { postIdx } = route.params;

  return (
    <ImageBackground
      source={require("../assets/bricks.png")}
      style={styles.image}
    >
      <ScrollView>
        {Data[postIdx].comments.map((comment, i) => {
          return (
            <CommentCard key={i}>
              <Text style={{ fontWeight: "bold" }}>User: </Text>
              <Text>{comment}</Text>
            </CommentCard>
          );
        })}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  comment: {
    fontSize: 16,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "flex-start",
  },
});
