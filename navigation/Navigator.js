import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PostFeed from "../screens/PostFeed";
import CommentFeed from "../screens/CommentFeed";
import NewPostForm from "../screens/NewPostForm";
import { StyleSheet, Image } from "react-native";

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
            height: 100,
            position: "absolute",
            backgroundColor: "gold",
          },
          tabBarHideOnKeyboard: "true",
        }}
      >
        {/* <Tab.Screen name="Comment" component={Comment} /> */}
        <Tab.Screen
            name="Feed"
            component={PostFeed}
            options={{tabBarIcon: ({ focused, color, size }) => {
            return (
                <Image 
                    style={{width:40, height: 40,}}
                    source ={require('../assets/feed.png')}
                />
            )
          }}}
        />
        <Tab.Screen
          name="Add Post"
          component={NewPostForm}
          options={{tabBarIcon: ({ focused, color, size }) => {
            return (
                <Image 
                    style={{width:40, height: 40,}}
                    source ={require('../assets/spraycan.png')}
                />
            )
          }}}
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
