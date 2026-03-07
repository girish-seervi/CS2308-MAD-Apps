import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Badge = ({ title, isSelected, onPress }) => (
  <TouchableOpacity 
    style={[styles.badge, isSelected && styles.selectedBadge]} 
    onPress={onPress}
  >
    <Text style={[styles.text, isSelected && styles.selectedText]}>{title}</Text>
  </TouchableOpacity>
);

export default memo(Badge);

const styles = StyleSheet.create({
  badge: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 25, backgroundColor: '#f0f0f0', marginRight: 10 },
  selectedBadge: { backgroundColor: '#000' },
  text: { color: '#555', fontWeight: '600' },
  selectedText: { color: '#fff' }
});