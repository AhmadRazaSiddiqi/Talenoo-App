import { responsiveFontSize, responsiveHeight, responsiveWidth } from "@/utils/responsive"
import { StyleSheet } from "react-native"
export const Signupstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 20,
      position: "relative",
    },
    backButton: {
      position: "absolute",
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
      position: "absolute",
      width: responsiveWidth(172.62),
      height: responsiveHeight(237),
      alignSelf: "center",
      // marginVertical: 20,
      top: responsiveHeight(45),
      left: responsiveWidth(101.19),
    },
    title: {
      fontSize: responsiveFontSize(20),
      fontFamily:'Font-Bold',
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
      position: "absolute",
      height: responsiveHeight(69),
      width: responsiveWidth(315),
      left: responsiveWidth(30),
      gap:responsiveHeight(10)
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
      left:responsiveWidth(4),
  width:responsiveWidth(57),
  borderRadius:responsiveWidth(6),
  fontFamily:'Font-Medium',
  textAlignVertical:'center',
  backgroundColor:'#FFF',
  height:responsiveHeight(40),
  marginRight:responsiveWidth(10),
  textAlign:'center',
      fontWeight: "600",
    },
    phoneInput: {
      flex: 1,
      height: responsiveHeight(48),
      width: responsiveWidth(315),
      fontSize: responsiveFontSize(15),
    },
    checkboxContainer: {
      position: "absolute",
      display: "flex",
      flexDirection: "row",
      gap: responsiveWidth(10),
      width: responsiveWidth(263),
      height: responsiveHeight(20),
      top: responsiveHeight(657),
      left: responsiveWidth(56),
    },
    checkboxText: {
      fontSize: responsiveFontSize(14),
      color: "#7C8592",
      fontFamily: "Font-Medium",
      lineHeight: responsiveHeight(20),
    },
    linkText: {
      color: "#FF7043",
    },
    signUpButton: {
      position: "absolute",
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      height: responsiveHeight(48),
      width: responsiveWidth(315),
      left: responsiveWidth(30),
    },
    signUpButtonText: {
      fontFamily: "Font-Bold",
      
      fontSize: responsiveFontSize(15),
      fontWeight: "700",
      // width: responsiveWidth(56)
    },
    signInText: {
      position: "absolute",
      top: responsiveHeight(800),
      textAlign: "center",
      left: responsiveWidth(74),
      fontSize: responsiveFontSize(14),
      color: "purple",
      lineHeight: responsiveHeight(20),
      width: responsiveWidth(226),
      fontFamily: "Font-Medium",
      fontWeight: 500,
  
      // marginVertical:'auto'
    },
    heading: {
      position: "absolute",
      display: "flex",
      top: responsiveHeight(332),
      left: responsiveWidth(35),
      gap: responsiveHeight(15),
      width: responsiveWidth(305),
      height: responsiveHeight(40),
    },
    checkbox: {
      height: responsiveWidth(20),
      width: responsiveWidth(20),
      borderWidth: responsiveWidth(2),
      borderColor: "#5F729D",
      borderRadius: responsiveWidth(3),
      
    },
  })
  