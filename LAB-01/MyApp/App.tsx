import React from 'react';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
      <Text style={{ fontSize: 26, color: 'white', fontWeight: 'bold' }}>
        Hello, World!
      </Text>
    </SafeAreaView>
  );
}