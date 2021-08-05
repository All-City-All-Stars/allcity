import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import InputWithLabel from "../components/InputWithLabel";

export default function NewPostForm() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmation_password, setConfirmationPassword] =
  //   useState("");
  const [image_url, setImageURL] = useState("");
  const [author, setAuthor] = useState("");
  const [post_time, setPostTime] = useState("");
  const [location, setLocation] = useState("");
  const [caption_body, setCaptionBody] = useState("");

  function confirmPasswords(props) {
    const {
      nativeEvent: { text },
    } = props;

    if (text !== password) {
      alert("Passwords do not match. Please try again");
    } else {
      alert(
        "🤩🤩🤩🤩  ALL CITY ALL STARS FOR LIFE 🤩🤩🤩🤩"
      );
    }
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <InputWithLabel
          label="Email"
          placeholder="Type your email here"
          value={email}
          onChangeText={setEmail}
        />
        <InputWithLabel
          label="Password"
          placeholder="Type your password here"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <InputWithLabel
          label="Confirm Password"
          placeholder="Confirm your password here"
          value={confirmation_password}
          onChangeText={setConfirmationPassword}
          secureTextEntry
          onSubmitEditing={confirmPasswords}
        /> */}
        <InputWithLabel
          label="Image URL"
          placeholder="enter the image_url here"
          value={image_url}
          onChangeText={setImageURL}
        />
        <InputWithLabel
          label="Author"
          placeholder="enter the author here"
          value={author}
          onChangeText={setAuthor}
        />
        <InputWithLabel
          label="Location"
          placeholder="enter the location here"
          value={location}
          onChangeText={setLocation}
        />
        <InputWithLabel
          label="Post Time"
          placeholder="enter your post_time here"
          value={post_time}
          onChangeText={setPostTime}
        />
        <InputWithLabel
          label="Caption Body"
          placeholder="write your caption here"
          value={caption_body}
          onChangeText={setCaptionBody}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  }
});
