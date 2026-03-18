import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import AboutScreen from './screens/AboutScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>

      {/* Status Bar */}
      <StatusBar
        barStyle="light-content"
        backgroundColor="#0f172a"
      />

      {/* Bottom Navigation */}
      <Tab.Navigator
        screenOptions={({ route }) => ({

          headerShown: true,

          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string = '';

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } 
            else if (route.name === 'Tasks') {
              iconName = focused ? 'checkmark-done' : 'checkmark-done-outline';
            } 
            else if (route.name === 'About') {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return (
              <Ionicons
                name={iconName}
                size={22}
                color={color}
              />
            );
          },

          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: 'gray',

          tabBarStyle: {
            height: 65,
            paddingBottom: 8
          }

        })}
      >

        <Tab.Screen
          name="Home"
          component={HomeScreen}
        />

        <Tab.Screen
          name="Tasks"
          component={TaskScreen}
        />

        <Tab.Screen
          name="About"
          component={AboutScreen}
        />

      </Tab.Navigator>

    </NavigationContainer>
  );
};

export default App;