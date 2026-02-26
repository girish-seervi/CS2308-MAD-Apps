import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Profile Screen</Text>

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    marginBottom: 20,
  }
})