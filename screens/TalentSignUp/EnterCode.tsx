import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive"
import { Feather } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { OtpInput } from "react-native-otp-entry"

const OTPVerificationScreen = () => {
  const navigation = useNavigation()
  const [otp, setOtp] = useState("")

  const handleVerify = () => {
    console.log("Entered OTP:", otp)
    // Navigate to next screen or verify OTP
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
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

      {/* Logo */}
      <Image
        source={require("@/assets/images/brandlogo.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title and Subtitle */}
      <View style={styles.titleAndSubtitleContainer}>
        <Text style={styles.title}>Enter Code</Text>
        <View style={styles.phoneText}>
          <Text style={styles.authCodeText}>
            An Authentication Code Has Sent To
          </Text>
          <Text style={styles.phoneNumber}>+966 12686 1010</Text>
        </View>
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
        <View style={styles.resendContainer}>
          <Text style={styles.resendInfo}>If you don't receive code!</Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Resend Section */}

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyButtonText}>Verify and proceed</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <View style={styles.SiginInContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.signInText}>
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
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: responsiveHeight(15),
    left: responsiveWidth(15),
  },
  backButtonCircle: {
    backgroundColor: "#F5F5F5",
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: responsiveWidth(20),
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: responsiveWidth(172.62),
    height: responsiveHeight(237),
    top: responsiveHeight(55),
    left: responsiveWidth(100.69),
  },
  titleAndSubtitleContainer: {
    position: "absolute",
    height: responsiveHeight(60),
    width: responsiveWidth(274),
    top: responsiveHeight(342),
    left: responsiveWidth(50),

    gap: responsiveHeight(5),
  },
  title: {
    fontFamily: "Font-Bold",
    // height:responsiveHeight(15),
    fontSize: responsiveFontSize(20),
    lineHeight: responsiveFontSize(28),
    fontWeight: "700",
    color: "#24364C",
    textAlign: "center",
  },
  phoneText: {
    justifyContent: "center",
    // alignItems:'center',
    flexDirection: "row",
    flexWrap: "wrap",
    textAlign: "center",

    width: "100%",
    height: responsiveHeight(30),
  },
  authCodeText: {
    color: "#5F729D",
    fontFamily: "Font-Medium",
    fontSize: responsiveFontSize(14),
    fontWeight: "500",
    lineHeight: responsiveHeight(20),
  },
  phoneNumber: {
    fontFamily: "Font-Medium",
    fontSize: responsiveFontSize(14),
    fontWeight: "500",
    color: "#FE5120",
    lineHeight: responsiveHeight(20),
  },
  otpWrapper: {
    position: "absolute",
    width: responsiveWidth(252),
    height: responsiveHeight(94),
    left: responsiveWidth(61),
    top: responsiveHeight(432),
    gap: responsiveHeight(10),
  },
  otpContainer: {
    flexDirection: "row",
    alignSelf: "center",
    width: responsiveWidth(222),
    justifyContent: "space-between",
  },
  otpSlot: {
    backgroundColor: "#F5F7FA",
    width: responsiveWidth(48),
    height: responsiveWidth(48),
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
    fontFamily: "Font-Medium",
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
    width: "100%",
  },
  resendInfo: {
    fontFamily: "Font-Medium",
    fontSize: responsiveFontSize(16),
    lineHeight: responsiveFontSize(24),
    fontWeight: "500",
    color: "#5F729D",
    textAlign: "center",
  },
  resendLink: {
    fontFamily: "Font-Medium",
    fontSize: responsiveFontSize(16),
    lineHeight: responsiveFontSize(24),
    fontWeight: "600",
    color: "#FE5120",
    textAlign: "center",
  },
  verifyButton: {
    position: "absolute",
    top: responsiveHeight(748),
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8),
    justifyContent: "center",
    left: responsiveWidth(30),
  },
  verifyButtonText: {
    fontFamily: "Font-Bold",
    fontSize: responsiveFontSize(15),
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "capitalize",
    lineHeight: responsiveFontSize(15),
  },
  SiginInContainer: {
    position: "absolute",
    top: responsiveHeight(809),
    textAlign: "center",
  },
  signInText: {
    color: "purple",
    fontFamily: "Font-Medium",
    fontSize: responsiveFontSize(14),
    fontWeight: "500",
    lineHeight: responsiveHeight(20),
  },
  signInLink: {
    color: "#FE5120",
    textDecorationLine: "underline",
  },
})
