import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import BottomTabNavigator from '../navigation/bottomTabNavigator'
import createPost from '../../src/screens/createPost'

const Stack = createStackNavigator();

const RootNavigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
            >
                <Stack.Screen name="Home" component={BottomTabNavigator}/>
                <Stack.Screen 
                options ={{
                    headerShown: true,
                    title: 'Post'
                }}
                name="CreatePost" 
                component={createPost}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};

export default RootNavigation;