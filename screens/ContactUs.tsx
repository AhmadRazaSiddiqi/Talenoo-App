import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ContactUsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>Contact Us</Text>
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#6B7280"
            style={styles.input}
          />
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#6B7280"
            style={styles.input}
          />
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Subject"
            placeholderTextColor="#6B7280"
            style={styles.input}
          />
        </View>

        <View style={styles.messageInputCntainer}>
          <TextInput
            placeholder=""
            placeholderTextColor="#6B7280"
            style={[styles.input, styles.messageInput]}
            multiline
          />
        </View>

        <View style={styles.submitBtnContainer}>
          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.otherWaysContainer}>
          <Text style={styles.otherWaysHeader}>Other ways to reach us</Text>
        </View>

        <View style={styles.emailContainer}>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/icons/mail.png")} />
          </View>
          <View style={styles.emailRow}>
            <Text style={styles.emailLabel}>Email</Text>
            <Text style={styles.emailAddress}>support@example.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  main: {
    height: 663,
    width: 390,
  },
  //   scroll: {
  //     padding: 20,
  //   },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 72,
    width: 390,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },

  headerText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 18,
    color: "#6D028E",
    fontWeight: "700",
    lineHeight: 23,
    marginRight: 24, // to balance back icon space
  },
  detailsInputContainer: {
    height: 80,
    width: 390,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    height: 56,
    width: 358,
    backgroundColor: "#F2F2F5",
    borderRadius: 12,
    fontWeight: "400",
    padding: 16,
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 16,
    color: "#6B7582",
    outlineColor: "transparent",
  },
  messageInputCntainer: {
    height: 168,
    width: 390,
    gap: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  messageInput: {
    height: 144,
    width: 358,
    borderRadius: 12,
    padding: 16,
  },
  submitBtnContainer: {
    height: 64,
    width: 390,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  submitButton: {
    backgroundColor: "#6D028E",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    height: 40,
    width: 358,
    minWidth: 84,
    maxWidth: 480,
  },
  submitText: {
    color: "#fff",
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: "center",
  },
  otherWaysContainer: {
    height: 47,
    width: 390,
    paddingTop: 16,
    paddingHorizontal: 16,
    bottom: 8,
  },
  otherWaysHeader: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 18,
    color: "#121417",
    fontWeight: "700",
    lineHeight: 23,
    letterSpacing: 0,
  },
  emailRow: {
    flexDirection: "column",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 48,
    width: 48,
    backgroundColor: "#F2F2F5",
    borderRadius: 8,
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 16,
    minHeight: 72,
    width: 390,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  emailLabel: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 16,
    color: "#121417",
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
  },
  emailAddress: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 14,
    color: "#6B7582",
    lineHeight: 21,
    letterSpacing: 0,
    fontWeight: "400",
    height: 21,
  },
});

export default ContactUsScreen;
