import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { FontAwesome6 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const UserTypeSelectionScreen: React.FC = ({navigation}) => {
  const [selectedUserType, setSelectedUserType] = useState<
    "talent" | "client" | null
  >(null);


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
      <View style={styles.backgroundElipse1} >
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        locations={[0.4823, 1]}
        style={styles.gradientBackground}
      />

      {/* Layered Background Elements */}

      <View style={styles.backgroundLayer2} />
      <View style={styles.backgroundLayer3} />
      <View style={styles.backgroundLayer1} />
      <View style={styles.backgroundElipse4} />
      <View style={styles.backgroundElipse3} />
      <View style={styles.backgroundElipse2} />
      <View style={styles.topImageContainer}>
        <Image
          source={require("../../assets/images/userType.png")}
          style={styles.profileImage}
          resizeMode="contain"
        />
      </View>
      </View>
      {/* Main Content Container */}
        {/* Top Image Container */}

        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Which are you looking for?</Text>
        </View>

        {/* Cards Container */}
        <View style={styles.cardsContainer}>
          {/* Talent Card */}
          <Pressable
            style={[
              styles.card,
              selectedUserType === "talent" && styles.selectedCard,
            ]}
            onPress={() => setSelectedUserType("talent")}
          >
            <View style={styles.cardContent}>
              <View style={styles.cardHeader}>
                <View style={styles.talentIconContainer}>
                  <FontAwesome6 name="user-tie" size={responsiveFontSize(24)} color="#FE5120" />
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
          </Pressable>

          {/* Client Card */}
          <Pressable
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
                  <Text style={styles.clientTagText}>Employeer</Text>
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      
      {/* Next Button */}
      <Pressable
        style={[styles.nextButton, !selectedUserType && styles.nextButton,!selectedUserType?{opacity:.5}:{opacity:1}]}
        onPress={()=>{navigation.replace('TalentSignUp',{usertype:selectedUserType})}}
        disabled={!selectedUserType}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
    // overflow:'hidden'
  },
  gradientBackground: {
    position: "absolute",
    left: 175,
    
    top: responsiveHeight(389),
    width: '100%',
    height: responsiveHeight(311),
  },
  backgroundLayer2: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: responsiveHeight(407),
    width: responsiveWidth(325),
    left: responsiveWidth(186+25),
    top: responsiveHeight(389+73),
    borderRadius: responsiveWidth(15),
  },
  backgroundLayer1: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: responsiveHeight(407),
    width: responsiveWidth(305),
    left: responsiveWidth(186+35),
    top: responsiveHeight(389+67),
    borderRadius: responsiveWidth(15),
  },
  backgroundLayer3:{
    position: "absolute",
    backgroundColor: "#FFF",
    height: responsiveHeight(265),
    width: responsiveWidth(345),
    left: responsiveWidth(186+15),
    top: responsiveHeight(389+80),
    borderRadius: responsiveWidth(15),
  },
  topImageContainer: {
    position: "absolute",
    height: responsiveHeight(292),
    width: responsiveHeight(292),
    top: responsiveHeight(389+73),
    left: responsiveWidth(186+39),
    // bottom:0,
    borderRadius: 5,
    backgroundColor:'transparent'
  },
  profileImage: {
    width: responsiveWidth(292),
    height: responsiveHeight(292),
  },
  titleContainer: {
    position: "absolute",
    width: responsiveWidth(316),
    left: responsiveWidth(30),
    top: responsiveHeight(395),
    textAlign:'center',
    // alignItems: "center",
    gap: 15,
    letterSpacing: 1,
  },
  title: {
    fontSize: responsiveFontSize(20),
    fontWeight: "700",
    color: "#24364C",
    textAlign: "center",
    fontFamily: "Font-Bold",
    lineHeight: responsiveHeight(28),
  },
  cardsContainer: {
    position: "absolute",
    height:responsiveHeight(296),
    width:responsiveWidth(336),
    // width: responsiveWidth(336),
    left: responsiveWidth(19),
    // paddingLeft: responsiveWidth(24),
    top: responsiveHeight(435),
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
    // borderColor: "#6D028E",
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
    height: responsiveWidth(48),
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
    fontFamily: "Font-Bold",
    lineHeight: responsiveHeight(24),
    marginBottom: responsiveHeight(2),
  },
  cardDescription: {
    fontSize: responsiveFontSize(14),
    color: "#4B5563",
    fontFamily: "Font-Regular",
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
    fontFamily: "Font-Regular",
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
    fontFamily: "Font-Regular",
    lineHeight: responsiveHeight(18),
  },
  radioButtonContainer: {
    padding: responsiveWidth(5),
  },
  radioButtonOuter: {
    width: responsiveHeight(24),
    height: responsiveHeight(24),
    borderRadius: responsiveWidth(12),
    borderWidth: responsiveWidth(2),
    borderColor: "#D1D5DB",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonOuterSelected: {
    borderColor: "#7D91B0",
  },
  radioButtonInner: {
    width: responsiveHeight(12),
    height: responsiveHeight(12),
    borderRadius: responsiveHeight(6),
    backgroundColor: "#6D028E",
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
    fontFamily: "Font-",
    lineHeight: responsiveHeight(15),
    textTransform: "capitalize",
  },
  backgroundElipse1: {
    position: "absolute",
    width: responsiveWidth(747),
    height: responsiveWidth(747),
    borderRadius:responsiveWidth(747/2),
    overflow:'hidden',
    
    
    // borderRadius: responsiveHeight(),
    backgroundColor: "#FFF",
    top: -responsiveHeight(389), // Adjust to only show the curve under the image
    left: -responsiveWidth(186), // keep it behind the image but above gradient
    opacity: 1,
    
  },

  backgroundElipse2: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "red",
    width: responsiveWidth(336.65),
    height: responsiveWidth(336.65),
    top: responsiveHeight(389+51.38),
    left: responsiveWidth(186+19.63),
    opacity: 0.1,
    borderRadius: responsiveWidth(168.325),
    
  },
  backgroundElipse3: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "green",

    height: responsiveWidth(289.34),
    width: responsiveWidth(289.34),
    borderRadius: responsiveWidth(144.67),
    opacity: 0.3,
    // box-shadow: 0px 0px 60px rgba(13, 55, 114, 0.3);
    shadowColor: "rgba(13, 55, 114, 0.3)",
    elevation: 60,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 60,

    top: responsiveHeight(389+75.03),
    left: responsiveWidth(186+43.29),
    
  },
  backgroundElipse4: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    // backgroundColor: "blue",
    height: responsiveWidth(240.2),
    width: responsiveWidth(240.2),
    borderRadius: responsiveWidth(120.1),

    opacity: 0.5,
    top: responsiveHeight(99.6),
    left: responsiveWidth(67.85),
    
    shadowColor: "rgba(13, 55, 114, 0.3)",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 60,
    elevation: 10,
  },
});
export default UserTypeSelectionScreen;
