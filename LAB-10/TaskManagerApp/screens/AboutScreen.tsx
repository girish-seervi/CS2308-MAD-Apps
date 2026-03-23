import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../ThemeContext';

const ProfileScreen = ({ navigation }: any) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const styles = getStyles(colors);

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>
      <Text style={styles.headerTitle}>My Profile</Text>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.avatarSection}>
          <Image 
            source={{uri: 'https://ui-avatars.com/api/?name=Girish&background=3b82f6&color=fff&size=200'}} 
            style={styles.avatarImage} 
          />
          <Text style={styles.nameText}>Girish Kailash</Text>
          <Text style={styles.emailText}>Student • Software Developer</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Tasks Done</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>3</Text>
            <Text style={styles.statLabel}>Pending</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>Top 5%</Text>
            <Text style={styles.statLabel}>Productivity</Text>
          </View>
        </View>

        <View style={styles.actionSection}>
          <TouchableOpacity 
            style={styles.actionBtn} 
            onPress={() => navigation.navigate('Settings')}
          >
            <View style={styles.actionBtnLeft}>
              <View style={[styles.iconBg, { backgroundColor: colors.warning }]}><Ionicons name="settings" size={20} color="white" /></View>
              <Text style={styles.actionBtnText}>Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionBtn}
            onPress={() => Alert.alert('Appearance', 'Check inside Settings!')}
          >
            <View style={styles.actionBtnLeft}>
              <View style={[styles.iconBg, { backgroundColor: colors.success }]}><Ionicons name="color-palette" size={20} color="white" /></View>
              <Text style={styles.actionBtnText}>Appearance</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.logoutBtn} onPress={() => Alert.alert('Sign Out', 'Signing out logic here')}>
          <Ionicons name="log-out-outline" size={22} color={colors.danger} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const getStyles = (colors: any) => StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, paddingHorizontal: 20 },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: colors.text, marginBottom: 25 },
  
  avatarSection: { alignItems: 'center', marginBottom: 35 },
  avatarImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 4, borderColor: colors.card, marginBottom: 15 },
  nameText: { fontSize: 26, fontWeight: 'bold', color: colors.text, marginBottom: 6 },
  emailText: { fontSize: 15, color: colors.textSecondary, fontWeight: '500' },
  
  statsRow: { flexDirection: 'row', backgroundColor: colors.card, borderRadius: 24, paddingVertical: 22, marginBottom: 35, borderWidth: 1, borderColor: colors.border },
  statBox: { flex: 1, alignItems: 'center' },
  statDivider: { width: 1, backgroundColor: colors.border, marginVertical: 5 },
  statNumber: { fontSize: 22, fontWeight: 'bold', color: colors.tint, marginBottom: 4 },
  statLabel: { fontSize: 13, color: colors.textSecondary, fontWeight: 'bold' },
  
  actionSection: { marginBottom: 30 },
  actionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.card, padding: 16, borderRadius: 20, marginBottom: 15, borderWidth: 1, borderColor: colors.border },
  actionBtnLeft: { flexDirection: 'row', alignItems: 'center', gap: 15 },
  iconBg: { padding: 10, borderRadius: 12 },
  actionBtnText: { color: colors.text, fontSize: 17, fontWeight: '600' },
  
  logoutBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: colors.danger + '1A', padding: 18, borderRadius: 20, marginBottom: 40 },
  logoutText: { color: colors.danger, fontSize: 17, fontWeight: 'bold' }
});

export default ProfileScreen;