import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        {/* PROFILE IMAGE */}
        <Image
          source={require('./assets/images/girish.jpeg')}
          style={styles.profileImage}
        />

        {/* BASIC TEXT */}
        <Text style={styles.name}>Girish Kailash</Text>
        <Text style={styles.title}>Mobile App Developer (Student)</Text>

        {/* CONTACT SECTION */}
        <View style={styles.card}>
          <Text style={styles.heading}>Contact</Text>
          <Text>Email: girishkailashbca24@rvu.edu.in</Text>
          <Text>Phone: +91 8970134271</Text>

          <Button
            title="Contact Me"
            onPress={() => Alert.alert('Button Clicked', 'You pressed Contact Me')}
          />
        </View>

        {/* EDUCATION SECTION */}
        <View style={styles.card}>
          <Text style={styles.heading}>Education</Text>
          <Text>BCA(Hons.) - Computer Science</Text>
          <Text>RV University</Text>

          <Button
            title="View Certificate"
            onPress={() =>
              Alert.alert('Button Clicked', 'Viewing Certificate')
            }
          />
        </View>

        {/* SKILLS SECTION */}
        <View style={styles.card}>
          <Text style={styles.heading}>Skills</Text>
          <Text>• React Native</Text>
          <Text>• JavaScript</Text>
          <Text>• Git & GitHub</Text>

          <Button
            title="View More Skills"
            onPress={() =>
              Alert.alert('Button Clicked', 'More Skills Coming Soon')
            }
          />
        </View>

        {/* PROJECTS SECTION */}
        <View style={styles.card}>
          <Text style={styles.heading}>Projects</Text>
          <Text>• Resume App (React Native)</Text>
          <Text>• MOOC Courses(IBM)</Text>

          <Button
            title="View Projects"
            onPress={() =>
              Alert.alert('Button Clicked', 'Opening Projects')
            }
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 60,
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
  },
  card: {
    backgroundColor: 'white',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 3,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});