import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../ThemeContext';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top + 20 }]}>
      <Text style={styles.greeting}>Welcome 👋</Text>
      <Text style={styles.title}>Student Task Manager</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Stay Organized</Text>
        <Text style={styles.cardText}>Manage your daily tasks, track progress and stay productive.</Text>
      </View>

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>Productivity Tip 💡</Text>
        <Text style={styles.tipText}>Break big tasks into smaller tasks to finish them faster.</Text>
      </View>
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 25, justifyContent: 'center' },
  greeting: { color: colors.textSecondary, fontSize: 18 },
  title: { fontSize: 34, fontWeight: 'bold', color: colors.text, marginBottom: 40 },
  card: { backgroundColor: colors.card, padding: 25, borderRadius: 20, marginBottom: 25, borderWidth: 1, borderColor: colors.border },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  cardText: { color: colors.textSecondary, lineHeight: 24, fontSize: 15 },
  tipBox: { backgroundColor: colors.tint, padding: 25, borderRadius: 20, shadowColor: colors.tint, shadowOpacity: 0.3, shadowRadius: 10, elevation: 5 },
  tipTitle: { color: 'white', fontWeight: 'bold', fontSize: 18, marginBottom: 8 },
  tipText: { color: 'rgba(255,255,255,0.9)', fontSize: 15, lineHeight: 22 }
});

export default HomeScreen;