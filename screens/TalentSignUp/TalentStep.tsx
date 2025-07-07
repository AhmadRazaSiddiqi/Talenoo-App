import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Platform, // Import Platform for shadows
} from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Image } from "expo-image"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import Feather from '@expo/vector-icons/Feather';

// Import your responsive helper functions
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "../../utils/responsive" // Ensure this path is correct and points to the updated file

const { width, height } = Dimensions.get("window") // Keep this for dynamic width calculation for nextButton

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
  const [selectedTalents, setSelectedTalents] = useState(["Photographer"]) // Initial selection as per design
  const [searchQuery, setSearchQuery] = useState("")
  const [otherTalent, setOtherTalent] = useState("") // State for custom 'Other' input

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
        locations={[0.4823, 1]} // Matches 180deg linear-gradient
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
              placeholderTextColor="#5F729D" // Color from design's "Search Talent" text
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
                  styles.talentItem, // Frame 9388 base style
                  selectedTalents.includes(talent) && styles.talentItemSelected, // Selected state (border/background)
                ]}
                onPress={() => handleTalentSelect(talent)}
              >
                {/* Group 1072 - Checkbox icon */}
                <Icon
                  name={
                    selectedTalents.includes(talent)
                      ? "checkbox-marked" // check (3) 1 active state with background
                      : "checkbox-blank-outline" // Rectangle 386 inactive state
                  }
                  size={responsiveFontSize(18)} // Based on 18px width/height of Rectangle 386
                  color={
                    selectedTalents.includes(talent) ? "#6D028E" : "#F5F5F5"
                  } // Colors from design
                />
                <Text
                  style={[
                    styles.talentText, // Photographer text style
                    selectedTalents.includes(talent) &&
                      styles.talentTextSelected, // Color change when selected
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
    position:'relative' // Matches Group 39886 background
  },
  // Rectangle 383
  backgroundGradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: responsiveHeight(311), // Height from design
  },
  // Rectangle 384 (the solid white content card)
  contentCardBackground: {
    position: "absolute",
    width: responsiveWidth(345),
    height: responsiveHeight(407),
    left: responsiveWidth(15),
    top: responsiveHeight(80), // From design top 80px
    backgroundColor: "#FFFFFF",
    borderRadius: responsiveWidth(15),
 // Ensure it's behind the content, but above the gradient
  },
  // The layered Rectangle 384s (rgba(255,255,255,0.3)) could be simulated with shadows or separate Views
  // but for simplicity and matching the final visible layer, `contentCardBackground` is used.

  // Header and Progress Bar (Frame 9391 and related groups)
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures spacing between back button, progress, and placeholder
    paddingHorizontal: responsiveWidth(15), // Adjusted to align with general padding
    paddingTop: responsiveHeight(15), // Based on Group 942 top 15px
    position: "absolute",
    width: "100%",
    zIndex: 2, // Ensure it's above other elements
  },
  // Group 942 / Group 1068 - Back Button container
  backButtonContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(40),
    justifyContent: "center",
    alignItems: "center",
    // Ellipse 244 implies a circle background which is not explicitly given a color in the provided CSS.
    // If it should have a visible background, add `backgroundColor`.
    // borderRadius: responsiveWidth(20), // For a circle
  },

  // Frame 9391 - Progress Bar
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4), // Gap between elements
    // The design shows top: 25px for Frame 9391. With header paddingTop 15, this translates to 10px marginTop.
    marginTop: responsiveHeight(10), // Calculated: 25 (design top) - 15 (header paddingTop) = 10px offset
  },
  // Frame 1072 (active state for progress circle)
  progressCircleActive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12), // half of width/height
    backgroundColor: "#FFFFFF", // Color from design for active state
    justifyContent: "center",
    alignItems: "center",
  },
  // 1 (text inside active circle)
  progressTextActive: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24), // Line height for the text
    color: "#6D028E", // Color from design
  },
  // Rectangle 385 (active line)
  progressLineActive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "#FFFFFF", // White color for active line
    borderRadius: responsiveWidth(5),
  },
  // Frame 1072 (inactive state for progress circle - border only)
  progressCircleInactive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    borderWidth: responsiveWidth(2), // Border from design
    borderColor: "rgba(255, 255, 255, 0.1)", // Border color from design
    justifyContent: "center",
    alignItems: "center",
  },
  // 2, 3 (text inside inactive circle)
  progressTextInactive: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "rgba(255, 255, 255, 0.5)", // Color for inactive text
  },
  // Rectangle 385 (inactive line)
  progressLineInactive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Color from design for inactive line
    borderRadius: responsiveWidth(5),
  },
  // Frame 1072 (inactive state for progress circle - border only, same as previous inactive)
  progressCircleInactiveBordersOnly: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    borderWidth: responsiveWidth(2),
    borderColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  // 3 (text inside inactive circle)
  progressTextInactiveGray: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "rgba(255, 255, 255, 0.5)", // Color from design for inactive text
  },

  // Frame 9380 - Main Content Area
  scrollContent: {
    // The top of Frame 9380 is 115px.
    paddingTop: responsiveHeight(115),
    paddingBottom: responsiveHeight(40 + 48 + 20), // 40px bottom margin for button, 48px button height, + some extra for scroll buffer
  },
  mainContentArea: {
    width: responsiveWidth(316),
    alignSelf: "center", // Centered within the available space
    // height: responsiveHeight(548), // Let content define height for scrollability
    gap: responsiveHeight(30),
    zIndex:1 // Gap from Frame 9380
  },

  // Frame 9378 - Heading Container
  headingContainer: {
    width: responsiveWidth(316), // from design
    height: responsiveHeight(44), // from design
    gap: responsiveHeight(15), // Gap inside heading container
  },
  // What talent are you looking to obtain?
  heading: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(20),
    lineHeight: responsiveFontSize(28),
    textAlign: "center",
    color: "#24364C",
    // leading-trim and text-edge are not supported in React Native.
  },

  // Group 1073 - Search Input Container
  searchContainer: {
    // width: 316px, height: 48px from design
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: responsiveWidth(2), // From Rectangle 326
    borderColor: "#F5F5F5", // From Rectangle 326
    borderRadius: responsiveWidth(6), // From Rectangle 326
    paddingLeft: responsiveWidth(17), // Left position of search icon is 17px
    paddingRight: responsiveWidth(15), // General padding right
    height: responsiveHeight(48), // Height from Rectangle 326
    // The design has Search Talent text left 45px, which means 17 (icon start) + 20 (icon width) + 8 (approx gap) = 45, so gap: 8px
    gap: responsiveWidth(8), // Gap between icon and text input
  },
  searchInput: {
    flex: 1, // Takes up remaining space
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "500",
    fontSize: responsiveFontSize(16),
    lineHeight: responsiveFontSize(20),
    color: "#5F729D", // Color from "Search Talent" text
    paddingVertical: 0, // Remove default vertical padding
  },

  // Frame 9379 / Frame 898 / Frame 1069 - List of Talents
  talentsList: {
    // width: 316px (inherited), height: 396px (sum of children)
    gap: responsiveHeight(10), // Gap between items
  },
  // Frame 9388 - Individual Talent Item
  talentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(18), // From design padding 18px
    gap: responsiveWidth(10), // Gap between checkbox and text
    width: responsiveWidth(316), // Width from design
    height: responsiveHeight(48), // Height from design
    backgroundColor: "#FFFFFF",
    borderWidth: responsiveWidth(2),
    borderColor: "#F5F5F5", // Inactive border color
    borderRadius: responsiveWidth(6),
  },
  // Selected state for Frame 9388
  talentItemSelected: {
    borderColor: "#6D028E", // Active border color
    // No specific background change in the provided design CSS for selected item
    // Your previous code had `backgroundColor: "#F9F0FB"`. Sticking to design for now.
    // backgroundColor: "#F9F0FB", // Keep if light purple background is desired when selected
  },
  // Photographer / DJ / etc. text
  talentText: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "500",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(20),
    color: "#24364C", // Default text color
    // leading-trim and text-edge are not supported
  },
  // Text color when selected
  talentTextSelected: {
    // The design CSS for selected text color is still #24364C for "Photographer"
    // but the checkbox is active. If the text should also change color, specify here.
    // For consistency with typical selected states, using the accent color or bolder font.
    color: "#6D028E", // Assuming selected text should match the active border color
    // fontWeight: "bold", // Optional: make it bold when selected
  },

  // Rectangle 387 - Bottom Fade Overlay
  bottomFadeOverlay: {
    position: "absolute",
    width: responsiveWidth(375), // Full width
    height: responsiveHeight(105), // Height from design
    left: 0,
    top: responsiveHeight(731), // Top position from design
    // top: height - responsiveHeight(105 + 40 + 48), // Alternative calculation: screen height - fade height - button bottom - button height
    // You might need to adjust this `top` based on exact scroll view content and button position.
    zIndex: 1, // Below the button, above the scroll content
  },

  // Frame 9370 - Next Button
  nextButton: {
    position: "absolute",
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    left: responsiveWidth(30),
    bottom: responsiveHeight(40), // From design
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8),
    // box-shadow: 0px 4px 4px rgba(25, 103, 210, 0.1);
    ...Platform.select({
      ios: {
        shadowColor: "rgba(25, 103, 210, 0.1)",
        shadowOffset: { width: 0, height: responsiveHeight(4) },
        shadowOpacity: 1,
        shadowRadius: responsiveWidth(4),
      },
      android: {
        elevation: responsiveWidth(4), // Elevation provides shadow on Android
      },
    }),
    justifyContent: "center",
    alignItems: "center",
  },
  // Next text
  nextButtonText: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(15),
    lineHeight: responsiveFontSize(15), // Matches 100% of font-size
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
    fontFamily: "Plus Jakarta Sans",
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
