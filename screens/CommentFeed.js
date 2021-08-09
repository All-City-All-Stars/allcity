import React from "react";
import {
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Button,
  View,
} from "react-native";
import Data from "../data/seed_data";
import { CommentCard } from "../components/Comment";

export default function CommentFeed({ route, navigation }) {
  const { postIdx } = route.params;

  return (
    <ImageBackground
      source={require("../assets/bricks.png")}
      style={styles.image}
    >
      <View style={styles.buttonView} accessible={true} accessibilityLabel={'Tap to go back'}>
        <Button
          onPress={() => navigation.goBack()}
          title='< BACK'
          color='white'
          style={{fontWeight: 'bold'}}
        />
      </View>
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
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    width:'100%',
    backgroundColor: 'rgba(000,000,000, 0.5)',
    fontWeight: 'bold'
  }
});
