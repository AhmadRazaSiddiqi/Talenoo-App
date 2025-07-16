import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const contentData = [
  {
    id: 1,
    title: "Exploring the Ancient Ruins",
    time: "Uploaded 2 weeks ago",
    likes: "1.2K likes",
    shares: "350 shares",
    image: require("../assets/images/ancient.png"),
  },
  {
    id: 2,
    title: "A Day at the Beach",
    time: "Uploaded 1 month ago",
    likes: "850 likes",
    shares: "200 shares",
    image: require("../assets/images/beach.png"),
  },
  {
    id: 3,
    title: "Cooking with Chef Amelia",
    time: "Uploaded 2 months ago",
    likes: "1.5K likes",
    shares: "400 shares",
    image: require("../assets/images/kitchen.png"),
  },
  {
    id: 4,
    title: "A Day at the Beach",
    time: "Uploaded 1 month ago",
    likes: "850 likes",
    shares: "200 shares",
    image: require("../assets/images/beach.png"),
  },
];

const ManageContentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>Manage Content</Text>
          <View style={{ width: 24 }} /> {/* Spacer to balance back icon */}
        </View>

        {contentData.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <View style={styles.contentRow}>
              <Image source={item.image} style={styles.thumbnail} />
              <View
                style={{
                  display: "flex",
                  // backgroundColor: "red",
                  width:218,
                  height:146
                }}
              >
                <View style={styles.infoContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.stats}>
                    {item.likes} · {item.shares}
                  </Text>
                </View>

                <View style={styles.actionRow}>
                 <View style={styles.actionButtonContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Image source={require('../assets/icons/pencil.png')}/>
                    </TouchableOpacity>
                      <Text style={styles.actionText}>Edit</Text>
                 </View>

                 <View style={styles.actionButtonContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Image source={require('../assets/icons/trash.png')}/>
                    </TouchableOpacity>
                      <Text style={styles.actionText}>Delete</Text>
                 </View>

                 <View style={styles.actionButtonContainer}>
                    <TouchableOpacity style={styles.actionButton}>
                      <Image source={require('../assets/icons/share.png')}/>
                    </TouchableOpacity>
                      <Text style={styles.actionText}>Share</Text>
                 </View>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scroll: {
    height: 752,
    width: 390,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 16,
    height: 72,
    width: 390,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  headerText: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 18,
    color: "#6D028E",
    lineHeight:23,
    letterSpacing:0,
    textAlign:'center'
  },
  itemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: 390,
    height: 170,
  },
  contentRow: {
    flexDirection: "row",
    height: 146,
    width: 358,
    gap: 16,
  },
  thumbnail: {
    width: 124,
    height: 70,
    borderRadius: 8
  },
  infoContainer: {
    display: "flex",
  },
  title: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 16,
    color: "#000",
    paddingBottom: 4,
  },
  time: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 14,
    color: "#667582",
    paddingBottom: 2,
    lineHeight:21
  },
  stats: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 14,
    color: "#6B7280",
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:'center',
    width:171,
    height:80,
  },
  actionButton: {
    alignItems: "center",
    justifyContent:'center',
    backgroundColor: "#F2F2F5",
    borderRadius: 20,
    width: 40,
    height:40
  },
  actionText: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 12,
    color: "#000",
    paddingTop: 4,
  },
  actionButtonContainer:{
    display:'flex',
    height:80,
    width:50.33,
    gap:8,
    alignItems:'center',
    justifyContent:'center',
    paddingVertical:10,
  }
});

export default ManageContentScreen;
