//FIXME - Fix the styling of the code
import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive.js';
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const messages = [
  {
    id: "1",
    name: "Sam I.",
    message: "I'm looking for a cook to create a dish for my new startup event.",
    avatar: require("../assets/images/sophia.png"),
  },
  {
    id: "2",
    name: "Ethan Bennett",
    message: "I'm a painter with over 5 years of experience.",
    avatar: require("../assets/images/Ava.png"),
  },
  {
    id: "3",
    name: "Olivia Hayes",
    message: "I'm a cleaner with over 3 years of experience.",
    avatar: require("../assets/images/Ava.png"),
  },
  {
    id: "4",
    name: "Noah Foster",
    message: "I'm a DJ and music mixer with over 2 years of experience.",
    avatar: require("../assets/images/Ava.png"),
  },
  {
    id: "5",
    name: "Ava Coleman",
    message: "I'm a flute singer with over 4 years of experience.",
    avatar: require("../assets/images/Ava.png"),
  },
];

const MessagesScreen = () => {
  const [searchText, setSearchText] = useState("");

  const filteredMessages = messages.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>

      <View style={styles.searchContainer}>
        <Feather name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          placeholder="Search messages"
          style={styles.searchInput}
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <FlatList
        data={filteredMessages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingTop: 10 }}
        renderItem={({ item }) => (
          <View style={styles.messageItem}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: rw(16),
    paddingTop: rh(20),
  },
  header: {
    fontSize: rf(22),
    fontWeight: "bold",
    color: "#6D028E",
    alignSelf: "center",
    marginBottom: rh(16),
    fontFamily: "Font-Bold",
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F2F5",
    borderRadius: rw(16),
    paddingHorizontal: rw(12),
    alignItems: "center",
    height: rh(48),
  },
  searchIcon: {
    marginRight: rw(8),
  },
  searchInput: {
    flex: 1,
    fontSize: rf(16),
    fontFamily: "Font-Regular",
    color: "#121417",
  },
  messageItem: {
    flexDirection: "row",
    paddingVertical: rh(8),
    alignItems: "center",
    height: rh(82),
    width: rw(390),
    minHeight: rh(72),
    gap: rw(16),
    paddingHorizontal: rw(16),
  },
  avatar: {
    width: rw(52),
    height: rw(52),
    borderRadius: rw(26),
    marginRight: rw(12),
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: rf(16),
    fontFamily: "Font-Bold",
    color: "#121417",
  },
  message: {
    fontSize: rf(14),
    color: "#5F6C86",
    fontFamily: "Font-Regular",
    marginTop: rh(2),
  },
});
