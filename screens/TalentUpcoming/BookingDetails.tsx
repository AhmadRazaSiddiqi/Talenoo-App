//FIXME - Fix Booking Screen
import { AntDesign, Feather } from "@expo/vector-icons";
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
const BookingDetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Details</Text>
        <TouchableOpacity style={styles.backButton}>
          <Feather name="flag" size={24} color="black" />
        </TouchableOpacity>
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
       <View style={styles.completebtnWrapper}>
            <TouchableOpacity style={styles.completeButton}>
              <Text style={styles.completeButtonText}>Give Feedback</Text>
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
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  backButton: {},
  headerTitle: {
    fontSize: 18,
    lineHeight: 23,
    fontWeight: "700",
    color: "#6D028E",
    textAlign: "center",
    flex: 1,
    fontFamily: "Font-Bold",
  },
  clientSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  profileImageContainer: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: "#F5E6D3",
    marginRight: 16,
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
    fontSize: 22,
    fontWeight: "700",
    color: "#121417",
    marginBottom: 4,
    fontFamily: "Font-Bold",
  },
  clientLabel: {
    fontSize: 16,
    color: "#6B7582",
    fontFamily: "Font-Regular",
    fontWeight: 400,
  },
  detailsSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F2F2F5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: "#666",
  },
  mapButton: {
    padding: 8,
  },
  messageSection: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  messageText: {
    fontFamily: "Font-Regular",
    fontSize: 16,
    color: "#121417",
    lineHeight: 24,
    fontWeight: "400",
    letterSpacing: 0,
    flexShrink: 1,
    width: 358,
  },
  actionButtons: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginTop: "auto",
  },
  messageButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F5",
    // backgroundColor:'red',
    borderRadius: 20,
    paddingHorizontal: 16,
    width: 358,
    height: 40,
    gap: 8,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#121417",
    marginLeft: 8,
    fontFamily: "Font-Bold",
  },
  completeButton: {
    backgroundColor: "#FE5120",
    borderRadius: 20,
    padding:16,
    alignItems: "center",
    justifyContent:'center',
    height:40,
    maxHeight:480,
    width:360,
    maxWidth:480,
    marginInline:'auto'
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#ffffff",
    lineHeight:24,
    fontFamily:'Font-Regular',
    letterSpacing:0,
  },
  messageWrapper:{
    height:64,
    width:390,
    paddingVertical:12,
    paddingHorizontal:16
  },
  completebtnWrapper:{
    display:'flex',
    width:390,
    height:64,
    justifyContent:'center',
    alignItems:'center'
  }
});

export default BookingDetailsScreen;
