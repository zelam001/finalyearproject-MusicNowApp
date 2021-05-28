import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStackScreen from './home.routes';
import SearchPage from '../screens/SearchPage';
import PostPage from '../screens/PostPage';
import ListPage from '../screens/ListPage';
import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator();


const BottomFeedNavigator = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === 'Search') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <AntDesign name="plus" size={size} color={color} />;
            }
            if (route.name === 'List') {
              return <MCI name="playlist-music" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
    >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Search" component={SearchPage} />
        <Tab.Screen name="Post" component={PostPage} />
        <Tab.Screen name="List" component={ListPage} />
        <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>

)

export default BottomFeedNavigator;