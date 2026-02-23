import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

type FoodItem = {
  id: string;
  name: string;
  price: number;
  category: 'Veg' | 'Non-Veg' | 'Beverage';
  image: string;
};

const foodData: FoodItem[] = [
  { id: '1', name: 'Veg Biryani', price: 180, category: 'Veg', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0' },
  { id: '2', name: 'Chicken Burger', price: 220, category: 'Non-Veg', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349' },
  { id: '3', name: 'Paneer Pizza', price: 250, category: 'Veg', image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65' },
  { id: '4', name: 'Cold Coffee', price: 120, category: 'Beverage', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: '5', name: 'Masala Dosa', price: 140, category: 'Veg', image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg' },
  { id: '6', name: 'Chicken Biryani', price: 260, category: 'Non-Veg', image: 'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg' },
  { id: '7', name: 'Mango Shake', price: 90, category: 'Beverage', image: 'https://media.istockphoto.com/id/1056675358/photo/healthy-mango-smoothie.jpg?s=612x612&w=0&k=20&c=-6wKcUf2trNP1wHOoCnEJxNPcK7cqQ8dPQdqAnOJEoU=' },
  { id: '8', name: 'Veg Momos', price: 130, category: 'Veg', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950' },
];

function HomeScreen({ navigation }: any) {
  const [cart, setCart] = useState<FoodItem[]>([]);

  const addToCart = (item: FoodItem) => {
    setCart([...cart, item]);
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);

  const getBadgeColor = (category: string) => {
    if (category === 'Veg') return '#d4edda';
    if (category === 'Non-Veg') return '#f8d7da';
    if (category === 'Beverage') return '#d1ecf1';
    return '#fff';
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.header}>🍽 Food Delivery</Text>

      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.cardContent}>
              <View style={styles.topRow}>
                <Text style={styles.foodName}>{item.name}</Text>
                <View style={[styles.badge, { backgroundColor: getBadgeColor(item.category) }]}>
                  <Text style={styles.badgeText}>{item.category}</Text>
                </View>
              </View>

              <Text style={styles.price}>₹ {item.price}</Text>

              <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {cart.length > 0 && (
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate('Payment', {
              cartItems: cart,
              total: totalAmount,
            })
          }
        >
          <Text style={styles.checkoutText}>Proceed to Pay ₹ {totalAmount}</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

function PaymentScreen({ route, navigation }: any) {
  const { cartItems, total } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>💳 Payment Page</Text>

      {cartItems.map((item: FoodItem, index: number) => (
        <View key={index} style={styles.paymentItem}>
          <Text>{item.name}</Text>
          <Text>₹ {item.price}</Text>
        </View>
      ))}

      <View style={styles.totalBox}>
        <Text style={{ fontWeight: 'bold' }}>Total:</Text>
        <Text style={{ fontWeight: 'bold' }}>₹ {total}</Text>
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => {
          Alert.alert('Payment Successful ✅');
          navigation.popToTop();
        }}
      >
        <Text style={styles.payText}>Pay Now</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ff4d4d',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 180,
  },
  cardContent: {
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  foodName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  price: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  paymentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  payButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});