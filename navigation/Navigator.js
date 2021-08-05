import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostFeed from '../screens/PostFeed';
import NewPostForm from '../screens/NewPostForm';

const Tab = createBottomTabNavigator();

export default function Nav () {
    return (
        <NavigationContainer initialRouteName='Feed'>
            <Tab.Navigator 
                screenOptions={{
                    tabBarActiveTintColor: 'darkviolet',
                    tabBarInactiveTintColor: 'cadetblue',
                    tabBarActiveBackgroundColor: 'gold',
                    tabBarInactiveBackgroundColor: 'gold', 
                    headerShown: false,
                    tabBarHeight: 300,
                    tabBarStyle: {
                        height: 115,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopWidth: 0,
                    },   
                    tabBarIcon: ({ focused, color, size }) => {
                        
                    }               
                }}
                >
                <Tab.Screen 
                    name='Feed' 
                    component={PostFeed} />
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

