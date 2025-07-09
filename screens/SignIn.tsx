import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../utils/responsive.js";

const SiginScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <View style={styles.backButtonCircle}>
          <Feather name="arrow-left" size={20} color="#6D028E" />
        </View>
      </TouchableOpacity>
      {/* Logo */}
      <View style={styles.main}>
        <Image
          source={require("../assets/images/brandlogo.png")} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <View style={styles.heading}>
          <Text style={styles.title}>Sign in to your account</Text>
          <Text style={styles.subtitle}>Welcome back! You've Been Missed!</Text>
        </View>
        <View style={styles.details}>
          {/* Phone Number Field */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>
              Phone Number <Text style={styles.required}>*</Text>
            </Text>
            <View style={styles.phoneInputContainer}>
              <Text style={styles.phoneCode}>+966</Text>
              <TextInput
                style={styles.phoneInput}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
          </View>
        </View>

        {/* Terms Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agreed}
            onValueChange={setAgreed}
            style={styles.checkbox}
            color={agreed ? "#6D028E" : undefined}
          />
          <Text style={styles.checkboxText}>Remember me</Text>
        </View>
      </View>{" "}
      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign In</Text>
      </TouchableOpacity>
      {/* Sign In link */}
      <TouchableOpacity>
        <Text style={styles.signInText}>
          Not a member? <Text style={styles.linkText}>Create an account</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SiginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    position: "relative",
  },
  backButton: {
    marginTop: responsiveHeight(10),
    position: "relative",
    top: responsiveHeight(15),
    left: responsiveWidth(15),
  },
  backButtonCircle: {
    backgroundColor: "#F5F5F5",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: responsiveWidth(172.62),
    height: responsiveHeight(237),
    alignSelf: "center",
  },
  title: {
    fontSize: responsiveFontSize(20),
    fontWeight: "700",
    color: "#1D253C",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#7C8592",
    textAlign: "center",
    // marginBottom: 20,
  },
  inputContainer: {
    height: responsiveHeight(69),
    width: responsiveWidth(315),
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1D253C",
    marginBottom: 5,
  },
  required: {
    color: "red",
  },
  input: {
    backgroundColor: "#F5F6FA",
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    borderRadius: 6,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: 6,
  },
  phoneCode: {
    color: "#6D028E",
    fontSize: responsiveFontSize(15),
    fontWeight: "600",
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    height: responsiveHeight(48),
    width: responsiveWidth(315),
    fontSize: responsiveFontSize(15),
    outlineColor: "transparent",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    gap: responsiveWidth(10),
    height: responsiveHeight(20),
    width: responsiveWidth(313),
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#7C8592",
  },
  linkText: {
    color: "#FF7043",
    textDecorationColor: "#FE5120",
    textDecorationLine: "underline",
  },
  signUpButton: {
    position: "absolute",
    backgroundColor: "#6D028E",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(48),
    width: responsiveWidth(315),
    top: responsiveHeight(748),
    left: responsiveWidth(30),
  },
  signUpButtonText: {
    color: "white",
    fontSize: responsiveFontSize(15),
    fontWeight: "600",
    height: responsiveHeight(15),
    width: responsiveWidth(56),
  },
  signInText: {
    position: "absolute",
    textAlign: "center",
    fontSize: responsiveFontSize(14),
    color: "purple",
    height: responsiveHeight(10),
    width: responsiveWidth(226),
    left: responsiveWidth(74),
    top: responsiveHeight(750),
    fontWeight: 500,
    // marginVertical:'auto'
  },
  heading: {
    display: "flex",
    gap: responsiveHeight(15),
    width: responsiveWidth(305),
    height: responsiveHeight(40),
  },
  details: {
    width: responsiveWidth(315),
  },
  checkbox: {
    height: responsiveHeight(20),
    width: responsiveWidth(20),
    // borderWidth:2,
    // borderColor:'#5F729D',
    borderRadius: 3,
  },
  main: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    gap: 45,
    top: responsiveHeight(100),
    left: responsiveWidth(30),
    height: responsiveHeight(476),
    width: responsiveWidth(315),
  },
});
