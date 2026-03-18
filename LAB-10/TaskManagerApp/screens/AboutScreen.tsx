import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const AboutScreen = () => {

  return (

    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>

      <Text style={styles.title}>
        About This App
      </Text>

      <View style={styles.card}>

        <Text style={styles.text}>
          Student Task Manager helps users organize their daily activities and stay productive.
        </Text>

      </View>

      <View style={styles.features}>

        <Text style={styles.feature}>✔ Add Tasks</Text>
        <Text style={styles.feature}>✔ Mark Tasks Complete</Text>
        <Text style={styles.feature}>✔ Delete Tasks</Text>
        <Text style={styles.feature}>✔ Track Task Progress</Text>

      </View>

      <View style={styles.footer}>

        <Text style={styles.footerText}>
          Built with React Native
        </Text>

        <Text style={styles.footerText}>
          Mobile App Development Lab
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

  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'white',
    marginBottom:30
  },

  card:{
    backgroundColor:'#1e293b',
    padding:20,
    borderRadius:12,
    marginBottom:25
  },

  text:{
    color:'#cbd5f5',
    lineHeight:22
  },

  features:{
    marginBottom:30
  },

  feature:{
    color:'white',
    fontSize:16,
    marginBottom:8
  },

  footer:{
    marginTop:20
  },

  footerText:{
    color:'#94a3b8'
  }

});

export default AboutScreen;