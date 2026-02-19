import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import pokemonList from "./data.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      
      {/* Status Bar */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F5F5F5"
      />

      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={pokemonList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
  },

  cardText: {
    fontSize: 20,
  },
});