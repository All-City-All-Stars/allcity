import React, { useState } from "react";
import { Formik } from "formik";
import {
  ScrollView,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableHighlight,
} from "react-native";
import InputWithLabel from "../components/InputWithLabel";

export default function NewPostForm({navigation}) {

  const [success, setSuccess] = useState(false);

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
        onSubmit={async (values) => {
          try {
            const response = await fetch('https://stark-cliffs-29867.herokuapp.com/posts/', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            if (response.status===201){
            setSuccess(true)
            setTimeout(() => {
                navigation.navigate('Home')
            }, 1000)
        }
        } catch (error) {
          console.log(error)
  }
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
            <TouchableHighlight 
              onPress={handleSubmit} 
              title="Submit" 
              accessibilityLabel={'Double tap to submit your post'}
              style={styles.button}
              underlayColor={'#d1d1d1'}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableHighlight>
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
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowColor: '#000'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    // flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});