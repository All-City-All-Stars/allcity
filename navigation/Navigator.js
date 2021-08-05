import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostFeed from '../screens/PostFeed';
import NewPostForm from '../screens/NewPostForm';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function Nav () {
    return (
        <NavigationContainer 
            initialRouteName='Feed'
            styles={styles.navContainer}>
            <Tab.Navigator 
                screenOptions={{
                    tabBarActiveTintColor: 'darkviolet',
                    tabBarInactiveTintColor: 'cadetblue', 
                    headerShown: false,
                    tabBarStyle: {
                        height: 80,
                        position: 'absolute',
                        backgroundColor: 'gold',
                    },  
                    tabBarHideOnKeyboard: 'true',
                    // tabBarIcon: ({ focused, color, size }) => {

                    // }               
                }}
                >
                <Tab.Screen 
                    name='Feed' 
                    component={PostFeed}
                    />
                <Tab.Screen 
                    name='Add Post' 
                    component={NewPostForm} />
                {/* <Tab.Screen 
                name='Profile' 
                component={Profile} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({
    navContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})