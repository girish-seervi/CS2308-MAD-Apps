import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const Details = ({ navigation, route }) => {

  const { product } = route.params

  return (
    <View style={styles.container}>

      <Text style={styles.name}>{product.name}</Text>

      <Text style={styles.price}>{product.price}</Text>

      <Text style={styles.description}>
        {product.description}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cart', { product })}
      >
        <Text style={styles.buttonText}>Add to Cart 🛒</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 22,
    color: 'green',
    marginVertical: 10
  },

  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },

  button: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '70%',
    alignItems: 'center'
  },

  backButton: {
    backgroundColor: '#555',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: '70%',
    alignItems: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 18
  }

})