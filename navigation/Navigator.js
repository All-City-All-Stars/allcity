import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PostFeed from '../screens/PostFeed';
import NewPostForm from '../screens/NewPostForm';

const Tab = createBottomTabNavigator();

export default function Nav () {
    return (
        <NavigationContainer initialRouteName='Feed'>
            <Tab.Navigator>
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

