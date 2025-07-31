import React from "react";
import { Keyboard, StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { rf, rh, rw } from '../../utils/scaling';
type Props = {
  labelText: String;
  Inputtype: String;
};

const ProfileInput = ({ labelText, Inputtype }: Props) => {
  return (
    <View
      style={{
        height: verticalScale(69),
        width: moderateScale(319),
        gap: verticalScale(10),
        position: "relative",
      }}
    >
      <Text
        style={{
          fontFamily: "Font-Medium",
          fontSize: scale(15),
          fontWeight: "500",
          lineHeight: verticalScale(24),
        }}
      >
        {labelText} *
      </Text>
      {Inputtype === "phone" ? (
        <>
          {" "}
          <TextInput
            style={{
              height: verticalScale(48),
              width: moderateScale(319),
              paddingLeft: moderateScale(70),
              backgroundColor: "#F5F7FA",
              borderRadius: moderateScale(6),
              fontSize: scale(15),
              fontFamily: "Font-Medium",
            }}
            keyboardType="number-pad"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
          <Text
            style={{
              position: "absolute",
              top: verticalScale(33),
              left: moderateScale(5),
              width: moderateScale(57),
              backgroundColor: "#FFFFFF",
              height: verticalScale(40),
              color: "#6D028E",
              fontFamily: "Font-Medium",
              fontSize: scale(15),
              textAlign: "center",
              textAlignVertical: "center",
              borderRadius: moderateScale(6),
            }}
          >
            +966
          </Text>
        </>
      ) : (
        <TextInput
          style={{
            height: rh(48),
            width: rw(319),
            backgroundColor: "#F5F7FA",
            borderRadius: moderateScale(6),
            fontSize: rf(15),
            fontFamily: "Font-Medium",
          }}
        />
      )}
    </View>
  );
};

export default ProfileInput;

const styles = StyleSheet.create({});
