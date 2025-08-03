import { responsiveFontSize, responsiveHeight, responsiveWidth } from "@/utils/responsive";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const BookingDetailsModal = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
      </View>

      {/* Client Profile */}
      <View style={styles.clientSection}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require("../../assets/images/clientProfile.png")}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.clientInfo}>
          <Text style={styles.clientName}>Sophia Bennett</Text>
          <Text style={styles.clientLabel}>Client</Text>
        </View>
      </View>

      {/* Booking Details */}
      <View style={styles.detailsSection}>
        <Text style={styles.sectionTitle}>Booking Details</Text>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/images/calendar.png")} />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>Date</Text>
            <Text style={styles.detailValue}>July 15, 2024</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/images/watch.png")} />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>Time</Text>
            <Text style={styles.detailValue}>13:00 - 14:00</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/images/location.png")} />
          </View>
          <View style={styles.detailContent}>
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>123 Main Street, Anytown</Text>
          </View>
          <TouchableOpacity style={styles.mapButton}>
            <Image source={require("../../assets/images/map.png")} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Client Message */}
      <View style={styles.messageSection}>
        <Text style={styles.sectionTitle}>Client Message</Text>
        <Text style={styles.messageText}>
          Looking forward to our session! I'm excited to work with you on my new
          project.
        </Text>
      </View>

      {/* Action Buttons */}
      <View>
        <View style={styles.messageWrapper}>
          <TouchableOpacity style={styles.messageButton}>
            <Image source={require("../../assets/images/message.png")} />
            <Text style={styles.messageButtonText}>Message Client</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.feedbackbtnWrapper}>
          <TouchableOpacity style={styles.feedbackButton}>
            <Text style={styles.feedbackButtonText}>Complete Task</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop:responsiveHeight(5),
    // justifyContent:'center',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(20),
    paddingVertical:responsiveHeight(16),
  },
  headerTitle: {
    fontSize: responsiveFontSize(18),
    lineHeight: responsiveHeight(23),
    fontWeight: "700",
    color: "#6D028E",
    textAlign: "center",
    flex: 1,
    fontFamily: "Font-Bold",
  },
  clientSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(24),
  },
  profileImageContainer: {
    width: responsiveWidth(128),
    height: responsiveWidth(128),
    borderRadius: responsiveWidth(64),
    backgroundColor: "#F5E6D3",
    marginRight: responsiveWidth(16),
    overflow: "hidden",
  },
  profileImage: {
    width: "100%",
    height: "100%",
  },
  clientInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: responsiveFontSize(22),
    fontWeight: "700",
    color: "#121417",
    marginBottom: responsiveHeight(4),
    fontFamily: "Font-Bold",
  },
  clientLabel: {
    fontSize: responsiveFontSize(16),
    color: "#6B7582",
    fontFamily: "Font-Regular",
    fontWeight: 400,
  },
  detailsSection: {
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(16),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(20),
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: responsiveHeight(20),
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(20),
  },
  iconContainer: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    backgroundColor: "#F2F2F5",
    borderRadius: responsiveWidth(8),
    justifyContent: "center",
    alignItems: "center",
    marginRight: responsiveWidth(16),
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: responsiveFontSize(16),
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: responsiveHeight(4),
  },
  detailValue: {
    fontSize: responsiveFontSize(14),
    color: "#666",
  },
  mapButton: {
    padding: 8,
  },
  messageSection: {
    paddingHorizontal: responsiveWidth(20),
    paddingVertical: responsiveHeight(16),
  },
  messageText: {
    fontFamily: "Font-Regular",
    fontSize: responsiveFontSize(16),
    color: "#121417",
    lineHeight: responsiveHeight(24),
    fontWeight: "400",
    letterSpacing: 0,
    flexShrink: 1,
    width: responsiveWidth(358),
  },
  messageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F5",
    // backgroundColor:'red',
    borderRadius: responsiveWidth(20),
    paddingHorizontal: responsiveWidth(16),
    width: responsiveWidth(358),
    height: responsiveHeight(40),
    gap: responsiveWidth(8),
  },
  messageButtonText: {
    fontSize: responsiveFontSize(14),
    fontWeight: "700",
    color: "#121417",
    marginLeft: responsiveWidth(8),
    fontFamily: "Font-Bold",
  },
  feedbackButton: {
    backgroundColor: "#FE5120",
    borderRadius: responsiveWidth(20),
    // padding: 16,
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(40),
    maxHeight: responsiveHeight(480),
    width: responsiveWidth(360),
    maxWidth: responsiveWidth(480),
  },
  feedbackButtonText: {
    fontSize: responsiveFontSize(16),
    fontWeight: "400",
    color: "#ffffff",
    lineHeight: responsiveHeight(24),
    fontFamily: "Font-Regular",
    letterSpacing: 0,
  },
  messageWrapper: {
    height: responsiveHeight(64),
    width: responsiveWidth(390),
    paddingVertical: responsiveHeight(12),
    paddingHorizontal:responsiveWidth(12),
    
    
    // paddingHorizontal: responsiveWidth(16),
  },
  feedbackbtnWrapper: {
    display: "flex",
    width: responsiveWidth(390),
    height: responsiveHeight(64),
   paddingVertical:responsiveHeight(12),
   paddingHorizontal:responsiveWidth(12)


  },
});

export default BookingDetailsModal;
