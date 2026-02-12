import React from 'react';
import { 
  StyleSheet, 
  View, 
  ScrollView, 
  Image, 
  Text, 
  useColorScheme 
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {

  const isDarkMode = useColorScheme() === "dark";   // Homework part ✅

  return (
    <SafeAreaView style={isDarkMode ? styles.darkSafeArea : styles.lightSafeArea}>

      <View style={[styles.container, isDarkMode && styles.darkContainer]}>

        <View style={[styles.card, isDarkMode && styles.darkCard]}>
          <Text style={isDarkMode ? styles.darkText : styles.lightText}>
            girish.seervi
          </Text>
        </View>

        <ScrollView
          contentContainerStyle={{ gap: 10, alignItems: "center" }}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.scroll}
        >
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
          <View style={styles.box1} />
          <View style={styles.box2} />
          <View style={styles.box3} />
        </ScrollView>
      </View>

      <View style={isDarkMode ? styles.darkFooter : styles.lightFooter}>
        <Text style={isDarkMode ? styles.darkText : styles.lightText}>
          helllooooo
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({

  // SafeArea Styles (Homework)
  lightSafeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  darkSafeArea: {
    flex: 1,
    backgroundColor: "#121212",
  },

  container: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#dadada',
    width: "100%",
  },

  darkContainer: {
    backgroundColor: "#1e1e1e",
  },

  scroll: {
    marginLeft: 10,
  },

  box1: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: 100,
    borderRadius: 100,
    height: 100,
    backgroundColor: 'green',
  },
  box3: {
    width: 100,
    borderRadius: 100,
    height: 100,
    backgroundColor: 'blue',
  },

  card: {
    width: 100,
    borderRadius: 10,
    height: 100,
    padding: 10,
    backgroundColor: 'white',
    alignItems: "center",
    justifyContent: "center",
  },

  darkCard: {
    backgroundColor: "#2a2a2a",
  },

  lightText: {
    color: "black",
    fontWeight: "bold",
  },

  darkText: {
    color: "white",
    fontWeight: "bold",
  },

  lightFooter: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#e0e0e0",
  },

  darkFooter: {
    padding: 15,
    alignItems: "center",
    backgroundColor: "#1a1a1a",
  },

});