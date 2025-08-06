import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Platform, StyleSheet } from "react-native";

export const TalentStepStyles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#FFFFFF",
      position: "relative",
    },
  
    backgroundGradient: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      height: responsiveHeight(311),
    },
  
    contentCardBackground: {
      position: "absolute",
      width: responsiveWidth(345),
      height: responsiveHeight(407),
      left: responsiveWidth(15),
      top: responsiveHeight(80),
      backgroundColor: "#FFFFFF",
      borderRadius: responsiveWidth(15),
      pointerEvents: 'none', // ✅ Allow touches to pass through
    },
    
  
    header: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: responsiveWidth(15),
      paddingTop: responsiveHeight(15),
      position: "absolute",
      width: "100%",
      zIndex: 2,
    },
  
    backButtonContainer: {
      width: responsiveWidth(40),
      height: responsiveHeight(40),
      justifyContent: "center",
      alignItems: "center",
    },
  
    progressBarContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: responsiveWidth(4),
  
      marginTop: responsiveHeight(10),
    },
  
    progressCircleActive: {
      width: responsiveWidth(24),
      height: responsiveWidth(24),
      borderRadius: responsiveWidth(12),
      backgroundColor: "#FFFFFF",
      justifyContent: "center",
      alignItems: "center",
    },
  
    progressTextActive: {
      fontFamily: "Font-Bold",
      fontWeight: "700",
      fontSize: responsiveFontSize(14),
      lineHeight: responsiveFontSize(24),
      color: "#6D028E",
    },
  
    progressLineActive: {
      width: responsiveWidth(40),
      height: responsiveHeight(5),
      backgroundColor: "#FFFFFF",
      borderRadius: responsiveWidth(5),
    },
  
    progressCircleInactive: {
      width: responsiveWidth(24),
      height: responsiveWidth(24),
      borderRadius: responsiveWidth(12),
      borderWidth: responsiveWidth(2),
      borderColor: "rgba(255, 255, 255, 0.1)",
      justifyContent: "center",
      alignItems: "center",
    },
  
    progressTextInactive: {
      fontFamily: "Font-Medium",
      fontWeight: "700",
      fontSize: responsiveFontSize(14),
      lineHeight: responsiveFontSize(24),
      color: "rgba(255, 255, 255, 0.5)",
    },
  
    progressLineInactive: {
      width: responsiveWidth(40),
      height: responsiveHeight(5),
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: responsiveWidth(5),
    },
  
    progressCircleInactiveBordersOnly: {
      width: responsiveWidth(24),
      height: responsiveWidth(24),
      borderRadius: responsiveWidth(12),
      borderWidth: responsiveWidth(2),
      borderColor: "rgba(255, 255, 255, 0.1)",
      justifyContent: "center",
      alignItems: "center",
    },
  
    progressTextInactiveGray: {
      fontFamily: "Font-Bold",
      fontWeight: "700",
      fontSize: responsiveFontSize(14),
      lineHeight: responsiveFontSize(24),
      color: "rgba(255, 255, 255, 0.5)",
    },
  
    scrollContent: {
      paddingTop: responsiveHeight(115),
      paddingBottom: responsiveHeight(40 + 48 + 20),
      alignItems:'center',
      gap:responsiveHeight(10),
    },
    mainContentArea: {
      width: responsiveWidth(316),
      alignSelf: "center",
  
      gap: responsiveHeight(30),
      zIndex: 1,
    },
  
    headingContainer: {
      width: responsiveWidth(316),
      height: responsiveHeight(44),
      gap: responsiveHeight(15),
    },
  
    heading: {
      fontFamily: "Font-Bold",
      fontWeight: "700",
      fontSize: responsiveFontSize(20),
      lineHeight: responsiveFontSize(28),
      textAlign: "center",
      color: "#24364C",
    },
  
    searchContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#FFFFFF",
      borderWidth: responsiveWidth(2),
      borderColor: "#F5F5F5",
      borderRadius: responsiveWidth(6),
      paddingLeft: responsiveWidth(17),
      paddingRight: responsiveWidth(15),
      height: responsiveHeight(48),
  
      gap: responsiveWidth(8),
    },
    searchInput: {
      flex: 1,
      fontFamily: "Font-Medium",
      fontWeight: "500",
      fontSize: responsiveFontSize(16),
      lineHeight: responsiveFontSize(20),
      color: "#5F729D",
      paddingVertical: 0,
    },
  
    talentsList: {
      gap: responsiveHeight(10),
    },
  
    talentItem: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: responsiveWidth(15),
  
      gap: responsiveWidth(10),
      width: responsiveWidth(316),
  
      height: responsiveHeight(48),
      backgroundColor: "#FFFFFF",
  
      borderWidth: responsiveWidth(2),
      borderColor: "#F5F5F5",
      borderRadius: responsiveWidth(6),
    },
  
    talentItemSelected: {
      borderColor: "#6D028E",
    },
  
    talentText: {
      fontFamily: "Font-Medium",
      fontWeight: "500",
      fontSize: responsiveFontSize(14),
      lineHeight: responsiveHeight(20),
      color: "#24364C",
    },
  
    talentTextSelected: {
      color: "#6D028E",
    },
  
    bottomFadeOverlay: {
      position: "absolute",
      width: responsiveWidth(375),
      height: responsiveHeight(105),
      left: 0,
      top: responsiveHeight(731),
  
      zIndex: 1,
    },
  
    nextButton: {
      position: "absolute",
      width: responsiveWidth(315),
      height: responsiveHeight(48),
      left: responsiveWidth(30),
      bottom: responsiveHeight(40),
      backgroundColor: "#6D028E",
      borderRadius: responsiveWidth(8),
      top: responsiveHeight(748),
  
      ...Platform.select({
        ios: {
          shadowColor: "rgba(25, 103, 210, 0.1)",
          shadowOffset: { width: 0, height: responsiveHeight(4) },
          shadowOpacity: 1,
          shadowRadius: responsiveWidth(4),
        },
        android: {
          elevation: responsiveWidth(4),
        },
      }),
      justifyContent: "center",
      alignItems: "center",
    },
  
    nextButtonText: {
      fontFamily: "Font-Bold",
      fontWeight: "700",
      fontSize: responsiveFontSize(15),
      lineHeight: responsiveFontSize(15),
      textAlign: "center",
      textTransform: "capitalize",
      color: "#FFFFFF",
    },
    otherInput: {
      marginTop: responsiveHeight(10),
      borderWidth: responsiveWidth(2),
      borderColor: "#F5F5F5",
      borderRadius: responsiveWidth(6),
      paddingHorizontal: responsiveWidth(15),
      height: responsiveHeight(48),
      fontFamily: "Font-Medium",
      fontWeight: "500",
      fontSize: responsiveFontSize(16),
      color: "#24364C",
      backgroundColor: "#FFFFFF",
      outlineColor: "transparent",
    },
    con2: {
      position: "absolute",
      backgroundColor: "white",
      height: responsiveHeight(407),
      width: responsiveWidth(325),
      left: responsiveWidth(25),
      top: responsiveHeight(73),
      borderRadius: 15,
      opacity: 0.3,
      zIndex: 0,
      pointerEvents: 'none', // ✅ Add this
    },
    
    con1: {
      position: "absolute",
      backgroundColor: "white",
      height: responsiveHeight(407),
      width: responsiveWidth(305),
      left: responsiveWidth(35),
      top: responsiveHeight(67),
      borderRadius: 15,
      opacity: 0.3,
      zIndex: 0,
      pointerEvents: 'none', // ✅ Add this
    },
    
  })
  