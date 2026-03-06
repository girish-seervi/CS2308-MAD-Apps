import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../screens/Home'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import { CartContext } from '../context/CartContext'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } 
          else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline'
          } 
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      })}
    >

      <Tab.Screen name="Home" component={Home} />

      <Tab.Screen 
        name="Cart" 
        component={Cart}
        options={{
          tabBarBadge: cartItems.length > 0 ? cartItems.length : null
        }}
      />

      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  )
}

export default BottomTabs