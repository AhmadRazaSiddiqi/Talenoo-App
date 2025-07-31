import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { rf, rh, rw } from '../../utils/scaling';

const messages = [
  {
    id: "1",
    text: "Hi, How are you",
    from: "Sophia",
    avatar: require("../assets/images/user1.png"),
  },
  {
    id: "2",
    text: "Hi Sophia, I'm available tomorrow",
    from: "Me",
  },
  {
    id: "3",
    text: "Yes, tomorrow afternoon works",
    from: "Sophia",
    avatar: require("../assets/images/user2.png"),
  },
  {
    id: "4",
    text: "Great, 2 PM it is. I'll send you",
    from: "Me",
  },
];

const ChatScreen = () => {
  const [input, setInput] = useState("");

  const renderItem = ({ item }) => {
    const isMe = item.from === "Me";

    return (
      <View
        style={[
          styles.messageContainer,
          !isMe ? { paddingLeft: 0 } : { paddingLeft: 45 },
        ]}
      >
        {!isMe && item.avatar && (
          <Image source={item.avatar} style={styles.avatar} />
        )}
        <View
          style={[
            styles.bubble,
            {
              backgroundColor: isMe ? "#6D028E" : "#F2F2F5",
            },
          ]}
        >
          <Text
            style={[styles.messageText, { color: isMe ? "#fff" : "#121417" }]}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/icons/back.png")} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Sophia Bennett</Text>
        <TouchableOpacity>
          <Image source={require("../assets/icons/flag.png")} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write a message"
          placeholderTextColor="#9CA3AF"
          value={input}
          onChangeText={setInput}
          style={styles.input}
          keyboardType="default"
        />
        <TouchableOpacity style={{ backgroundColor: "#F2F2F5" }}>
          <Image source={require("../assets/icons/paperPlane.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ height: 20, width: 390 }}></View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: rw(16),
    paddingTop: rh(16),
    paddingBottom: rh(8),
    height: rh(72),
    width: rw(390),
  },
  headerText: {
    fontSize: rf(18),
    fontWeight: "700",
    color: "#6D028E",
    fontFamily: "Font-Bold",
    lineHeight: rh(23),
    letterSpacing: 0,
  },
  messageContainer: {
    flexDirection: "row",
    padding: rw(16),
    justifyContent: "center",
    gap: rw(12),
  },
  bubble: {
    width: rw(300),
    height: rh(48),
    maxWidth: rw(360),
    paddingVertical: rh(12),
    paddingHorizontal: rw(16),
    borderRadius: rw(12),
    flexDirection: "row",
    gap: rw(12),
  },
  messageText: {
    fontSize: rf(16),
    lineHeight: rh(24),
    letterSpacing: 0,
    fontFamily: "Font-Regular",
    fontWeight: "400",
  },
  avatar: {
    width: rw(40),
    height: rw(40),
    borderRadius: rw(20),
  },
  inputContainer: {
    flexDirection: "row",
    gap: rw(12),
    paddingHorizontal: rw(16),
    alignItems: "center",
    justifyContent: "center",
    height: rh(48),
    width: rw(358),
    paddingVertical: rh(12),
    alignSelf: "center",
  },
  input: {
    fontSize: rf(16),
    height: rh(48),
    width: rw(358),
    borderRadius: rw(12),
    backgroundColor: "#F2F2F5",
    fontFamily: "Font-Regular",
    outlineColor: "transparent",
  },
});
