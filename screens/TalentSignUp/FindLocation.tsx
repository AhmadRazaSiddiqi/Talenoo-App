import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { AntDesign, Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LocationSearchScreen = () => {
  const [searchText, setSearchText] = useState("");

  // Sample location data
  const locations = [
    {
      id: 1,
      name: "Baker Street Library",
      address: "221B Baker Street London, NW1 6XE",
      country: "United Kingdom",
    },
    {
      id: 2,
      name: "The Greenfield Mall",
      address: "45 High Street Greenfield, Manchester, M1 2AB",
      country: "United Kingdom",
    },
    {
      id: 3,
      name: "Riverbank Business Park",
      address: "Unit 12, Riverside Drive Bristol, BS1 5RT",
      country: "United Kingdom",
    },
    {
      id: 4,
      name: "Elmwood Community Centre",
      address: "78 Elmwood Avenue Birmingham, B12 3DF",
      country: "United Kingdom",
    },
  ];

  const handleBack = () => {
    // Handle back navigation
    console.log("Back pressed");
  };

  const handleClose = () => {
    // Handle close
    console.log("Close pressed");
  };

  const handleUseCurrentLocation = () => {
    // Handle current location
    console.log("Use current location");
  };

  const handleLocationSelect = (location) => {
    // Handle location selection
    console.log("Selected location:", location);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <AntDesign name="arrowleft" size={24} color="#6D028E" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Your Location</Text>
        <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
          <Feather name="x" size={24} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="#6D028E"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Area"
          placeholderTextColor="#9CA3AF"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Use Current Location Button */}
      <TouchableOpacity
        style={styles.currentLocationButton}
        onPress={handleUseCurrentLocation}
      >
        <View style={styles.currentLocationIcon}>
          <FontAwesome6 name="location-crosshairs" size={20} color="#6D028E" />
        </View>
        <Text style={styles.currentLocationText}>Use current location</Text>
      </TouchableOpacity>

      {/* Search Results */}
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Search Result</Text>

        <ScrollView style={styles.locations}>
          {locations.map((location) => (
            <TouchableOpacity
              key={location.id}
              style={styles.locationItem}
              onPress={() => handleLocationSelect(location)}
            >
              <View style={styles.locationIconContainer}>
                {/* <Ionicons name="location" size={18} color="#6B7280" /> */}
                <FontAwesome6 name="location-dot" size={14} color="#6B7280" />
                <Text style={styles.locationName}>{location.name}</Text>
              </View>
              <View style={styles.locationInfo}>
                <Text style={styles.locationAddress}>{location.address}</Text>
                <Text style={styles.locationCountry}>{location.country}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    fontFamily: "PlusJakartaSans-Bold",
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

export default LocationSearchScreen;
