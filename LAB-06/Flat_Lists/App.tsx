import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import students from "./students.json";

export default function App() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>

      <StatusBar barStyle="dark-content" backgroundColor="#E8F5E9" />

      {/* App Title */}
      <Text style={styles.header}>Student Directory</Text>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            
            {/* Student Name */}
            <Text style={styles.name}>{item.name}</Text>

            {/* Grade */}
            <Text style={styles.detail}>Grade : {item.grade}</Text>

            {/* Section */}
            <Text style={styles.detail}>Section : {item.section}</Text>

          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 12,
    color: "#1B5E20",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 12,
    marginBottom: 14,
    elevation: 4,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 8,
  },

  detail: {
    fontSize: 18,
    color: "#333",
  },
});