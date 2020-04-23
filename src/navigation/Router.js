import * as React from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './BottomTab.js'
import SearchScreen from '../view/Search.js'
import LoginScreen from '../view/login.js'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode="modal" >
        <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown:false}} />
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}