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
import { rf, rh, rw } from '../../utils/scaling';

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
          source={require("../../assets/images/brandlogo.png")} // Replace with your logo path
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
    paddingHorizontal: rw(20),
    position: "relative",
  },
  backButton: {
    marginTop: rh(10),
    position: "relative",
    top: rh(15),
    left: rw(15),
  },
  backButtonCircle: {
    backgroundColor: "#F5F5F5",
    width: rw(40),
    height: rh(40),
    borderRadius: rw(20),
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: rw(172.62),
    height: rh(237),
    alignSelf: "center",
  },
  title: {
    fontSize: rf(20),
    fontWeight: "700",
    color: "#1D253C",
    textAlign: "center",
  },
  subtitle: {
    fontSize: rf(14),
    color: "#7C8592",
    textAlign: "center",
  },
  inputContainer: {
    height: rh(69),
    width: rw(315),
  },
  inputLabel: {
    fontSize: rf(14),
    fontWeight: "600",
    color: "#1D253C",
    marginBottom: rh(5),
  },
  required: {
    color: "red",
  },
  input: {
    backgroundColor: "#F5F6FA",
    width: rw(315),
    height: rh(48),
    borderRadius: rw(6),
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F6FA",
    borderRadius: rw(6),
  },
  phoneCode: {
    color: "#6D028E",
    fontSize: rf(15),
    fontWeight: "600",
    marginRight: rw(10),
  },
  phoneInput: {
    flex: 1,
    height: rh(48),
    width: rw(315),
    fontSize: rf(15),
    outlineColor: "transparent",
  },
  checkboxContainer: {
    display: "flex",
    flexDirection: "row",
    gap: rw(10),
    height: rh(20),
    width: rw(313),
  },
  checkboxText: {
    marginLeft: rw(10),
    fontSize: rf(14),
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
    borderRadius: rw(8),
    alignItems: "center",
    justifyContent: "center",
    height: rh(48),
    width: rw(315),
    top: rh(748),
    left: rw(30),
  },
  signUpButtonText: {
    color: "white",
    fontSize: rf(15),
    fontWeight: "600",
    height: rh(15),
    width: rw(56),
  },
  signInText: {
    position: "absolute",
    textAlign: "center",
    fontSize: rf(14),
    color: "purple",
    height: rh(10),
    width: rw(226),
    left: rw(74),
    top: rh(750),
    fontWeight: 500,
    // marginVertical:'auto'
  },
  heading: {
    display: "flex",
    gap: rh(15),
    width: rw(305),
    height: rh(40),
  },
  details: {
    width: rw(315),
  },
  checkbox: {
    height: rh(20),
    width: rw(20),
    // borderWidth:2,
    // borderColor:'#5F729D',
    borderRadius: rw(3),
  },
  main: {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    gap: rh(45),
    top: rh(100),
    left: rw(30),
    height: rh(476),
    width: rw(315),
  },
});
