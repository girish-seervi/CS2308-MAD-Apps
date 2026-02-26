import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './src/screens/Home'
import Details from './src/screens/Details'
import Cart from './src/screens/Cart'

const Stack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: "My Store" }}
        />

        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{ title: "Product Details" }}
        />

        <Stack.Screen 
          name="Cart" 
          component={Cart}
          options={{ title: "Cart" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App