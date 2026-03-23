import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../ThemeContext';

const SettingsScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { isDarkMode, toggleTheme, colors } = useTheme();
  
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);

  const styles = getStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        <Text style={styles.sectionTitle}>Preferences</Text>
        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconBg, { backgroundColor: colors.tint }]}><Ionicons name="moon" size={20} color="white" /></View>
              <Text style={styles.settingText}>Dark Mode</Text>
            </View>
            <Switch value={isDarkMode} onValueChange={toggleTheme} trackColor={{ false: colors.surface, true: colors.tint }} />
          </View>
        </View>

        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.card}>
          <View style={[styles.settingRow, styles.borderBottom]}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconBg, { backgroundColor: colors.purple }]}><Ionicons name="notifications" size={20} color="white" /></View>
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch value={pushEnabled} onValueChange={setPushEnabled} trackColor={{ false: colors.surface, true: colors.purple }} />
          </View>
          <View style={styles.settingRow}>
            <View style={styles.settingLeft}>
              <View style={[styles.iconBg, { backgroundColor: colors.success }]}><Ionicons name="mail" size={20} color="white" /></View>
              <Text style={styles.settingText}>Email Digests</Text>
            </View>
            <Switch value={emailEnabled} onValueChange={setEmailEnabled} trackColor={{ false: colors.surface, true: colors.success }} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15 },
  backBtn: { padding: 10, backgroundColor: colors.card, borderRadius: 14, borderWidth: 1, borderColor: colors.border },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: colors.text },
  scrollContent: { padding: 20 },
  sectionTitle: { color: colors.textSecondary, fontSize: 13, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10, marginLeft: 5, marginTop: 5 },
  card: { backgroundColor: colors.card, borderRadius: 20, overflow: 'hidden', marginBottom: 25, borderWidth: 1, borderColor: colors.border },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 18 },
  borderBottom: { borderBottomWidth: 1, borderBottomColor: colors.border },
  settingLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  iconBg: { padding: 8, borderRadius: 12 },
  settingText: { color: colors.text, fontSize: 16, fontWeight: '600' }
});

export default SettingsScreen;
