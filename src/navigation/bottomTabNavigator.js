import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Image} from 'react-native'
import { Entypo , AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import plusIcon from '../assets/images/plus-icon.png'

const Tab = createBottomTabNavigator();

import Home from '../screens/home'

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000',
            },
            activeTintColor: '#fff',
        }}
        >
            <Tab.Screen 
                name={'Home'} 
                component={Home}
                options={{
                    tabBarIcon: ({color}) => (
                        <Entypo name="home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen 
            name={'Discover'} 
            component={Home}
            options={{
                    tabBarIcon: ({color}) => (
                        <AntDesign name="search1" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen 
            name={'Upload'} 
            component={Home}
            options={{
                    tabBarIcon: ({}) => (
                        <Image source={plusIcon} style={{height: 35, resizeMode: 'contain'}}/>
                    ),
                    tabBarLabel: () => null,
                }}
            />
            <Tab.Screen 
            name={'Inbox'} 
            component={Home}
            options={{
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="message-minus-outline" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen 
            name={'Me'} 
            component={Home}
            options={{
                    tabBarIcon: ({color}) => (
                        <Ionicons name="md-person-outline" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;