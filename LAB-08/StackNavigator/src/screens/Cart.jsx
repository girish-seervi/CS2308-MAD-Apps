import React, { useContext } from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { CartContext } from '../context/CartContext'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Cart = () => {

  // Bring in the new removeFromCart function
  const { cartItems, removeFromCart } = useContext(CartContext)
  const navigation = useNavigation()

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your Cart is Empty 🛒</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Your Cart 🛒</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { product: item })}
          >

            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
            </View>

            {/* NEW: Delete Button */}
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeFromCart(item.id)}
            >
              <Ionicons name="trash-outline" size={24} color="#e53935" />
            </TouchableOpacity>

          </TouchableOpacity>

        )}
      />

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2'
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyText: {
    fontSize: 20,
    color: 'gray'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3,
    alignItems: 'center' // Align items vertically in the center
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 12
  },
  info: {
    flex: 1, // Takes up remaining space so the delete button pushes to the right
    justifyContent: 'center'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 4
  },
  deleteButton: {
    padding: 8,
  }
})