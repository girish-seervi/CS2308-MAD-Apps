import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to the Student App</Text>

      <Text style={styles.label}>Enter Your Name:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (name === '') {
            alert('Please enter name')
            return
          }
          navigation.navigate('Student', { studentName: name })
        }}
      >
        <Text style={styles.buttonText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center'
  },
  label: {
    fontSize: 16,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#4F86C6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: '#4F86C6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})