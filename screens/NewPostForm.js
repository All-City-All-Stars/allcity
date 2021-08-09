import React, { useState } from "react";
import { Formik } from "formik";
import {
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
  Text,
} from "react-native";
import InputWithLabel from "../components/InputWithLabel";
import Data from "../data/seed_data";

export default function NewPostForm() {
  return (
    <ImageBackground
      source={require('../assets/bricks.png')}
      style={styles.image}
      >
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
          <ScrollView
            contentContainerStyle={styles.contentContainer}
            style={styles.style}
            accessible={true}
            accessibilityLabel={'Form to create a new post'}>
            <InputWithLabel
              style={styles.container}
              accessible={true}
              accessibilityLabel={"Image URL"}
              placeholder="Enter the image url"
              value={values.image_url}
              onChangeText={handleChange("image_url")}
            />
            <InputWithLabel
              style={styles.container}
              accessible={true}
              accessibilityLabel={"Author"}
              placeholder="Enter your username"
              value={values.author}
              onChangeText={handleChange("author")}
            />
            <InputWithLabel
              style={styles.container}
              accessible={true}
              accessibilityLabel={"Location"}
              placeholder="Enter the location"
              value={values.location}
              onChangeText={handleChange("location")}
            />
            <InputWithLabel
              style={styles.container}
              accessible={true}
              accessibilityLabel={"Caption Body"}
              placeholder="Write your caption"
              value={values.caption_body}
              onChangeText={handleChange("caption_body")}
            />
            <Pressable 
              onPress={handleSubmit} 
              title="Submit" 
              accessibilityLabel={'Double tap to submit your post'}
              style={styles.button}
            >
              <Text style={styles.text}>Submit</Text>
            </Pressable>
          </ScrollView>
        )}
      </Formik>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  style: {
    marginBottom: 100,
    flex: 1,
  },
  container: {
    height: 'auto',
    backgroundColor: '#e9e9e9',
    borderRadius: 20,
    marginTop: 20,
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: '#000'
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start'
  },
  button: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#e9e9e9',
    width: 200,
    height: 60,
    marginTop: 35,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});