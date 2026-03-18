import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <Text style={styles.greeting}>Welcome 👋</Text>

      <Text style={styles.title}>
        Student Task Manager
      </Text>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Stay Organized
        </Text>

        <Text style={styles.cardText}>
          Manage your daily tasks, track progress and stay productive.
        </Text>

      </View>

      <View style={styles.tipBox}>

        <Text style={styles.tipTitle}>
          Productivity Tip 💡
        </Text>

        <Text style={styles.tipText}>
          Break big tasks into smaller tasks to finish them faster.
        </Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#0f172a',
    padding:25,
    justifyContent:'center'
  },

  greeting:{
    color:'#94a3b8',
    fontSize:18
  },

  title:{
    fontSize:34,
    fontWeight:'bold',
    color:'white',
    marginBottom:40
  },

  card:{
    backgroundColor:'#1e293b',
    padding:20,
    borderRadius:12,
    marginBottom:25
  },

  cardTitle:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:10
  },

  cardText:{
    color:'#cbd5f5',
    lineHeight:22
  },

  tipBox:{
    backgroundColor:'#3b82f6',
    padding:20,
    borderRadius:12
  },

  tipTitle:{
    color:'white',
    fontWeight:'bold',
    fontSize:18,
    marginBottom:5
  },

  tipText:{
    color:'white'
  }

});

export default HomeScreen;