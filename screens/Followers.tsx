import ApiService from "@/services/ApiService";
import { Feather } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Followingstyles as styles } from '../assets/styles/Followers.styles.js';
const FollowersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const followData = await ApiService.get("follow");
      const fetchedFollowing = followData?.data?.following || [];
      setData(fetchedFollowing);
    } catch (err) {
      console.error("Failed to fetch follow data:", err);
      setError("Failed to load data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRemove = async (followId) => {
    try {
      await ApiService.delete(`follow/${followId}`);
      await fetchData();
    } catch (err) {
      console.error("Failed to remove follower:", err);
    }
  };

  const renderItem = ({ item }) => {
    const user = item.user;

    return (
      <View style={styles.followerContainer}>
        <Image
          source={
            user?.profile_photo
              ? { uri: user.profile_photo }
              : require("../assets/images/Ava.png")
          }
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{user?.username || "Unknown"}</Text>
          <Text style={styles.profession}>
            {user?.skills?.length ? user.skills[0] : "No Profession"}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => handleRemove(item.id)}
        >
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Followers</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignSelf: "center" }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default FollowersScreen;

