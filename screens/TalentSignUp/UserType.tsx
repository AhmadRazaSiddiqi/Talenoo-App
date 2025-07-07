import React, { useState } from "react"
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native"
import Feather from "react-native-vector-icons/Feather"
import BackgroundSvg from "../../assets/images/userMask.svg"
import { LinearGradient } from "expo-linear-gradient"

const { width: screenWidth, height: screenHeight } = Dimensions.get("window")

const UserTypeSelectionScreen: React.FC = () => {
  const [selectedUserType, setSelectedUserType] = useState<
    "talent" | "client" | null
  >(null)

  const handleNext = () => {
    if (selectedUserType) {
      console.log("Selected User Type:", selectedUserType)
    } else {
      console.log("Please select a user type.")
    }
  }

  const renderRadioButton = (type) => (
    <TouchableOpacity
      onPress={() => setSelectedUserType(type)}
      style={styles.radioButtonContainer}
    >
      <View
        style={[
          styles.radioButtonOuter,
          selectedUserType === type && styles.radioButtonOuterSelected,
        ]}
      >
        {selectedUserType === type && <View style={styles.radioButtonInner} />}
      </View>
    </TouchableOpacity>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Gradient Background */}
      <LinearGradient
        colors={["#6D028E", "#FFFFFF"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      {/* SVG overlay */}
      <BackgroundSvg
        width={screenWidth}
        height={screenHeight}
        style={styles.backgroundSvg}
      />

      <View style={styles.container}>
        {/* Top Image */}
        <View style={styles.topImageContainer}>
          <Image
            source={require("../../assets/images/userimg.png")}
            style={styles.profileImage}
            resizeMode="cover"
          />
        </View>

        <Text style={styles.title}>Which are you looking for?</Text>

        {/* Talent Card */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedUserType === "talent" && styles.selectedCard,
          ]}
          onPress={() => setSelectedUserType("talent")}
        >
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Feather name="user" size={24} color="#FF7043" />
            </View>
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>Talent</Text>
              <Text style={styles.cardDescription}>Looking for talents</Text>
            </View>
            {renderRadioButton("talent")}
          </View>
        </TouchableOpacity>

        {/* Client Card */}
        <TouchableOpacity
          style={[
            styles.card,
            selectedUserType === "client" && styles.selectedCard,
          ]}
          onPress={() => setSelectedUserType("client")}
        >
          <View style={styles.cardHeader}>
            <View style={styles.iconContainer}>
              <Feather name="briefcase" size={24} color="#8A2BE2" />
            </View>
            <View style={styles.cardTextContent}>
              <Text style={styles.cardTitle}>Client</Text>
              <Text style={styles.cardDescription}>Looking for talent</Text>
            </View>
            {renderRadioButton("client")}
          </View>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          disabled={!selectedUserType}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundSvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topImageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  profileImage: {
    width: 250,
    height: 250,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1D253C",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  selectedCard: {
    borderColor: "#8A2BE2",
    borderWidth: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  cardTextContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1D253C",
  },
  cardDescription: {
    fontSize: 14,
    color: "#7C8592",
    marginTop: 2,
  },
  radioButtonContainer: {
    padding: 5,
  },
  radioButtonOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonOuterSelected: {
    borderColor: "#8A2BE2",
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#8A2BE2",
  },
  nextButton: {
    backgroundColor: "#8A2BE2",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    marginBottom: 20,
  },
  nextButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
})

export default UserTypeSelectionScreen
