import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>

      {/* Local Profile Image */}
      <Image
        source={require('../assets/profile.jpg')}
        style={styles.avatar}
      />

      <Text style={styles.name}>Girish Kailash</Text>
      <Text style={styles.email}>1RUA24BCA0028</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Course</Text>
        <Text style={styles.value}>BCA</Text>

        <Text style={styles.label}>Total Orders</Text>
        <Text style={styles.value}>69 Orders</Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#e53935' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingTop: 50
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2196F3'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20
  },
  card: {
    backgroundColor: '#fff',
    width: '85%',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    width: '85%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})