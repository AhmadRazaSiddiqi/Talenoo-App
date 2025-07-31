import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive.js';
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
    minHeight: rh(360),
    width: rw(390),
  },
  headerContainer: {
    flexDirection: "row",
    height: rh(72),
    width: rw(390),
    paddingTop: rh(16),
    paddingHorizontal: rw(16),
    paddingBottom: rh(8),
    alignItems: "center",
  },
  backButton: {
    height: rh(48),
    width: rw(48),
    justifyContent: "center",
  },
  backArrow: {
    fontSize: rf(24),
    color: "#000",
    fontFamily: "Font-Regular",
  },
  headerText: {
    fontSize: rf(18),
    lineHeight: rh(23),
    letterSpacing: 0,
    fontFamily: "Font-Bold",
    color: "#121417",
    fontWeight: "700",
    textAlign: 'center',
    paddingRight: rw(48),
  },
  headerTextContainer: {
    height: rh(23),
    width: rw(310),
    justifyContent: "center",
  },
  WishlistContainer: {
    display: "flex",
    flexDirection: "row",
    height: rh(72),
    minHeight: rh(72),
    width: rw(390),
    paddingVertical: rh(8),
    paddingHorizontal: rw(16),
    justifyContent: "space-between",
    alignItems: "center",
  },
  Person: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: rw(16),
    height: rh(56),
    width: rw(168),
  },
  details: {
    height: rh(45),
  },
  name: {
    fontSize: rf(16),
    fontWeight: "500",
    fontFamily: "Font-Medium",
    color: "#121417",
    lineHeight: rh(24),
    letterSpacing: 0,
  },
  profession: {
    fontFamily: "Font-Regular",
    fontWeight: "400",
    fontSize: rf(14),
    color: "#667582",
    lineHeight: rh(21),
    letterSpacing: 0,
  },
  image: {
    height: rh(56),
    width: rw(56),
    borderRadius: rw(28),
  },
  removeBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F5",
    width: rw(87),
    height: rh(32),
    borderRadius: rw(16),
    paddingHorizontal: rw(16),
  },
  removeBtnText: {
    fontFamily: "Font-Medium",
    color: "#121417",
  },
});
