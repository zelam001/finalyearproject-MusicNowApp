import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import bottomFeedNavigator from './bottomFeedNavigator.routes';
import StoryPage from '../screens/StoryPage';

const RootStack = createStackNavigator();


const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
     name={"Home"}
     component={bottomFeedNavigator}
     options={{
       headerShown: false
     }}
     /> 
     <RootStack.Screen
     name='Story'
     component={StoryPage}
     options={{
         headerShown: false
     }}
 />
  </RootStack.Navigator>
    
)

export default Router;