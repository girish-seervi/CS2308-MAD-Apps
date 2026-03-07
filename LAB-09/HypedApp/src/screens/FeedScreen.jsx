import React, { useState, useMemo, useCallback } from 'react';
import { View, FlatList, ScrollView, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';
import DropCard from '../molecules/DropCard';
import Badge from '../atoms/Badge';

const CATEGORIES = ['All', 'Sneakers', 'Hoodies', 'Accessories'];

// Final Image Map with the fixed accessory link
const IMAGE_MAP = {
  Sneakers: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&q=80',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80'
  ],
  Hoodies: [
    'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80',
    'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=500&q=80',
    'https://images.unsplash.com/photo-1559551409-dadc959f76b8?w=500&q=80',
    'https://www.bonkerscorner.com/cdn/shop/files/3BACK_960x_crop_center.jpg?v=1760444282' 
  ],
  Accessories: [
    'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&q=80',
    'https://salty.co.in/cdn/shop/files/16771563326575c88a1b9bfed72b36d01b13d66cd1_thumbnail_600x_d8a69a79-2e94-4cf4-97be-ac6cf8f47724.webp',
    'https://www.thementhing.com/cdn/shop/articles/TMT_Blog_Image.jpg?v=1704782130&width=1100',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80' // Fixed image
  ]
};

const generateData = () => {
  const types = ['Sneakers', 'Hoodies', 'Accessories'];
  return Array.from({ length: 500 }).map((_, i) => {
    const category = types[i % types.length]; 
    const images = IMAGE_MAP[category];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    return {
      id: i.toString(),
      name: `HYPED ${category} Vol. ${i + 1}`,
      category: category,
      brand: i % 2 === 0 ? 'Off-White' : 'Cactus Jack',
      price: (Math.random() * 300 + 50).toFixed(0),
      image: randomImage,
      description: `Extremely limited ${category.toLowerCase()} drop. High quality, true to size fit.`
    };
  });
};

const ALL_PRODUCTS = generateData(); 

const formatDataForHybridList = (data) => {
  const formatted = [];
  let i = 0;
  while (i < data.length) {
    if ((i + 1) % 5 === 0) { 
      formatted.push({ type: 'hero', item: data[i], id: `hero-${data[i].id}` });
      i++;
    } else {
      const rowItems = [data[i]]; 
      i++;
      if (i < data.length && (i + 1) % 5 !== 0) {
        rowItems.push(data[i]);
        i++;
      }
      formatted.push({ type: 'grid', items: rowItems, id: `row-${rowItems[0].id}` });
    }
  }
  return formatted;
};

const FeedScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const formattedData = useMemo(() => {
    const filteredProducts = selectedCategory === 'All' 
      ? ALL_PRODUCTS 
      : ALL_PRODUCTS.filter(item => item.category === selectedCategory);
      
    return formatDataForHybridList(filteredProducts);
  }, [selectedCategory]); 

  const handlePress = useCallback((product) => {
    navigation.navigate('ProductDetail', { product });
  }, [navigation]);

  const renderItem = useCallback(({ item }) => {
    if (item.type === 'hero') {
      return <DropCard item={item.item} isHero={true} onPress={handlePress} />;
    }
    return (
      <View style={styles.row}>
        {item.items.map((subItem) => (
          <DropCard key={subItem.id} item={subItem} isHero={false} onPress={handlePress} />
        ))}
      </View>
    );
  }, [handlePress]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        
        {/* Header fully formatted for assessment */}
        <View style={styles.appHeader}>
          <Text style={styles.logoText}>HYPED</Text>
          <Text style={styles.studentInfo}>• Girish Seervi •</Text> 
        </View>

        <View style={styles.categoryContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryScroll}>
            {CATEGORIES.map(cat => (
              <Badge 
                key={cat} 
                title={cat} 
                isSelected={selectedCategory === cat} 
                onPress={() => setSelectedCategory(cat)} 
              />
            ))}
          </ScrollView>
        </View>

        <FlatList
          data={formattedData}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
          maxToRenderPerBatch={10}
          windowSize={5}
          removeClippedSubviews={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1 },
  appHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 15, paddingTop: 10, paddingBottom: 5 },
  logoText: { fontSize: 28, fontWeight: '900', letterSpacing: -1, color: '#000' },
  studentInfo: { fontSize: 11, color: '#888', fontWeight: '700', paddingBottom: 5, letterSpacing: 0.5 },
  categoryContainer: { paddingVertical: 15, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  categoryScroll: { paddingHorizontal: 15 },
  listContent: { padding: 15, paddingBottom: 50 },
  row: { flexDirection: 'row', justifyContent: 'space-between' }
});