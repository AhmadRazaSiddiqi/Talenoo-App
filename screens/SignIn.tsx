import ApiService from '@/services/ApiService';

import { Feather } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SignInstyles as styles } from "../assets/styles/siginScreen.styles";

const SiginScreen = ({navigation}) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [data,setData]=useState(null)
  const handleLogin = async () => {
    try {
      const response = await ApiService.post("/auth/loginWithPhone", { 
        phone_number: "444456722128" 
      });
      
      if (response.data) {
        setData(response.data);
        navigation.navigate("Otpscreen", { phone_number: "444456722128" });
      } else {
        // Handle case where response.data is empty
        console.error("No data received from API");
      }
    } catch (error) {
      // Handle API errors
      console.error("Login failed:", error);
      // You might want to show an error message to the user here
    }
  };
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
          source={require("../assets/images/brandlogo.png")}
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
      </View>
      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
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

