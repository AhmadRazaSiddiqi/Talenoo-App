import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const followersData = [
  {
    id: "1",
    name: "Noah Thompson",
    profession: "Designer",
    avatar: require('../assets/images/Noah.png'),
  },
  {
    id: "2",
    name: "Noah Parker",
    profession: "Musician",
    avatar: require('../assets/images/NoahP.png'),
  },
  {
    id: "3",
    name: "Olivia Hayes",
    profession: "Illustrator",
    avatar: require('../assets/images/Olivia.png'),
  },
  {
    id: "4",
    name: "Noah Parker",
    profession: "Musician",
    avatar: require('../assets/images/NoahP.png'),
  },
  {
    id: "5",
    name: "Lucas Morgan",
    profession: "Filmmaker",
    avatar: require('../assets/images/Lucas.png'),
  },
  {
    id: "6",
    name: "Ethan Bennett",
    profession: "Photographer",
    avatar: require('../assets/images/Ethan.png'),
  },
  {
    id: "7",
    name: "Ethan Bennett",
    profession: "Photographer",
    avatar: require('../assets/images/Ethan.png'),
  },
  {
    id: "8",
    name: "Olivia Hayes",
    profession: "Illustrator",
    avatar: require('../assets/images/Olivia.png'),
  },
];

const FollowersScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.followerContainer}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.profession}>{item.profession}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Followers</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <FlatList
        data={followersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{alignSelf:'center'}}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FollowersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    flexDirection: "row",
    height:72,
    width:390,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 18,
    lineHeight:23,
    fontFamily: "Font-Bold",
    color: "#6D028E", // Purple as in design
    fontWeight:'700',
    letterSpacing:0
  },
  followerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    height:72,
    minHeight:72,
    width:390,
    justifyContent:'space-between'

  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 288,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: "Font-Regular",
    color:'#121417',
    fontWeight:'500',
    lineHeight:24
  },
  profession: {
    fontSize: 14,
    fontFamily: "Font-Regular",
    color: "#6B7582",
    lineHeight:21,
    letterSpacing:0,
    fontWeight:'400'
  },
  removeButton: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  removeButtonText: {
    fontSize: 14,
    fontFamily: "Font-Regular",
    fontWeight:'500',
    color:'#121417'
  },
});
