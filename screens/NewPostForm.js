import React, { useState } from "react";
import { Formik } from "formik";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from "react-native";
import InputWithLabel from "../components/InputWithLabel";

export default function NewPostForm() {
  function onSubmit(values) {
    if (values.password !== values.confirmation_password) {
      alert("Passwords do not match. Please try again");
    } else {
      alert(
        "🤩🤩🤩🤩  ALL CITY ALL STARS FOR LIFE 🤩🤩🤩🤩"
      );
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmation_password: "",
        image_url: "",
        author: "",
        location: "",
        caption_body: "",
      }}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleSubmit, values }) => (
        <ScrollView style={styles.style}>
          <InputWithLabel
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
            onSubmitEditing={handleSubmit}
          />
          <InputWithLabel
            label="Image URL"
            placeholder="enter the image_url here"
            value={values.image_url}
            onChangeText={handleChange(
              "confirmation_password"
            )}
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
        </ScrollView>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  style: {
    flex: 1,
    backgroundColor: "#46c8e8",
  },
});
