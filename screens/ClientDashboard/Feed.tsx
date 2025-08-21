import ApiService from "@/services/ApiService";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FeedScreen = () => {
  const[data,setData]=useState([])
  const getData=async()=>{
const response=await ApiService.get('feed')
if(response!==null || undefined)
  setData(response?.data?.data?.feed)
console.log(data)
  }
  useEffect(()=>{
getData()
  },[])
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        style={styles.background}
      />
      <View style={styles.con1} />
      <View style={styles.con2} />

      {/* Top Feed/Clips icons */}
      <View style={styles.topIconRow}>
        <Image source={require("../../assets/icons/feed.png")} />
        <Image source={require("../../assets/icons/clips.png")} />
      </View>

      {/* White Card */}
      <View style={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Image
            source={require("../../assets/images/chef.jpg")}
            style={styles.mainImage}
            resizeMode="cover"
          />

          {/* Flag Icon */}
          <View style={styles.flagIcon}>
            <Image source={require("../../assets/icons/flag.png")} />
          </View>

          {/* Footer (Likes/Share/Bookmark + Book Button) */}
          <View style={styles.cardFooter}>
            <View style={styles.actionRow}>
              <View style={styles.iconGroup}>
                <Ionicons name="heart" size={24} color="red" />
                <Text>98</Text>
              </View>
              <View style={styles.iconGroup}>
                <Image
                  source={require("../../assets/icons/share (1).png")}
                  height={24}
                  width={24}
                />
                <Text>32</Text>
              </View>
              <View style={styles.iconGroup}>
                <Ionicons name="bookmark" size={24} color="#FE5120" />
                <Text>15</Text>
              </View>
            </View>

            <View style={styles.bookNowWrapper}>
              <View style={styles.bookNowButton}>
                <Text style={styles.bookNowText}>Book Now</Text>
                <Image
                  source={require("../../assets/icons/rightArrowWhite.png")}
                  style={styles.bookNowIcon}
                />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Play Button */}
      <Image
        source={require("../../assets/icons/play.png")}
        style={styles.playButton}
      />

      {/* Profile Section */}
      <View style={styles.profileCard}>
        <Text style={styles.profileName}>Ava Carter</Text>
        <View style={styles.profileRow}>
          <Text style={styles.profileInfo}>Los Angeles | Chef</Text>
          <Text style={styles.profileViews}>512 Views</Text>
        </View>
        <Text style={styles.profileStats}>59 Jobs Completed</Text>
      </View>

      {/* Rating Section */}
      <View style={styles.ratingContainer}>
        <Image source={require("../../assets/icons/star.png")} />
        <Text style={styles.ratingText}>5.0(46)</Text>
      </View>
    </SafeAreaView>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 311,
  },
  con1: {
    position: "absolute",
    backgroundColor: "white",
    height: 407,
    width: 305,
    left: 35,
    top: 67,
    borderRadius: 15,
    zIndex: 0,
    opacity: 0.3,
  },
  con2: {
    position: "absolute",
    backgroundColor: "white",
    height: 407,
    width: 325,
    left: 25,
    top: 73,
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 0,
  },
  topIconRow: {
    flexDirection: "row",
    position: "absolute",
    top: 13,
    left: 143,
    gap: 10,
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    width: 344,
    height: 679.94,
    top: 80,
    left: 16,
    borderRadius: 12,
    position: "absolute",
  },
  cardContent: {
    height: 661,
    width: 312,
    overflow: "hidden",
    left: 16,
    top: 15,
    borderRadius: 12,
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 1 }],
  },
  flagIcon: {
    height: 30,
    width: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "absolute",
    top: 11,
    left: 271,
    justifyContent: "center",
    alignItems: "center",
  },
  cardFooter: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: 94,
    width: 312,
    top: 567,
    left: 0,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 35,
    width: 312,
  },
  iconGroup: {
    height: 40,
    width: 70,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  bookNowWrapper: {
    height: 59,
    width: 312,
    alignItems: "center",
  },
  bookNowButton: {
    width: 289,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#6D028E",
    position: "relative",
  },
  bookNowText: {
    color: "#FFFFFF",
    fontSize: 14,
    top: 9.5,
    left: 99,
  },
  bookNowIcon: {
    position: "absolute",
    top: 11,
    left: 173,
  },
  playButton: {
    position: "absolute",
    top: 308,
    left: 156,
  },
  profileCard: {
    position: "absolute",
    width: 312,
    height: 97,
    minWidth: 288,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    opacity: 0.9,
    top: 566,
    left: 32,
    paddingVertical: 16,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Font-Bold",
    lineHeight: 23,
    letterSpacing: 0,
    color: "#121417",
  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 24,
    paddingTop: 5,
  },
  profileInfo: {
    color: "#667582",
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Font-Regular",
  },
  profileViews: {
    color: "#24364C",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
  },
  profileStats: {
    width: 270,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
    color: "#667582",
  },
  ratingContainer: {
    position: "absolute",
    top: 585,
    left: 292,
    height: 16,
    width: 46,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#24364C",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
  },
});
