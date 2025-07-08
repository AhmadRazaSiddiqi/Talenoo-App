import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width } = Dimensions.get("window");
const parentContainerScreenLeft = -(821 - width) / 2;
const parentContainerScreenTop = -(821 / 2);

const OnboardingScreen = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#FFFFFF", position: "relative" }}
    >
      <View style={styles.parentContainer}>
        <View style={styles.ellipse1} />
        <View style={styles.ellipse2} />
        <View style={styles.ellipse3} />

        <View style={styles.childContent}>
          <Image
            source={require("../../assets/images/image.png")}
            resizeMode="contain"
            style={styles.img}
          />
        </View>
      </View>
      <Image
        source={require("../../assets/images/career.png")}
        resizeMode="contain"
        style={{
          left: responsiveWidth(10),
          top: responsiveHeight(43.33),
          position: "absolute",
        }}
      />
      <Text style={styles.heading}>
        Finding Your Perfect {"\n"} Career Path Starts Here!
      </Text>
      <Text style={styles.subHeading}>
        Confused looking for updated talents {"\n"} and let’s see here lots of
        talent listings
      </Text>
      <View style={styles.BtnContainer}>
        <View
          style={{
            height: responsiveHeight(45),
            width: responsiveWidth(45),
            backgroundColor: "#F5F5F5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <FontAwesome6
            name="arrow-left"
            size={responsiveFontSize(20)}
            color="#6D028E"
          />
        </View>
        <View style={styles.dotContainer}>
          <Text style={[styles.dot, { backgroundColor: "#6D028E" }]}></Text>
          <Text style={[styles.dot, { backgroundColor: "#E2CCE8" }]}></Text>
          <Text style={[styles.dot, { backgroundColor: "#E2CCE8" }]}></Text>
        </View>
        <View
          style={{
            height: responsiveHeight(45),
            width: responsiveWidth(45),
            backgroundColor: "#6D028E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <FontAwesome6
            name="arrow-right"
            size={responsiveFontSize(20)}
            color="white"
          />
        </View>
      </View>
      <TouchableOpacity style={styles.getStarted}>
        <Text style={styles.getStartedText}>let’s get Started</Text>
      </TouchableOpacity>
      <View style={styles.SignInContainer}>
        <Text
          style={{
            color: "#6D028E",
            fontSize: responsiveFontSize(14),
            fontFamily: "PlusJakartaSans-Regular",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Already have an account?
        </Text>
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#FE5120",
            fontSize: responsiveFontSize(14),
            fontFamily: "PlusJakartaSans-Regular",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {" "}
          Sign in
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  parentContainer: {
    position: "absolute",
    width: 821,
    height: 821,
    overflow: "hidden",
    backgroundColor: "#F5F7FA",
    borderRadius: 821 / 2,

    top: -821 / 2,
    left: -(821 - width) / 2,

    zIndex: 0,
  },
  childContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: 298,
    height: 410,
    backgroundColor: "grey",

    top: 26 - parentContainerScreenTop,
    left: (821 - 298) / 2,

    zIndex: 3,
  },
  img: {
    width: 366.7,
    height: 386,
  },
  ellipse1: {
    position: "absolute",
    width: 370,
    height: 370,
    backgroundColor: "#FFFFFF",
    opacity: 0.1,
    borderRadius: 370 / 2,
    shadowColor: "rgba(13, 55, 114, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
    zIndex: 0,
    left: 20 - parentContainerScreenLeft,
    top: 80 - parentContainerScreenTop,
  },
  ellipse2: {
    position: "absolute",
    width: 318,
    height: 318,
    backgroundColor: "#FFFFFF",
    opacity: 0.3,
    borderRadius: 318 / 2,
    shadowColor: "rgba(13, 55, 114, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 6,
    zIndex: 1,
    left: 45 - parentContainerScreenLeft,
    top: 105 - parentContainerScreenTop,
  },
  ellipse3: {
    position: "absolute",
    width: 264,
    height: 264,
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    borderRadius: 264 / 2,
    shadowColor: "rgba(13, 55, 114, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 7,
    zIndex: 2,
    left: 70 - parentContainerScreenLeft,
    top: 130 - parentContainerScreenTop,
  },
  heading: {
    position: "absolute",
    top: responsiveHeight(472),
    left: responsiveWidth(27),
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: responsiveFontSize(24),
    textAlign: "center",
    // backgroundColor: "red",
    width: responsiveWidth(323),
  },
  subHeading: {
    position: "absolute",
    left: responsiveWidth(31),
    width: responsiveWidth(313),
    top: responsiveHeight(561),
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: responsiveFontSize(16),
    color: "#5F729D",
    fontWeight: 500,
    textAlign: "center",
    lineHeight: responsiveHeight(24),
  },
  BtnContainer: {
    position: "absolute",
    minWidth: responsiveWidth(208),
    left: responsiveWidth(83),
    top: responsiveHeight(638),
    display: "flex",
    flexDirection: "row",
    gap: responsiveWidth(40),
    alignItems: "center",
  },
  getStarted: {
    position: "absolute",
    left: responsiveWidth(30),
    top: responsiveHeight(745),
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    backgroundColor: "#6D028E",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 8,
  },
  getStartedText: {
    color: "#FFFFFF",
  },
  SignInContainer: {
    position: "absolute",
    left: responsiveWidth(74),
    top: responsiveHeight(806),
    width: responsiveWidth(226),
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  dotContainer: {
    display: "flex",
    flexDirection: "row",
    width: responsiveWidth(38),
    gap: responsiveWidth(10),
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 100,
  },
});
