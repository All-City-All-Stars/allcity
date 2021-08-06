import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import Data from "../data/seed_data";
import { CommentCard } from "../components/Comment";

export default function CommentFeed({ idx }) {
  return (
    <SafeAreaView>
      <ScrollView>
        {Data.map((post, index) => {
          return (
            <>
              {post.comments.map((comment, i) => {
                return (
                  <CommentCard key={i}>
                    <Text>{comment.idx}</Text>
                  </CommentCard>
                );
              })}
            </>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  comment: {
    fontSize: 16,
    flexDirection: "column",
  },
});
