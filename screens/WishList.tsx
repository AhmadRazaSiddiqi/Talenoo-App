import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const renderItem = [
  {
    name: "Ethan Carter",
    profession: "Musician",
    image: require("../assets/images/EthanC.png"),
  },
  {
    name: "Olivia Bennett",
    profession: "Photographer",
    image: require("../assets/images/OliviaB.png"),
  },
  {
    name: "Noah Thompson",
    profession: "Designer",
    image: require("../assets/images/Noah.png"),
  },
  {
    name: "Ava Harper",
    profession: "Chef",
    image: require("../assets/images/Ava.png"),
  },
];
const WishListScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require("../assets/icons/back.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            {" "}
            <Text style={styles.headerText}>Wishlist</Text>
          </View>
        </View>
        <FlatList
          contentContainerStyle={{ width: 390 }}
          data={renderItem}
          renderItem={({ item }) => (
            <View style={styles.WishlistContainer}>
              <View style={styles.Person}>
                <Image source={item.image} style={styles.image} />
                <View style={styles.details}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.profession}>{item.profession}</Text>
                </View>
              </View>
              <View style={styles.removeBtn}>
                <Text style={styles.removeBtnText}>Remove</Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default WishListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  main: {
    minHeight: 360,
    width: 390,
  },
  headerContainer: {
    flexDirection: "row",
    height: 72,
    width: 390,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: "center",
  },
  backButton: {
    height: 48,
    width: 48,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
    fontFamily: "PlusJakartaSans-Regular",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0,
    fontFamily: "PlusJakartaSans-Bold",
    color: "#121417",
    fontWeight: "700",
  textAlign:'center',
  paddingRight:48
  },
  headerTextContainer: {
    height: 23,
    width: 310,
    justifyContent: "center",
  
  },
  WishlistContainer: {
    display: "flex",
    flexDirection: "row",
    height: 72,
    minHeight: 72,
    width: 390,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  Person: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    height: 56,
    width: 168,
  },
  details: {
    height: 45,
  },
  name: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "PlusJakartaSans-Medium",
    color: "#121417",
    lineHeight: 24,
    letterSpacing: 0,
  },
  profession: {
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "400",
    fontSize: 14,
    color: "#667582",
    lineHeight: 21,
    letterSpacing: 0,
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  removeBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F5",
    width: 87,
    height: 32,
    borderRadius: 16,
    paddingHorizontal: 16,
  },
  removeBtnText: {
    fontFamily: "PlusJakartaSans-Medium",
    color: "#121417",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: 0,
    fontWeight: "500",
  },
});
