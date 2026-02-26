import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Cart = ({ navigation, route }) => {

  const product = route.params?.product

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Your Cart 🛒</Text>

      {product && (
        <View style={styles.card}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3
  },

  name: {
    fontSize: 22,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    color: 'green'
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8
  },

  buttonText: {
    color: '#fff',
    fontSize: 18
  }

})