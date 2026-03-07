import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../screens/FeedScreen';
import ProductDetail from '../screens/ProductDetail';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={{ 
        headerStyle: { 
          elevation: 0, // Removes Android shadow
          shadowOpacity: 0, // Removes iOS shadow
          borderBottomWidth: 0, // Removes default border
          backgroundColor: '#fff' 
        },
        headerTintColor: '#000',
        headerTitleStyle: { fontWeight: '700', fontSize: 16 },
        cardStyle: { backgroundColor: '#fff' }
      }}
    >
      <Stack.Screen name="Feed" component={FeedScreen} options={{ headerShown: false }} />
      <Stack.Screen 
        name="ProductDetail" 
        component={ProductDetail} 
        options={{ 
          title: 'DROP DETAILS', // Makes it look like a high-end catalog
          headerBackTitleVisible: false 
        }} 
      />
    </Stack.Navigator>
  );
}