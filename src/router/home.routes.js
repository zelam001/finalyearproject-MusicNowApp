import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomePage from '../screens/HomePage';
import StoryPage from '../screens/StoryPage';
import logo from '../assets/images/logo.png';


const HomeStack = createStackNavigator();

const HomeRoutes = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen
        name="Home" 
        component={HomePage}
        options={{
        title: 'MusicNow',
        headerLeftContainerStyle: {
            marginLeft: 10,
        },
        headerRightContainerStyle: {
            marginRight: 10,
        },
        headerLeft: () => (
            <Ionicons name="ios-camera-outline" size={35} color={'black'}/>
        ),
        headerTitle: () => (
            <Image source={logo} resizeMode="center" style={{width: 200, height:50}}/>
        ),
        headerRight: () => (
            <Feather name="send" size={30} color={'gray'}/>
        )
        }}
        
        />
    </HomeStack.Navigator>
)
    
    
export default HomeRoutes;