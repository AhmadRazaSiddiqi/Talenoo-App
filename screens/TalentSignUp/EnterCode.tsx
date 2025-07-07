import React, { useState } from "react"
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from "@expo/vector-icons"
import { OtpInput } from "react-native-otp-entry"
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "../../utils/responsive"

const OTPVerificationScreen = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState("")

  const handleVerify = () => {
    console.log("Entered OTP:", otp)
    // Navigate to next screen or verify OTP
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header Row with Back Button */}
      <View style={styles.headerRow}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <View style={styles.backButtonCircle}>
            <Feather
              name="arrow-left"
              size={responsiveFontSize(20)}
              color="#6D028E"
            />
          </View>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image
        source={require("../../assets/images/brandlogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title and Subtitle */}
      <View style={styles.titleAndSubtitleContainer}>
        <Text style={styles.title}>Enter Code</Text>
        <Text style={styles.subtitle}>
          <Text style={{ color: "#5F729D" }}> An Authentication Code Has Sent To</Text>
          <Text style={{ color: 'orange' }}>{"\n"}+966 12686 1010</Text>
        </Text>
      </View>

      {/* OTP Input */}
      <View style={styles.otpWrapper}>
        <OtpInput
          numberOfDigits={4}
          onTextChange={setOtp}
          onFilled={(val) => console.log("Completed:", val)}
          hideStick={true}
          theme={{
            containerStyle: styles.otpContainer,
            pinCodeContainerStyle: styles.otpSlot,
            pinCodeTextStyle: styles.otpSlotText,
            focusStickStyle: styles.caret,
            focusedPinCodeContainerStyle: styles.otpSlotActive,
          }}
        />
      </View>

      {/* Resend Section */}
      <View style={styles.resendContainer}>
        <Text style={styles.resendInfo}>If you don't receive code!</Text>
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify and proceed</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <View style={styles.SiginInContainer}>
        <TouchableOpacity onPress={() => (navigation as any).navigate("SignIn")}> 
          <Text style={{ color: 'purple' }}>
            Back To <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OTPVerificationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: responsiveWidth(20),
    paddingTop: responsiveHeight(20),
    alignItems: "center",
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(10),
    paddingHorizontal:responsiveWidth(10)
  },
  backButton: {
    // No absolute, just left align
    marginLeft: 0,
  },
  backButtonCircle: {
    backgroundColor: "#F5F5F5",
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    borderRadius: responsiveWidth(20),
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: responsiveWidth(172.62),
    height: responsiveHeight(237),
    alignSelf: "center",
    marginBottom: responsiveHeight(10),
  },
  titleAndSubtitleContainer: {
    alignItems: "center",
    marginBottom: responsiveHeight(30),
    width: "100%",
  },
  title: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(20),
    lineHeight: responsiveFontSize(28),
    fontWeight: "700",
    color: "#24364C",
    textAlign: "center",
    marginBottom: responsiveHeight(10),
  },
  subtitle: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(14),
    // lineHeight: responsiveFontSize(20),
    fontWeight: "500",
    textAlign: "center",
    marginTop: responsiveHeight(5),
  },
  otpWrapper: {
    alignItems: "center",
    marginBottom: responsiveHeight(20),
    width: "100%",
  },
  otpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: responsiveWidth(222),
    justifyContent: "space-between",
    marginTop: 0,
    marginBottom: responsiveHeight(10),
  },
  otpSlot: {
    backgroundColor: "#F5F7FA",
    width: responsiveWidth(48),
    height: responsiveHeight(48),
    borderRadius: responsiveWidth(6),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  otpSlotActive: {
    borderColor: "#E5E7EB",
    borderWidth: 1,
  },
  otpSlotText: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(28),
    lineHeight: responsiveFontSize(32),
    fontWeight: "300",
    color: "#000000",
    textAlign: "center",
    textTransform: "capitalize",
  },
  caret: {
    width: responsiveWidth(2),
    height: responsiveHeight(20),
    backgroundColor: "#6D028E",
  },
  resendContainer: {
    alignItems: "center",
    marginBottom: responsiveHeight(30),
    width: "100%",
  },
  resendInfo: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(16),
    lineHeight: responsiveFontSize(24),
    fontWeight: "500",
    color: "#5F729D",
    textAlign: "center",
    marginBottom: responsiveHeight(5),
  },
  resendLink: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(16),
    lineHeight: responsiveFontSize(24),
    fontWeight: "600",
    color: "orange",
    textAlign: "center",
    // textDecorationLine: "underline",
  },
  verifyButton: {
  position:'relative',
  top:responsiveHeight(100),
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8),
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: responsiveHeight(20),
  },
  verifyButtonText: {
    fontFamily: "Plus Jakarta Sans",
    fontSize: responsiveFontSize(15),
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: responsiveFontSize(15),
  },
  SiginInContainer: {
  position:'relative',
    alignItems: "center",
    marginTop: responsiveHeight(10),
    top:responsiveHeight(100)
  },
  signInLink: {
    color: "#FE5120",
    textDecorationLine: "underline",
  },
})
