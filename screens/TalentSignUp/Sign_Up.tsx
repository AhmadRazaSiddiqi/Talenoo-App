import React, { useState } from "react"
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image, // You can use expo-checkbox for a better UI
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import Checkbox from "expo-checkbox"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../../utils/responsive"

const SignUpScreen = () => {
  const navigation = useNavigation()
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [agreed, setAgreed] = useState(false)

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
      <Image
        source={require("../../assets/images/brandlogo.png")} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <View style={styles.heading}>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>
        Welcome back! Please enter your details
      </Text>
      </View>
<View style={styles.details}>

      {/* Name Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Name <Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

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
        <Checkbox value={agreed} onValueChange={setAgreed} style={styles.checkbox} />
        <Text style={styles.checkboxText}>
          I agree to all <Text style={styles.linkText}>Term</Text>,{" "}
          <Text style={styles.linkText}>Privacy</Text> and{" "}
          <Text style={styles.linkText}>Fees</Text>
        </Text>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In link */}
      <TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.linkText}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    position:'relative'
  },
  backButton: {
    marginTop: responsiveHeight(10),
    position:'relative',
    top:responsiveHeight(15),
    left:responsiveWidth(15),


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
    position:'absolute',
    width: responsiveWidth(172.62),
    height:responsiveHeight(237),
    alignSelf: "center",
    // marginVertical: 20,
    top:responsiveHeight(45),
    left:responsiveWidth(101.19)
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
  
    height:responsiveHeight(69),
    width:responsiveWidth(315)
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
    width:responsiveWidth(315),
    height:responsiveHeight(48),
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
    height:responsiveHeight(48),
    width:responsiveWidth(315),
    fontSize:responsiveFontSize(15)
  },
  checkboxContainer: {
    position:'absolute',
    display:'flex',
    flexDirection: "row",
    gap:responsiveWidth(10),
    height:responsiveHeight(20),
    width:responsiveWidth(263),
    top:responsiveHeight(717),
    left:responsiveWidth(56),
    
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#7C8592",
  },
  linkText: {
    color: "#FF7043",
  },
  signUpButton: {
    position:'absolute',
    backgroundColor: "#6D028E",
    borderRadius: 8,
    alignItems: "center",
    justifyContent:'center',
    height:responsiveHeight(48),
    width:responsiveWidth(315),
    top:responsiveHeight(748),
    left:responsiveWidth(30),
  },
  signUpButtonText: {
    color: "white",
    fontSize:responsiveFontSize(15),
    fontWeight: "600",
    height:responsiveHeight(15),
    width:responsiveWidth(56)
  },
  signInText: {
    position:'absolute',
    textAlign: "center",
    fontSize: responsiveFontSize(14),
    color: "purple",
    height:responsiveHeight(10),
    width:responsiveWidth(226),
    left:responsiveWidth(74),
    top:responsiveHeight(750),
    fontWeight:500
    // marginVertical:'auto'


  },
  heading:{
    position:'absolute',
    display:'flex',
    top:responsiveHeight(332),
    left:responsiveWidth(35),
    gap:responsiveHeight(15),
    width:responsiveWidth(305),
    height:responsiveHeight(40)
  },
  details:{
    position:'absolute',
    height:responsiveHeight(168),
    width:responsiveWidth(315),
    top:responsiveHeight(412),
    left:responsiveWidth(30),
    rowGap:responsiveHeight(24)
  },
  checkbox:{
    height:responsiveHeight(20),
    width:responsiveWidth(20),
    // borderWidth:2,
    // borderColor:'#5F729D',
    borderRadius:3
  }
})
