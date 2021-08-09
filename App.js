import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import NewPostForm from "./screens/NewPostForm";
import PostFeed from "./screens/PostFeed";
import CommentFeed from "./screens/CommentFeed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PostFeed" component={PostFeed} />
      <Stack.Screen
        name="Comments"
        component={CommentFeed}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Header />
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
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <Image
                    style={{ width: 40, height: 40, }}
                    source={require('./assets/feed.png')}
                  />
                )
              }
            }}
          />
          <Tab.Screen
            name="Add Post"
            component={NewPostForm}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (
                  <Image
                    style={{ width: 40, height: 40, }}
                    source={require('./assets/spraycan.png')}
                  />
                )
              }
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
});

//Merge Problems//
=======
});
>>>>>>> fix master
