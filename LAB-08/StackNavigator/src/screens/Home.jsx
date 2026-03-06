import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native'

const products = [
  {
    id: '1',
    name: 'iPhone 16 Pro',
    price: '₹1,19,900',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbzTTDxrE4EPaTgGG0qEkheYElilT0omctP3Oj6kexdvsqid9HWYiEhiUy41GRxGIUTAyWEsmGhL51aE7kEhIp7fJhq-QBdA'
  },
  {
    id: '2',
    name: 'Samsung Galaxy S25 Ultra',
    price: '₹1,29,999',
    image: 'https://m.media-amazon.com/images/I/71VNuwoQtxL.jpg'
  },
  {
    id: '3',
    name: 'Google Pixel 10 Pro',
    price: '₹1,09,999',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRJmWC-jFr5zxpPGlJDNHXqSxowtXPHXCMLDkG8p3oN9O_OC3Hrz_KG5zRtVB2xDdYy7gj_0GRnNoIqlBZ6PRnTCc-MjlJpH_meV008vQqKeNeVzMGFEiA22g'
  },
  {
    id: '4',
    name: 'OnePlus 13',
    price: '₹64,999',
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_23TAN6eMcWQdOv6UCsbLUlKjy4STYPg9BP1ys9fJsqEJDrglLUEozhPSXYQV9CR58KAgrjCF6UHFaGK01jAazhNK5_O1QSW6ndU6wMmzAgKiJ5MFqa6IIJ6h1KSi4F_R7X-gI9Vfxg&usqp=CAc'
  },
  {
    id: '5',
    name: 'Xiaomi 15 Ultra',
    price: '₹1,09,999',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRqqXptff9Oo17OL2NDBrw-_cI0ufgMYWmyB-CC-nQT3entwOixB7VU32fUGe8ys8u65xrKfkxZ8oy4AlXwPRYKTz-D8opsz9KYv8qGGoqas2UjozuAJOSwIo0'
  }
]

const Home = ({ navigation }) => {

  const renderItem = ({ item }) => (
    <View style={styles.card}>

      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>{item.price}</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { product: item })}
      >
        <Text style={styles.link}>View Details →</Text>
      </TouchableOpacity>

    </View>
  )

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Welcome to My Store 🛒
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 15,
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
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 4
  },

  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain'
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  price: {
    fontSize: 18,
    color: 'green',
    marginVertical: 5
  },

  link: {
    color: '#2196F3',
    fontSize: 16
  }

})