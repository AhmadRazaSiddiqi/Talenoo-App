import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const EnterLocation = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const handleAllowLocation = () => {
    console.log("Allow location access");
    setModalVisible(false);
  };

  const handleManualEntry = () => {
    console.log("Enter location manually");
    setModalVisible(false);
  };

  const handleClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <View style={styles.modalContainer}>
          {/* Close button header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <Feather name="x" size={24} color="#121417" />
            </TouchableOpacity>
          </View>

          {/* Main content container */}
          <View style={styles.mainContent}>
            {/* Icon container */}
            <View style={styles.iconContainer}>
              {/* Background circle */}
              <View style={styles.backgroundCircle} />

              {/* Map pin icon */}
              <View style={styles.mapPinContainer}>
                <Image
                  source={require("../../assets/images/mappin.png")}
                  style={styles.mapPinImage}
                  resizeMode="contain"
                />
              </View>
            </View>

            {/* Text content */}
            <View style={styles.textContent}>
              {/* Title */}
              <Text style={styles.title}>What is your Location?</Text>

              {/* Subtitle */}
              <Text style={styles.subtitle}>
                Start your talent search today by finding {"\n"} nearby
                positions.
              </Text>
            </View>

            {/* Buttons container */}
            <View style={styles.buttonsContainer}>
              {/* Allow Location Button */}
              <TouchableOpacity
                onPress={handleAllowLocation}
                style={styles.allowButton}
              >
                <Text style={styles.allowButtonText}>
                  Allow Location Access
                </Text>
              </TouchableOpacity>

              {/* Manual Entry Button */}
              <TouchableOpacity
                onPress={handleManualEntry}
                style={styles.manualButton}
              >
                <Text style={styles.manualButtonText}>
                  Enter location Manually
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#6D028E",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    width: screenWidth,
    height: screenHeight,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    height: 72,
    backgroundColor: "#FFFFFF",
  },
  closeButton: {
    width: 24,
    height: 24,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderColor: "transparent",
    outlineWidth: 0,
  },
  mainContent: {
    position: "absolute",
    width: 319,
    height: 330,
    left: 30,
    top: "50%",
    transform: [{ translateY: -165 }], // half of height (330/2)
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  backgroundCircle: {
    position: "absolute",
    width: 120,
    height: 120,
    backgroundColor: "#F5F5F5",
    opacity: 0.5,
    borderRadius: 60,
  },
  mapPinContainer: {
    position: "absolute",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  mapPinImage: {
    width: responsiveWidth(120),
    height: responsiveHeight(120),
  },
  textContent: {
    width: 319,
    height: 60,
    marginBottom: 30,
  },
  title: {
    width: 319,
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    color: "#24364C",
    marginBottom: 15,
  },
  subtitle: {
    width: 319,
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "500",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveHeight(20),
    textAlign: "center",
    color: "#5F729D",
    letterSpacing: 0,
  },
  buttonsContainer: {
    width: 315,
    alignItems: "center",
  },
  allowButton: {
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    backgroundColor: "#6D028E",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "rgba(25, 103, 210, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  allowButtonText: {
    fontFamily: "PlusJakartaSans-Bold",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 15,
    textAlign: "center",
    color: "#FFFFFF",
  },
  manualButton: {
    backgroundColor: "transparent",
    alignItems: "center",
  },
  manualButtonText: {
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#6D028E",
  },
});

export default EnterLocation;
