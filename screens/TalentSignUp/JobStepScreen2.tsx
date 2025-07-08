import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { FontAwesome6 } from "@expo/vector-icons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive";

const { width, height } = Dimensions.get("window");

const weekList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const JobStepScreen = () => {
  const [selectedDay, setSelectedDay] = useState(["Monday"]);

  const handleJobSelect = (day) => {
    setSelectedDay((prevSelected) =>
      prevSelected.includes(day)
        ? prevSelected.filter((d) => d !== day)
        : [...prevSelected, day]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Linear Gradient and Mask Image */}
      {/* Rectangle 383 from design */}
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        style={styles.background}
      />
      <View style={styles.con1}></View>
      <View style={styles.con2}></View>
      {/* Rectangle 384 from design - the white rounded background area */}
      {/* This is the closest representation of the layered Rectangle 384s in the design,
            which seems to indicate a solid white background with a subtle border effect.
            Using the imgmask.png as a placeholder for the content area's mask.
            If `imgmask.png` is truly a mask for the *content area* rather than a decorative overlay,
            its usage might need re-evaluation. Assuming it's the white content card. */}
      <Image
        source={require("../../assets/images/imgmask.png")}
        style={styles.contentMaskCard}
        resizeMode="contain"
      />

      {/* Header and Progress Bar */}
      <View style={styles.header}>
        {/* Group 942 / Group 1068 - Back Arrow */}
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => console.log("Back pressed")}
        >
          <Icon
            name="arrow-left"
            size={responsiveFontSize(20)}
            color="#FFFFFF"
          />{" "}
          {/* arrow-right (5) 1 with transform - size 20px */}
        </TouchableOpacity>
        {/* Frame 9391 - Progress Bar */}
        <View style={styles.progressBarContainer}>
          {/* Frame 1072 - Step 1 (Active) */}
          <View style={styles.progressCircleInactive}>
            {" "}
            {/* background #6D028E from design */}
            <Text style={styles.progressTextActive}>1</Text>{" "}
            {/* color #FFFFFF */}
          </View>
          {/* Rectangle 385 - Line 1 (Active) */}
          <View style={styles.progressLineActive} />{" "}
          {/* background linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%) */}
          {/* Frame 1072 - Step 2 (Inactive) */}
          <View style={styles.progressCircleInactive}>
            {" "}
            {/* background #FFFFFF, border rgba(255, 255, 255, 0.1) */}
            <Text style={styles.progressTextActive}>2</Text>{" "}
            {/* color #6D028E */}
          </View>
          {/* Rectangle 385 - Line 2 (Inactive) */}
          <View style={styles.progressLineActive} />{" "}
          {/* background rgba(255, 255, 255, 0.1) */}
          {/* Frame 1072 - Step 3 (Inactive) */}
          <View style={styles.progressCircleInactive}>
            {" "}
            {/* border rgba(255, 255, 255, 0.1) */}
            <Text style={styles.progressTextActive}>3</Text>{" "}
            {/* color rgba(255, 255, 255, 0.5) */}
          </View>
        </View>
        <View style={{ width: responsiveWidth(40) }} />{" "}
        {/* Placeholder for alignment, matches Group 942/1068 width */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Frame 9380 - Main Content Container */}
        <View style={styles.mainContentArea}>
          {/* Frame 9378 - Heading Container */}
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>Availability Configuration</Text>
          </View>
          <View style={styles.SelectTime}>
            <Text style={styles.SelectTimeText}>Select Time</Text>
          </View>
          {/* Frame 9379 / Frame 898 / Frame 1069 - List of Job Levels */}
          <View style={styles.jobLevelsList}>
            {weekList.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.jobLevelItem,
                  selectedDay.includes(day) && styles.jobLevelItemSelected,
                ]}
                onPress={() => handleJobSelect(day)}
              >
                <View
                  style={{
                    position: "absolute",
                    width: responsiveWidth(231),
                    paddingLeft: responsiveWidth(40),
                    display: "flex",
                    justifyContent: "space-between",

                    flexDirection: "row",
                  }}
                >
                  <Text
                    style={[
                      styles.jobLevelText,
                      selectedDay.includes(day) && styles.jobLevelTextSelected,
                    ]}
                  >
                    {day}
                  </Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: responsiveWidth(10),
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: responsiveFontSize(14),
                        color: "#1E1E1E",
                        fontFamily: "PlusJakartaSans-Bold",
                      }}
                    >
                      09:00-11:00
                    </Text>
                    <Text
                      style={{
                        transform: [{ rotate: "45deg" }],
                        fontWeight: "100",
                      }}
                    >
                      <FontAwesome6
                        name={
                          selectedDay.includes(day) ? "circle-plus" : "xmark"
                        }
                        size={22}
                        color={
                          selectedDay.includes(day) ? "#FE5120" : "#6D028E"
                        }
                      />
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Frame 9370 - Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => console.log("Next button pressed", selectedDay)}
      >
        <Text style={styles.nextButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default JobStepScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: responsiveHeight(311),
  },

  contentMaskCard: {
    position: "absolute",
    width: responsiveWidth(345),
    height: responsiveHeight(407),
    left: responsiveWidth(15),
    top: responsiveHeight(80),
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(15),
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(15),
    paddingTop: responsiveHeight(15),

    position: "absolute",
    width: "100%",
    zIndex: 2,
  },

  backButtonContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    justifyContent: "center",
    alignItems: "center",

    borderRadius: responsiveWidth(20),
    backgroundColor: "transparent",
  },

  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4),
    marginTop: responsiveHeight(8),
  },

  progressCircleActive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    backgroundColor: "#6D028E",
    justifyContent: "center",
    alignItems: "center",
  },

  progressTextActive: {
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "#6D028E",
  },

  progressLineActive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(5),
  },

  progressCircleInactive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    backgroundColor: "#FFFFFF",
    borderWidth: responsiveWidth(2),
    borderColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  progressTextInactive: {
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "#6D028E",
  },

  progressLineInactive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: responsiveWidth(5),
  },

  progressCircleInactiveBordersOnly: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    borderWidth: responsiveWidth(2),
    borderColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },

  progressTextInactiveGray: {
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "rgba(255, 255, 255, 0.5)",
  },

  scrollContent: {
    paddingTop: responsiveHeight(115),
    paddingBottom: responsiveHeight(40 + 48 + 20),
  },
  mainContentArea: {
    width: responsiveWidth(316),
    alignSelf: "center",
  },

  headingContainer: {
    gap: responsiveHeight(15),
    marginBottom: responsiveHeight(30),
  },

  heading: {
    fontFamily: "PlusJakartaSans-Bold",

    fontWeight: "700",
    fontSize: responsiveFontSize(20),
    lineHeight: responsiveFontSize(28),
    textAlign: "center",
    color: "#24364C",
  },

  jobLevelsList: {
    position: "absolute",
    gap: responsiveHeight(10),
    height: responsiveHeight(454),
    width: responsiveWidth(316),
    top: responsiveHeight(72),
  },

  jobLevelItem: {
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(18),
    gap: responsiveWidth(10),
    width: responsiveWidth(316),
    height: responsiveHeight(48),
    borderWidth: responsiveWidth(2),
    borderColor: "#F5F5F5",
    borderRadius: responsiveWidth(6),
  },

  jobLevelItemSelected: {
    borderColor: "#6D028E",
  },

  jobLevelText: {
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "500",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(20),
    color: "#24364C",
  },

  jobLevelTextSelected: {
    color: "#6D028E",
    fontWeight: "bold",
  },

  nextButton: {
    position: "absolute",
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    left: responsiveWidth(30),
    bottom: responsiveHeight(40),
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8),

    ...Platform.select({
      ios: {
        shadowColor: "rgba(25, 103, 210, 0.1)",
        shadowOffset: { width: 0, height: responsiveHeight(4) },
        shadowOpacity: 1,
        shadowRadius: responsiveWidth(4),
      },
      android: {
        elevation: responsiveWidth(4),
      },
    }),
    justifyContent: "center",
    alignItems: "center",
  },

  nextButtonText: {
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: responsiveFontSize(15),
    lineHeight: responsiveFontSize(15),
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
  con2: {
    position: "absolute",
    backgroundColor: "white",
    height: responsiveHeight(407),
    width: responsiveWidth(325),
    left: responsiveWidth(25),
    top: responsiveHeight(73),
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 0,
  },
  con1: {
    position: "absolute",
    backgroundColor: "white",
    height: responsiveHeight(407),
    width: responsiveWidth(305),
    left: responsiveWidth(35),
    top: responsiveHeight(67),
    borderRadius: 15,
    zIndex: 0,
    opacity: 0.3,
  },
  SelectTime: {
    position: "absolute",
    width: responsiveWidth(316),
    top: responsiveHeight(20),
    paddingTop: responsiveHeight(20),
    paddingRight: responsiveWidth(16),
    paddingBottom: responsiveHeight(12),
    paddingLeft: responsiveWidth(16),
  },
  SelectTimeText: {
    fontSize: responsiveFontSize(22),
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: responsiveHeight(28),
  },
});
