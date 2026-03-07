import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import SizeGrid from '../molecules/SizeGrid';
import StyledButton from '../atoms/StyledButton';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <Image source={{ uri: product.image }} style={styles.heroImage} resizeMode="cover" />

          <View style={styles.detailsContainer}>
            <View style={styles.titleRow}>
              <View style={styles.textColumn}>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.title}>{product.name}</Text>
              </View>
              <Text style={styles.price}>${product.price}</Text>
            </View>

            <Text style={styles.description}>{product.description}</Text>

            <View style={styles.divider} />

            {/* Dynamically change the title based on the category */}
            <Text style={styles.sectionTitle}>
              {product.category === 'Accessories' ? 'Select Option' : 'Select Size'}
            </Text>
            
            {/* Pass the category down to the Grid! */}
            <SizeGrid category={product.category} />
            
            <View style={{ height: 80 }} /> 
          </View>
        </ScrollView>

        <View style={styles.stickyFooter}>
          <StyledButton title="Join Waitlist" onPress={() => alert(`Successfully joined the drop waitlist for ${product.name}!`)} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  heroImage: { width: '100%', height: 350, backgroundColor: '#f0f0f0' },
  detailsContainer: { padding: 20 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  textColumn: { flex: 1, paddingRight: 10 },
  brand: { fontSize: 16, color: '#888', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 5 },
  title: { fontSize: 24, fontWeight: '800' },
  price: { fontSize: 22, fontWeight: 'bold' },
  description: { fontSize: 16, color: '#444', lineHeight: 24 },
  divider: { height: 1, backgroundColor: '#eee', marginVertical: 25 },
  sectionTitle: { fontSize: 18, fontWeight: '700' },
  stickyFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingBottom: 30, 
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderTopWidth: 1,
    borderColor: '#eee'
  }
});