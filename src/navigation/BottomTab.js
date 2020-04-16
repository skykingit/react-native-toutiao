import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ImagePath from '../config/imagePath'

import HomeScreen from '../view/Home.js'
import XiguaScreen from '../view/Xigua.js'
import HotScreen from '../view/Hot.js'
import MovieScreen from '../view/Movie.js'
import UserScreen from '../view/User.js'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = focused
              ? ImagePath.HomeFill
              : ImagePath.Home;
          } else if (route.name === 'Xigua') {
            iconPath = focused
              ? ImagePath.XiguaFill
              : ImagePath.Xigua;
          } else if (route.name === 'Hot') {
            iconPath = focused
              ? ImagePath.HotFill
              : ImagePath.Hot;
          } else if (route.name === 'Movie') {
            iconPath = focused
              ? ImagePath.MovieFill
              : ImagePath.Movie;
          } else if (route.name === 'User') {
            iconPath = focused
              ? ImagePath.UserFill
              : ImagePath.User;
          }
        return  <Image source={iconPath} style={{width:size,height:size}}  />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{title:"主页"}} />
        <Tab.Screen name="Xigua" component={XiguaScreen} options={{title:"西瓜视频"}} />
        <Tab.Screen name="Hot" component={HotScreen} options={{title:"热榜"}} />
        <Tab.Screen name="Movie" component={MovieScreen} options={{title:"放映厅"}} />
        <Tab.Screen name="User" component={UserScreen} options={{title:"我的"}} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}