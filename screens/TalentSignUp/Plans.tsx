import PlanCard from "@/components/PlanCard";
import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "@/utils/responsive";
import { AntDesign, Feather } from "@expo/vector-icons";
import React from "react";
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Plans = () => {
  const handleBack = () => {
    // Handle back navigation
    console.log("Back pressed");
  };

  const handleClose = () => {
    // Handle close
    console.log("Close pressed");
  };

  const Cards = {
    Free: {
      title: "Basic",
      price: "Free",
      btnText: "Select",
      offer: ["User information only (no photo or video)"],
      bgColor: "#FFFFFF",
      text: "black",
      btnbg: "#F5F5F5",
      btntxtClr: "black",
    },
    Silver: {
      title: "Silver",
      price: "19.99 SAR",
      btnText: "Start 1-month trial",
      text: "white",
      bgColor: "#6D028E",
      offer: ["2 videos", "Booking system"],
      btnbg: "#F2F2F2",
      btntxtClr: "#6D028E",
    },
    Gold: {
      title: "Gold",
      price: "49.99 SAR",
      btnText: "Start 1-month trial",
      text: "black",
      bgColor: "#FFFFFF",
      offer: ["10 videos", "Booking system"],
      btnbg: "#F2F2F2",
      btntxtClr: "black",
    },
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#6D028E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose your Plan</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Feather name="x" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <PlanCard CardDetails={Cards.Free} />
        <PlanCard CardDetails={Cards.Silver} />
        <PlanCard CardDetails={Cards.Gold} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
  },
  backButton: {
    padding: 8,
    outlineColor: "transparent",
    borderColor: "transparent",
    backgroundColor: "#F5F5F5",
    borderRadius: 100,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    fontFamily: "Font-Bold",
  },
  closeButton: {
    padding: 8,
    borderWidth: 0,
    borderColor: "transparent",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    backgroundColor: "#F9FAFB",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#374151",
  },
  currentLocationButton: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
  },
  currentLocationIcon: {
    marginRight: 16,
  },
  currentLocationText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#6D028E",
  },
  resultsContainer: {
    position: "absolute",
    flex: 1,
    marginTop: 16,
    backgroundColor: "green",
    // paddingLeft: responsiveWidth(14),
    // height: responsiveHeight(313),
    // width: responsiveWidth(296),
  },
  resultsTitle: {
    position: "absolute",
    fontSize: responsiveFontSize(16),
    fontWeight: "600",
    color: "#24364C",
    marginHorizontal: 16,
    marginBottom: 16,
    width: responsiveWidth(105),
    // height: responsiveHeight(15),
    left: responsiveWidth(15),
    top: responsiveHeight(198),
    // backgroundColor: "yellow",
  },
  locationItem: {
    flexDirection: "column",
    alignItems: "flex-start",
    // paddingHorizontal: responsiveWidth(16),
    // paddingVertical: responsiveHeight(16),
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    marginBottom: responsiveHeight(15),
  },
  locationIconContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 16,
    marginTop: 2,
    gap: responsiveWidth(5),
  },
  locationInfo: {
    flex: 1,
    height: responsiveHeight(85),
    width: responsiveWidth(375),
    padding: 0,
  },
  locationName: {
    fontSize: responsiveFontSize(14),
    fontWeight: "600",
    color: "#1F2937",
    marginBottom: 4,
  },
  locationAddress: {
    fontSize: responsiveFontSize(14),
    color: "#9CA3AF",
    lineHeight: 20,
    marginBottom: 2,
  },
  locationCountry: {
    fontSize: responsiveFontSize(14),
    color: "#9CA3AF",
    lineHeight: 20,
  },
  locations: {
    position: "absolute",
    width: responsiveWidth(296),
    paddingLeft: 1,
    left: responsiveWidth(32),
    top: responsiveHeight(231),
  },
});

export default Plans;
