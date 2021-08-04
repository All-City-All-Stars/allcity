import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostFeed from '../screens/PostFeed';
import NewPostForm from '../screens/NewPostForm';
import CommentFeed from '../screens/CommentFeed';

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
                {/* <Tab.screen
                    name='Comments'
                    component={CommentFeed} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
};

