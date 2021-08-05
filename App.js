import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Nav from "./navigation/Navigator";
import Header from "./components/Header";
import NewPostForm from "./screens/NewPostForm";

export default function App() {
  return (
    <>
      <Header />
      {/* <NewPostForm /> */}
      <Nav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
