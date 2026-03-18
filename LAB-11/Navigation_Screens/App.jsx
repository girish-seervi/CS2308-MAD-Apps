import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/HomeScreen'
import StudentScreen from './screens/StudentScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#4F86C6' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Student Information App' }} 
        />
        <Stack.Screen 
          name="Student" 
          component={StudentScreen} 
          options={{ title: 'Student Information' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}