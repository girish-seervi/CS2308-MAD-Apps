import React, { memo } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const StyledButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default memo(StyledButton);

const styles = StyleSheet.create({
  button: { backgroundColor: '#000', paddingVertical: 18, borderRadius: 12, alignItems: 'center' },
  text: { color: '#fff', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }
});