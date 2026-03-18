import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const StudentScreen = ({ route, navigation }) => {
  const { studentName } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Information</Text>

      <View style={styles.card}>
        <Text style={styles.label}>STUDENT NAME</Text>
        <Text style={styles.name}>{studentName}</Text>
      </View>

      <Text style={styles.welcome}>
        Welcome, {studentName}!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>GO BACK</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StudentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 5
  },
  label: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 5
  },
  name: {
    fontSize: 20,
    color: '#4F86C6',
    fontWeight: 'bold'
  },
  welcome: {
    fontSize: 16,
    marginBottom: 30,
    fontStyle: 'italic'
  },
  button: {
    backgroundColor: '#4F86C6',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
})