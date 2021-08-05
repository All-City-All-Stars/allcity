import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PostFeed from "../screens/PostFeed";
import CommentFeed from "../screens/CommentFeed";
import NewPostForm from "../screens/NewPostForm";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Comment() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostFeed" component={PostFeed} />
      <Stack.Screen
        name="Comments"
        component={CommentFeed}
      />
    </Stack.Navigator>
  );
}


export default function Nav() {
  return (
    <NavigationContainer
      initialRouteName="Feed"
      styles={styles.navContainer}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "darkviolet",
          tabBarInactiveTintColor: "cadetblue",
          headerShown: false,
          tabBarStyle: {
            height: 80,
            position: "absolute",
            paddingBottom: 0,
            backgroundColor: "gold",
          },
          tabBarHideOnKeyboard: "true",
          // tabBarIcon: ({ focused, color, size }) => {

          // }
        }}
      >
        {/* <Tab.Screen name="Comment" component={Comment} /> */}
        <Tab.Screen name="Feed" component={PostFeed} />
        <Tab.Screen
          name="Add Post"
          component={NewPostForm}
        />
        {/* <Tab.Screen 
                name='Profile' 
                component={Profile} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
