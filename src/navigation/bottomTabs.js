import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import GivenScreen from '../screens/GiveScreen';
import UserScreen from '../screens/UserScreen';
import WatchLiveScreen from '../screens/WatchLiveScreen';
const Tab = createMaterialBottomTabNavigator();

const bottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='#e91e63'
      labelStyle={{ fontSize: 12 }}
      style={{ backgroundColor: 'tomato' }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='bell' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Given'
        component={GivenScreen}
        options={{
          tabBarLabel: 'Given',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='card-hearts'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='User'
        component={UserScreen}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='account-heart'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Watch Live'
        component={WatchLiveScreen}
        options={{
          tabBarLabel: 'Watch Live',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='youtube-tv' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default bottomTabs;

const styles = StyleSheet.create({});
