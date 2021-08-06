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

export default function CommentFeed({ route }) {

  const { postIdx } = route.params;

  return (
    <SafeAreaView>
      <ScrollView>
        {/* {Data.map((post, index) => {
          return (
            <> */}
              {Data[postIdx].comments.map((comment, i) => {
                return (
                  <CommentCard key={i}>
                    <Text>{comment}</Text>
                  </CommentCard>
                );
              })}
            {/* </>
          );
        })} */}
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
