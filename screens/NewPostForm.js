import React, { useState } from "react";
import { Formik } from "formik";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
} from "react-native";
import InputWithLabel from "../components/InputWithLabel";
import Data from "../data/seed_data";

export default function NewPostForm() {
  // function onSubmit(values) {
  //   if (values) {
  //     alert(} else {
  //     alert(

  //     );
  //   }
  // }

  // function confirmPassword(values) {
  //   if (values.password !== values.confirmation_password) {
  //     alert("Passwords do not match. Please try again");
  //   } else {
  //     alert(
  //       "🤩🤩🤩🤩  ALL CITY ALL STARS FOR LIFE 🤩🤩🤩🤩"
  //     );
  //   }
  // }
  return (
    <Formik
      initialValues={{
        // email: "",
        // password: "",
        // confirmation_password: "",
        image_url: "",
        author: "",
        location: "",
        caption_body: "",
      }}
      onSubmit={(values) => {
        Data.push(values);
        console.log(Data);
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={styles.style}>
          {/* <InputWithLabel
            label="Email"
            placeholder="Type your email here"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          <InputWithLabel
            label="Password"
            placeholder="Type your password here"
            onChangeText={handleChange("password")}
            value={values.password}
            secureTextEntry
          />
          <InputWithLabel
            label="Confirm Password"
            placeholder="Confirm your password here"
            onChangeText={handleChange(
              "confirmation_password"
            )}
            value={values.confirmation_password}
            secureTextEntry
            onSubmitEditing={confirmPassword}
          /> */}
          <InputWithLabel
            label="Image URL"
            placeholder="enter the image_url here"
            value={values.image_url}
            onChangeText={handleChange("image_url")}
          />
          <InputWithLabel
            label="Author"
            placeholder="enter the author here"
            value={values.author}
            onChangeText={handleChange("author")}
          />
          <InputWithLabel
            label="Location"
            placeholder="enter the location here"
            value={values.location}
            onChangeText={handleChange("location")}
          />
          {/* <InputWithLabel
            label="Post Time"
            placeholder="enter your post_time here"
            value={post_time}
            onChangeText={setPostTime}
          /> */}
          <InputWithLabel
            label="Caption Body"
            placeholder="write your caption here"
            value={values.caption_body}
            onChangeText={handleChange("caption_body")}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  style: {
    marginBottom: 100,
    flex: 1,
    backgroundColor: "#46c8e8",
  },
});
