import Feather from '@expo/vector-icons/Feather'
import { LinearGradient } from "expo-linear-gradient"
import React, { useState } from "react"
import {
    Dimensions,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "../../../utils/responsive"

const { width, height } = Dimensions.get("window") 

const talentsList = [
  "Photographer",
  "DJ",
  "Hair Dresser",
  "Violin Player",
  "Body Art",
  "Harmonica",
  "Other",
]

const TalentStep = () => {
  const [selectedTalents, setSelectedTalents] = useState(["Photographer"]) 
  const [searchQuery, setSearchQuery] = useState("")
  const [otherTalent, setOtherTalent] = useState("") 

  const handleTalentSelect = (talent) => {
    setSelectedTalents((prevSelected) =>
      prevSelected.includes(talent)
        ? prevSelected.filter((t) => t !== talent)
        : [...prevSelected, talent]
    )
  }
  
  const filteredTalents = talentsList.filter((talent) =>
    talent.toLowerCase().includes(searchQuery.toLowerCase())
)

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Rectangle 383 - Background Gradient */}
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        locations={[0.4823, 1]} 
        style={styles.backgroundGradient}
      />
<View style={styles.con1}></View>
<View style={styles.con2}></View>
      {/* Rectangle 384 (the white card) - Using Image as a general container representation */}
      {/* Assuming imgmask.png is a general background/texture for the card, otherwise a plain View with styling is sufficient. */}
      {/* The design specifies three layered Rectangle 384s, the last one being #FFFFFF. We target that. */}
      <View style={styles.contentCardBackground} />

      {/* Header with Back Button and Progress Bar */}
      <View style={styles.header}>
        {/* Group 942 / Group 1068 - Back Arrow */}
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => console.log("Back pressed")}
        >
          <Icon name="arrow-left" size={responsiveFontSize(20)} color="white" />{" "}
          {/* arrow-right (5) 1 with transform - size 20px */}
        </TouchableOpacity>
        {/* Frame 9391 - Progress Bar */}
        <View style={styles.progressBarContainer}>
          {/* Frame 1072 - Step 1 (Active) */}
          <View style={styles.progressCircleActive}>
            <Text style={styles.progressTextActive}>1</Text>
          </View>
          {/* Rectangle 385 - Line 1 (Active) */}
          <View style={styles.progressLineActive} />

          {/* Frame 1072 - Step 2 (Inactive) */}
          <View style={styles.progressCircleInactive}>
            <Text style={styles.progressTextInactive}>2</Text>
          </View>
          {/* Rectangle 385 - Line 2 (Inactive) */}
          <View style={styles.progressLineInactive} />

          {/* Frame 1072 - Step 3 (Inactive) */}
          <View style={styles.progressCircleInactiveBordersOnly}>
            <Text style={styles.progressTextInactiveGray}>3</Text>
          </View>
        </View>
        <View style={{ width: responsiveWidth(40) }} />{" "}
        {/* Placeholder for alignment, matches backButtonContainer width */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* <View style={styles.con1}>1</View> */}
        
        {/* Frame 9380 - Main Content Area */}
        <View style={styles.mainContentArea}>
          {/* Frame 9378 - Heading Container */}
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              What talent are you looking to obtain?
            </Text>
          </View>

          {/* Group 1073 - Search Input */}
          <View style={styles.searchContainer}>
            <Feather name="search" size={responsiveFontSize(20)} color="#6D028E" style={{fontWeight:700}} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search Talent"
              placeholderTextColor="#5F729D" 
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          {/* Frame 9379 / Frame 898 / Frame 1069 - List of Talents */}
          <View style={styles.talentsList}>
            {filteredTalents.map((talent, index) => (
              <TouchableOpacity
                key={index}
                style={[
              styles.talentItem, 
              selectedTalents.includes(talent) && styles.talentItemSelected, 
                ]}
                onPress={() => handleTalentSelect(talent)}
              >
                {/* Group 1072 - Checkbox icon */}
               
                  <Icon
                    name={
                      selectedTalents.includes(talent)
                        ? "checkbox-marked" 
                        : "checkbox-blank-outline" 
                    }
                    size={responsiveFontSize(14)} 
                    color={
                      selectedTalents.includes(talent) ? "#6D028E" : "#F5F5F5"
                    } 
                  />
                  <Text
                    style={[
                      styles.talentText, 
                      selectedTalents.includes(talent) &&
                        styles.talentTextSelected, 
                    ]}
                  >
                    {talent}
                  </Text>
               
              </TouchableOpacity>
            ))}
            {/* Show text input if 'Other' is selected */}
            {selectedTalents.includes("Other") && (
              <TextInput
                style={styles.otherInput}
                value={otherTalent}
                onChangeText={setOtherTalent}
                placeholder="Enter your talent here"
                placeholderTextColor={'#527bad'}
                
              />
            )}
          </View>
        </View>
      </ScrollView>

     

      {/* Frame 9370 - Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => console.log("Next button pressed", selectedTalents)}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default TalentStep

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position:'relative' 
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
    fontFamily: "Font-", 
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
    fontFamily: "Font-", 
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
    fontFamily: "Font-", 
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "rgba(255, 255, 255, 0.5)", 
  },

  
  scrollContent: {
    
    paddingTop: responsiveHeight(115),
    paddingBottom: responsiveHeight(40 + 48 + 20), 
  },
  mainContentArea: {
    width: responsiveWidth(316),
    alignSelf: "center", 
    
    gap: responsiveHeight(30),
    zIndex:1 
  },

  
  headingContainer: {
    width: responsiveWidth(316), 
    height: responsiveHeight(44), 
    gap: responsiveHeight(15), 
  },
  
  heading: {
    fontFamily: "Font-", 
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
    fontFamily: "Font-", 
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
    top:responsiveHeight(748),
    
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
    fontFamily: "Font-", 
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
    fontFamily: "Font-",
    fontWeight: "500",
    fontSize: responsiveFontSize(16),
    color: "#24364C",
    backgroundColor: "#FFFFFF",
    outlineColor:'transparent'
  },
  con2:{
    position:'absolute',
    backgroundColor:'white',
    height:responsiveHeight(407),
    width:responsiveWidth(325),
    left:responsiveWidth(25),
    top:responsiveHeight(73),
    borderRadius:15,
    opacity:0.3,
    zIndex:0
  },
  con1:{
    position:'absolute',
    backgroundColor:'white',
    height:responsiveHeight(407),
    width:responsiveWidth(305),
    left:responsiveWidth(35),
    top:responsiveHeight(67),
    borderRadius:15,
    zIndex:0,
    opacity:0.3
  }
})
