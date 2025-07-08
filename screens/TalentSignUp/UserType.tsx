import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { FontAwesome6 } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const UserTypeSelectionScreen: React.FC = () => {
  const [selectedUserType, setSelectedUserType] = useState<
    "talent" | "client" | null
  >(null);

  const handleNext = () => {
    if (selectedUserType) {
      console.log("Selected User Type:", selectedUserType);
    } else {
      console.log("Please select a user type.");
    }
  };

  const renderRadioButton = (type: "talent" | "client") => (
    <View style={styles.radioButtonContainer}>
      <View
        style={[
          styles.radioButtonOuter,
          selectedUserType === type && styles.radioButtonOuterSelected,
        ]}
      >
        {selectedUserType === type && <View style={styles.radioButtonInner} />}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        locations={[0.4823, 1]}
        style={styles.gradientBackground}
      />
      <View style={styles.backgroundElipse1} />

      {/* Layered Background Elements */}
      <View style={styles.backgroundLayer2} />
      <View style={styles.backgroundLayer1} />
      <View style={styles.backgroundElipse2} />
      <View style={styles.backgroundElipse3} />
      <View style={styles.backgroundElipse4} />
      {/* Main Content Container */}
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/images/userType.png")}
          style={styles.profileImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.mainContentContainer}>
        {/* Top Image Container */}

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Which are you looking for?</Text>
        </View>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Talent Card */}
          <TouchableOpacity
            style={[
              styles.card,
              selectedUserType === "talent" && styles.selectedCard,
            ]}
            onPress={() => setSelectedUserType("talent")}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.talentIconContainer}>
                  <FontAwesome6 name="user-tie" size={24} color="#FE5120" />
                </View>
                <View style={styles.cardTextContent}>
                  <Text style={styles.cardTitle}>Talent</Text>
                  <Text style={styles.cardDescription}>
                    Looking for talents
                  </Text>
                </View>
                {renderRadioButton("talent")}
              </View>

              {/* Tags */}
              <View style={styles.tagsContainer}>
                <View style={styles.talentTag}>
                  <Text style={styles.talentTagText}>Freelancer</Text>
                </View>
                <View style={styles.talentTag}>
                  <Text style={styles.talentTagText}>Talent Seeker</Text>
                </View>
              </View>
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
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.clientIconContainer}>
                  <FontAwesome6 name="briefcase" size={24} color="#6D028E" />
                </View>
                <View style={styles.cardTextContent}>
                  <Text style={styles.cardTitle}>Client</Text>
                  <Text style={styles.cardDescription}>Looking for talent</Text>
                </View>
                {renderRadioButton("client")}
              </View>

              {/* Tags */}
              <View style={styles.tagsContainer}>
                <View style={styles.clientTag}>
                  <Text style={styles.clientTagText}>Hiring</Text>
                </View>
                <View style={styles.clientTag}>
                  <Text style={styles.clientTagText}>Projects</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Next Button */}
      <TouchableOpacity
        style={[styles.nextButton, !selectedUserType && styles.nextButton]}
        onPress={handleNext}
        disabled={!selectedUserType}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  gradientBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: responsiveWidth(375),
    height: responsiveHeight(311),
  },
  backgroundLayer2: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: responsiveHeight(407),
    width: responsiveWidth(325),
    left: responsiveWidth(25),
    top: responsiveHeight(73),
    borderRadius: responsiveWidth(15),
  },
  backgroundLayer1: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: responsiveHeight(407),
    width: responsiveWidth(305),
    left: responsiveWidth(35),
    top: responsiveHeight(67),
    borderRadius: responsiveWidth(15),
  },
  mainContentContainer: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(345),
    height: responsiveHeight(265),
    left: responsiveWidth(15),
    top: responsiveHeight(80),
    borderRadius: responsiveWidth(15),
    paddingHorizontal: responsiveWidth(15),
    paddingTop: responsiveHeight(20),
  },
  topImageContainer: {
    position: "absolute",
    height: responsiveHeight(292),
    width: responsiveWidth(292),
    top: responsiveHeight(73),
    left: 39,
    zIndex: 2,
    borderRadius: 5,
  },
  profileImage: {
    width: responsiveWidth(292),
    height: responsiveHeight(292),
  },
  titleContainer: {
    position: "absolute",
    width: responsiveWidth(316),
    left: responsiveWidth(30),
    top: responsiveHeight(316),
    // alignItems: "center",
    gap: 15,
    letterSpacing: 1,
  },
  title: {
    fontSize: responsiveFontSize(20),
    fontWeight: "700",
    color: "#24364C",

    // textAlign: "center",
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: responsiveHeight(28),
  },
  cardsContainer: {
    position: "absolute",

    // width: responsiveWidth(336),
    left: responsiveWidth(24),
    // paddingLeft: responsiveWidth(24),
    top: responsiveHeight(355),
    gap: responsiveHeight(15),
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(16),
    padding: responsiveWidth(10),
    borderWidth: responsiveWidth(2),
    borderColor: "#E5E7EB",
    height: responsiveHeight(140),
    width: responsiveWidth(288),
  },
  selectedCard: {
    borderColor: "#6D028E",
  },
  cardContent: {
    flex: 1,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: responsiveHeight(15),
  },
  talentIconContainer: {
    width: responsiveWidth(48),
    height: responsiveHeight(48),
    borderRadius: responsiveWidth(12),
    backgroundColor: "#FFE9E3",
    alignItems: "center",
    justifyContent: "center",
    marginRight: responsiveWidth(16),
  },
  clientIconContainer: {
    width: responsiveWidth(48),
    height: responsiveHeight(48),
    borderRadius: responsiveWidth(12),
    backgroundColor: "#F3E8FF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: responsiveWidth(16),
  },
  cardTextContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: responsiveFontSize(16),
    fontWeight: "600",
    color: "#111827",
    fontFamily: "PlusJakartaSans-Bold",
    lineHeight: responsiveHeight(24),
    marginBottom: responsiveHeight(2),
  },
  cardDescription: {
    fontSize: responsiveFontSize(14),
    color: "#4B5563",
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: responsiveHeight(20),
    fontWeight: 400,
  },
  tagsContainer: {
    flexDirection: "row",
    gap: responsiveWidth(8),
    justifyContent: "center",
  },
  talentTag: {
    backgroundColor: "#FFE9E3",
    borderRadius: responsiveWidth(9999),
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(3),
    alignItems: "center",
    justifyContent: "center",
  },
  talentTagText: {
    fontSize: responsiveFontSize(12),
    color: "#FE5120",
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: responsiveHeight(18),
  },
  clientTag: {
    backgroundColor: "#FAF5FF",
    borderRadius: responsiveWidth(9999),
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(3),
    alignItems: "center",
    justifyContent: "center",
  },
  clientTagText: {
    fontSize: responsiveFontSize(12),
    color: "#6D028E",
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: responsiveHeight(18),
  },
  radioButtonContainer: {
    padding: responsiveWidth(5),
  },
  radioButtonOuter: {
    width: responsiveWidth(24),
    height: responsiveHeight(24),
    borderRadius: 9999,
    borderWidth: responsiveWidth(2),
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonOuterSelected: {
    borderColor: "#7D91B0",
  },
  radioButtonInner: {
    width: responsiveWidth(12),
    height: responsiveHeight(12),
    borderRadius: responsiveWidth(6),
    backgroundColor: "#D1D5DB",
  },
  nextButton: {
    position: "absolute",
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8),
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    left: responsiveWidth(30),
    top: responsiveHeight(748),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(25, 103, 210, 0.1)",
    shadowOffset: {
      width: 0,
      height: responsiveHeight(4),
    },
    shadowOpacity: 1,
    shadowRadius: responsiveWidth(4),
    elevation: 4,
  },
  nextButtonText: {
    color: "#FFFFFF",
    fontSize: responsiveFontSize(15),
    fontWeight: "700",
    fontFamily: "Plus Jakarta Sans",
    lineHeight: responsiveHeight(15),
    textTransform: "capitalize",
  },
  backgroundElipse1: {
    position: "absolute",
    width: responsiveWidth(747),
    height: responsiveWidth(747),
    borderRadius: responsiveWidth(747) / 2,
    backgroundColor: "#FFFFFF",
    top: responsiveHeight(-450), // Adjust to only show the curve under the image
    left: responsiveWidth((375 - 747) / 2),
    zIndex: -1, // keep it behind the image but above gradient
    opacity: 0,
  },

  backgroundElipse2: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(336.65),
    height: responsiveWidth(336.65),
    top: responsiveHeight(51.38),
    left: responsiveWidth(19.63),
    opacity: 0.1,
    borderRadius: responsiveWidth(336.65) / 2,
    zIndex: 0,
  },
  backgroundElipse3: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: responsiveHeight(289.34),
    width: responsiveWidth(289.34),
    borderRadius: responsiveWidth(289.34) / 2,
    opacity: 0.3,
    // box-shadow: 0px 0px 60px rgba(13, 55, 114, 0.3);
    shadowColor: "rgba(13, 55, 114, 0.3)",
    elevation: 60,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 60,

    top: responsiveHeight(75.03),
    left: responsiveWidth(43.29),
    zIndex: 1,
  },
  backgroundElipse4: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    height: responsiveHeight(240.2),
    width: responsiveWidth(240.2),
    borderRadius: responsiveWidth(240.2) / 2,
    opacity: 0.5,
    top: responsiveHeight(99.6),
    left: responsiveWidth(67.85),
    zIndex: 1,
    shadowColor: "rgba(13, 55, 114, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 60,
    elevation: 10,
  },
});
export default UserTypeSelectionScreen;
