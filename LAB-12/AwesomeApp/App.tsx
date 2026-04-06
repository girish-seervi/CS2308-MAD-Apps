import React, { useState } from "react";
import { Button, StatusBar, View, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "./LoginForm";

export default function App() {
  const [isStatusBarVisible, setIsStatusBarVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="#0f172a"
          barStyle="light-content"
          hidden={isStatusBarVisible}
        />
        <View style={styles.headerToggle}>
          <Button
            title="Toggle Status Bar"
            onPress={() => setIsStatusBarVisible(!isStatusBarVisible)}
            color="#8b5cf6"
          />
        </View>
        <LoginForm />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a", // Beautiful modern dark slate
  },
  headerToggle: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: "center",
  },
});
