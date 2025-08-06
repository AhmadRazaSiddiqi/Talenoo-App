import ApiService from "@/services/ApiService"
import {
  responsiveFontSize
} from "@/utils/responsive"
import { Feather } from "@expo/vector-icons"
import React, { useState } from "react"
import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native"
import { OtpInput } from "react-native-otp-entry"
import { Otpstyles as styles } from '../../assets/styles/OTPScreen.styles'

const OTPVerificationScreen = ({navigation, route}) => {
  const { phone_number } = route.params
  console.log(phone_number)
  const [otp, setOtp] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleVerify = async (enteredOtp = otp) => {
    if (enteredOtp.length !== 4) {
      Alert.alert("Error", "Please enter a 4-digit code")
      return
    }

    setIsLoading(true)
    try {
      const data = {
        phone_number,
        code: enteredOtp
      }
      console.log("Verifying with:", data)
      
      const response = await ApiService.post('auth/verifyOTP', data)
      console.log("Verification response:", response)
      
      if (response.status) {
      await ApiService.setAuthToken(response.data.token)
        
        if (response.data.on_board) {
          navigation.replace('Home') 
        } else {
          navigation.replace('TalentStep')
        }
      } else {
        Alert.alert("Error", response.message || "Verification failed. Please check the code and try again.")
      }
    } catch (error) {
      console.error("Verification error:", error)
      Alert.alert("Error", error.message || "Failed to verify OTP. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleOtpChange = (text) => {
    setOtp(text)
    // Auto-submit when 4 digits are entered
    if (text.length === 4) {
      handleVerify(text)
    }
  }

  const handleResendOTP = async () => {
    try {
      const response = await ApiService.post('auth/resendOTP', { phone_number })
      if (response.status) {
        Alert.alert("Success", "New OTP has been sent")
      } else {
        Alert.alert("Error", response.message || "Failed to resend OTP")
      }
    } catch (error) {
      console.error("Resend error:", error)
      Alert.alert("Error", "Failed to resend OTP")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.replace("TalentSignUp")}
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
          <Text style={styles.phoneNumber}>+{phone_number}</Text>
        </View>
      </View>

      {/* OTP Input */}
      <View style={styles.otpWrapper}>
        <OtpInput
          numberOfDigits={4}
          onTextChange={setOtp}
          onFilled={(text) => handleVerify(text)} 
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
          <TouchableOpacity onPress={handleResendOTP}>
            <Text style={styles.resendLink}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Verify Button */}
      <TouchableOpacity 
        style={[styles.verifyButton, isLoading && { opacity: 0.7 }]} 
        onPress={handleVerify}
        disabled={isLoading}
      >
        <Text style={styles.verifyButtonText}>
          {isLoading ? "Verifying..." : "Verify and proceed"}
        </Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <View style={styles.SiginInContainer}>
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={styles.signInText}>
            Back To <Text style={styles.signInLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default OTPVerificationScreen