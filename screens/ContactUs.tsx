import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive.js';
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
    height: rh(663),
    width: rw(390),
  },
  //   scroll: {
  //     padding: 20,
  //   },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: rh(72),
    width: rw(390),
    paddingTop: rh(16),
    paddingBottom: rh(8),
    paddingHorizontal: rw(16),
  },

  headerText: {
    flex: 1,
    textAlign: "center",
    fontFamily: "Font-Bold",
    fontSize: rf(18),
    color: "#6D028E",
    fontWeight: "700",
    lineHeight: rh(23),
    marginRight: rw(24), // to balance back icon space
  },
  detailsInputContainer: {
    height: rh(80),
    width: rw(390),
    paddingVertical: rh(12),
    paddingHorizontal: rw(16),
    gap: rw(16),
  },
  input: {
    height: rh(56),
    width: rw(358),
    backgroundColor: "#F2F2F5",
    borderRadius: rw(12),
    fontWeight: "400",
    padding: rw(16),
    fontFamily: "Font-Regular",
    fontSize: rf(16),
    color: "#6B7582",
    outlineColor: "transparent",
  },
  messageInputCntainer: {
    height: rh(168),
    width: rw(390),
    gap: rw(16),
    paddingVertical: rh(12),
    paddingHorizontal: rw(16),
  },
  messageInput: {
    height: rh(144),
    width: rw(358),
    borderRadius: rw(12),
    padding: rw(16),
  },
  submitBtnContainer: {
    height: rh(64),
    width: rw(390),
    paddingVertical: rh(12),
    paddingHorizontal: rw(16),
  },
  submitButton: {
    backgroundColor: "#6D028E",
    borderRadius: rw(20),
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: rw(16),
    height: rh(40),
    width: rw(358),
    minWidth: rw(84),
    maxWidth: rw(480),
  },
  submitText: {
    color: "#fff",
    fontFamily: "Font-Bold",
    fontSize: rf(14),
    fontWeight: "700",
    lineHeight: rh(21),
    letterSpacing: 0,
    textAlign: "center",
  },
  otherWaysContainer: {
    height: rh(47),
    width: rw(390),
    paddingTop: rh(16),
    paddingHorizontal: rw(16),
    bottom: rh(8),
  },
  otherWaysHeader: {
    fontFamily: "Font-Bold",
    fontSize: rf(18),
    color: "#121417",
    fontWeight: "700",
    lineHeight: rh(23),
    letterSpacing: 0,
  },
  emailRow: {
    flexDirection: "column",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: rw(48),
    width: rw(48),
    backgroundColor: "#F2F2F5",
    borderRadius: rw(8),
  },
  emailContainer: {
    display: "flex",
    flexDirection: "row",
    gap: rw(16),
    minHeight: rw(72),
    width: rw(390),
    paddingHorizontal: rw(16),
    paddingVertical: rw(8),
  },
  emailLabel: {
    fontFamily: "Font-Bold",
    fontSize: rf(16),
    color: "#121417",
    fontWeight: "500",
    lineHeight: rh(24),
    letterSpacing: 0,
  },
  emailAddress: {
    fontFamily: "Font-Regular",
    fontSize: rf(14),
    color: "#6B7582",
    lineHeight: rh(21),
    letterSpacing: 0,
    fontWeight: "400",
    height: rh(21),
  },
});

export default ContactUsScreen;
