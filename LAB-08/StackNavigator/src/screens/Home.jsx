import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'

const products = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    price: '₹1,19,900',
    description: 'Apple flagship with A18 chip and advanced camera.'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S25 Ultra',
    price: '₹1,29,999',
    description: '200MP camera and powerful Snapdragon processor.'
  },
  {
    id: '3',
    name: 'Google Pixel 10 Pro',
    price: '₹1,09,999',
    description: 'Best AI camera and clean Android experience.'
  },
  {
    id: '4',
    name: 'OnePlus 13',
    price: '₹64,999',
    description: 'Fast performance and smooth UI experience.'
  },
  {
    id: '5',
    name: 'Xiaomi 15 Ultra',
    price: '₹1,09,999',
    description: 'Premium camera and powerful hardware.'
  },
  {
    id: '6',
    name: 'iPhone 17',
    price: '₹1,29,900',
    description: 'Latest Apple smartphone with improved performance.'
  },
  {
    id: '7',
    name: 'Google Pixel 10 Pro XL',
    price: '₹1,24,999',
    description: 'Best display, camera, and AI features.'
  },
  {
    id: '8',
    name: 'OnePlus 15',
    price: '₹72,999',
    description: 'Latest flagship with powerful Snapdragon processor.'
  }
]

const Home = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Details', { product: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.view}>View Details →</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome to My Store 🛒</Text>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5
  },

  view: {
    marginTop: 10,
    color: '#2196F3'
  }

})