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
  return (
    <Formik
      initialValues={{
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
          <InputWithLabel
            label="Caption Body"
            placeholder="write your caption here"
            value={values.caption_body}
            onChangeText={handleChange("caption_body")}
          />
          <Button
            icon="add-a-photo" mode="contained" style={styles.button}
            onPress={() => {_pickImage(handleChange('image'))}}
              >Pick an image from camera roll</Button>
              {values.image && values.image.length > 0 ?
                <Image source={{ uri: values.image }} style={{ width: 200, height: 200 }} /> : null}
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