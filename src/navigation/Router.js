/*
 * @Author: your name
 * @Date: 2020-04-15 06:37:06
 * @LastEditTime: 2020-04-30 21:28:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Toutiao-github/src/navigation/Router.js
 */
import * as React from 'react';
import { Text, TextInput, View, Button,Animated,Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,TransitionPresets,CardStyleInterpolators} from '@react-navigation/stack';

import HomeScreen from './BottomTab.js'
import SearchScreen from '../view/Search.js'
import LoginScreen from '../view/login.js'
import SettingScreen from '../view/Setting.js'
import VideoFullScreen from '../view/VideoFullscreen.js'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" >
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{headerShown:false}} />
        <Stack.Screen name="VideoPage" component={VideoFullScreen} 
        options={{
          headerShown:false,
          cardStyleInterpolator:CardStyleInterpolators.forNoAnimation
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}