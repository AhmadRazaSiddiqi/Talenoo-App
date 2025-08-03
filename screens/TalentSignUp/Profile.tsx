import ProfileInput from "@/components/profile/ProfileInput"
import ProfileRadioButtons from "@/components/profile/ProfileRadioButtons"
import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Pressable, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { moderateScale, scale, verticalScale } from "react-native-size-matters"
import CustomNumericInput from "../../components/profile/AgeInput"

const ProfileScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" ,backgroundColor:'#FFF'}}>
      <View
        style={{
          position: "absolute",
          top: verticalScale(15),
          left: moderateScale(15),
          width: moderateScale(40),
          height: moderateScale(40),
          borderRadius: moderateScale(20),
          backgroundColor: "#F5F7FA",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable>
          <AntDesign name="arrowleft" size={scale(20)} color="#6D028E" />
        </Pressable>
      </View>
      <Text
        style={{
          position: "absolute",
          top: verticalScale(29.77),
          left: moderateScale(146),
          fontSize: scale(20),
          lineHeight: verticalScale(28),
          fontFamily: "Font-Bold",
          textAlignVertical: "top",
          color: "#6D028E",
        }}
      >
        Profile
      </Text>
      <View
        style={{
          width: moderateScale(319),
          height: verticalScale(583),
          flexDirection: "column",
          gap: verticalScale(15),
          top: verticalScale(90),
          left: moderateScale(30),
        }}
      >
        <View>
          <Text
            style={{
              fontFamily: "Font-Bold",
              fontSize: scale(20),
              color: "#24364C",
              textAlign: "center",
              lineHeight: verticalScale(28),
            }}
          >
            Complete your profile
          </Text>
          <Text
            style={{
              fontFamily: "Font-Medium",
              color: "#5F729D",
              fontSize: scale(14),
              textAlign: "center",
              lineHeight: verticalScale(20),
            }}
          >
            {
              "Rest assured,your personal data is visible only \n to you.No one else will have access to it."
            }
          </Text>
        </View>
        <ProfileInput labelText="Full Name" Inputtype="name" />
        <ProfileInput labelText="Username" Inputtype="email" />
        <ProfileInput labelText="Phone Number" Inputtype="phone" />
//Radio Buttons
        <ProfileRadioButtons />
        <CustomNumericInput />
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen
