import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

type Screen = "list" | "payment";

/* ---------------------- HOTEL DATA ---------------------- */
const hotels = [
  { id: "1", name: "Ocean View Resort", price: 8999, img: "https://picsum.photos/200?1" },
  { id: "2", name: "Grand Palace Hotel", price: 7499, img: "https://picsum.photos/200?2" },
  { id: "3", name: "Mountain Paradise Inn", price: 6599, img: "https://picsum.photos/200?3" },
  { id: "4", name: "Royal Heritage Stay", price: 9999, img: "https://picsum.photos/200?4" },
  { id: "5", name: "Sunset Beach Hotel", price: 8499, img: "https://picsum.photos/200?5" },
  { id: "6", name: "The Urban Boutique", price: 5599, img: "https://picsum.photos/200?6" },
  { id: "7", name: "Palm Tree Residency", price: 4999, img: "https://picsum.photos/200?7" },
  { id: "8", name: "Crystal Lake Resort", price: 9199, img: "https://picsum.photos/200?8" },
  { id: "9", name: "Golden Sands Retreat", price: 7999, img: "https://picsum.photos/200?9" },
  { id: "10", name: "Skyline Tower Hotel", price: 8799, img: "https://picsum.photos/200?10" },
  { id: "11", name: "Serenity Suites", price: 6899, img: "https://picsum.photos/200?11" },
  { id: "12", name: "Green Valley Lodge", price: 5299, img: "https://picsum.photos/200?12" },
];

const logos = {
  mandiri: "https://cdn-icons-png.flaticon.com/512/5968/5968260.png",
  bca: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  bni: "https://cdn-icons-png.flaticon.com/512/5968/5968259.png",
  mega: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
  card: "https://cdn-icons-png.flaticon.com/512/633/633611.png"
};

export default function App() {
  const [screen, setScreen] = useState<Screen>("list");

  /* ---------------- HOTEL LIST ---------------- */
  if (screen === "list")
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Available Hotels</Text>

        <FlatList
          data={hotels}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => setScreen("payment")}
            >
              <Image source={{ uri: item.img }} style={styles.image} />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.location}>Indonesia</Text>
                <Text style={styles.stars}>⭐⭐⭐⭐☆</Text>
              </View>

              <Text style={styles.price}>₹ {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    );

  /* ---------------- PAYMENT PAGE ---------------- */
  return (
    <View style={{ flex: 1, backgroundColor: "#7B2FF7" }}>
      <SafeAreaView>
        <TouchableOpacity onPress={() => setScreen("list")}>
          <Text style={styles.back}>← Payment</Text>
        </TouchableOpacity>
      </SafeAreaView>

      <View style={styles.sheet}>
        <Text style={styles.timer}>
          Complete your booking within <Text style={{ color: "red" }}>01:00:00</Text>
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.section}>Bank Transfer</Text>
          <PaymentItem title="Bank Mandiri" logo={logos.mandiri} />
          <PaymentItem title="Bank BCA" logo={logos.bca} />
          <PaymentItem title="Bank BNI" logo={logos.bni} />
          <PaymentItem title="Bank Mega" logo={logos.mega} />

          <Text style={styles.section}>Virtual Account</Text>
          <PaymentItem title="Mandiri Virtual Account" logo={logos.mandiri} />
          <PaymentItem title="BCA Virtual Account" logo={logos.bca} />
          <PaymentItem title="BNI Virtual Account" logo={logos.bni} />
          <PaymentItem title="Mega Virtual Account" logo={logos.mega} />

          <Text style={styles.section}>Installments (No Credit Card)</Text>
          <PaymentItem title="Kredivo" logo={logos.card} />
          <PaymentItem title="Under 17 Years (Terms Apply)" logo={logos.card} />
        </ScrollView>
      </View>
    </View>
  );
}

/* ---------------- PAYMENT ROW ---------------- */
const PaymentItem = ({ title, logo }: { title: string; logo: string }) => (
  <TouchableOpacity style={styles.row}>
    <View style={styles.left}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <Text style={styles.bank}>{title}</Text>
    </View>

    <View style={styles.circle}>
      <Text style={styles.arrow}>›</Text>
    </View>
  </TouchableOpacity>
);

/* ---------------- STYLES ---------------- */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F4F6", padding: 18 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 15 },

  card: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 12,
    borderRadius: 18,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  image: { width: 70, height: 70, borderRadius: 14, marginRight: 12 },
  name: { fontSize: 16, fontWeight: "bold" },
  location: { color: "#777", marginVertical: 2 },
  stars: { color: "orange" },
  price: { color: "#7B2FF7", fontWeight: "bold", fontSize: 15 },

  back: { color: "white", fontSize: 18, padding: 16, fontWeight: "bold" },

  sheet: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 18,
  },

  timer: { textAlign: "center", marginBottom: 18, color: "#7B2FF7", fontWeight: "600" },
  section: { fontSize: 18, fontWeight: "bold", marginTop: 18, marginBottom: 10 },

  row: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: { flexDirection: "row", alignItems: "center" },

  logo: { width: 38, height: 38, marginRight: 12, resizeMode: "contain" },
  bank: { fontSize: 16 },

  circle: {
    width: 28,
    height: 28,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#7B2FF7",
    alignItems: "center",
    justifyContent: "center",
  },

  arrow: { color: "#7B2FF7", fontWeight: "bold", fontSize: 18 },
});