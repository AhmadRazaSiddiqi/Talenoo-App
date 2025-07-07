import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput, // Keeping TextInput in imports, though not used in UI for this screen based on provided design.
  ScrollView,
} from "react-native"
import React, { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { Image } from "expo-image"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Platform } from "react-native"
// Import your responsive helper functions
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth,
} from "../../utils/responsive" // Ensure this path is correct

const { width, height } = Dimensions.get("window") // Keep this for dynamic width calculation for nextButton

const talentsList = [
  "Internship",
  "Entry Level",
  "Associate",
  "Mid Senior Level",
  "Director",
  "Executive",
]

const JobStepScreen = () => {
  const [selectedJob, setSelectedJob] = useState(["Internship"]) // Initial selection as per design's checkbox state

  const handleJobSelect = (job) => {
    setSelectedJob((prevSelected) =>
      prevSelected.includes(job)
        ? prevSelected.filter((j) => j !== job)
        : [...prevSelected, job]
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Linear Gradient and Mask Image */}
      {/* Rectangle 383 from design */}
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]} // Matches 180deg linear-gradient
        style={styles.background}
      />
      <View style={styles.con1}></View>
      <View style={styles.con2}></View>
      {/* Rectangle 384 from design - the white rounded background area */}
      {/* This is the closest representation of the layered Rectangle 384s in the design,
          which seems to indicate a solid white background with a subtle border effect.
          Using the imgmask.png as a placeholder for the content area's mask.
          If `imgmask.png` is truly a mask for the *content area* rather than a decorative overlay,
          its usage might need re-evaluation. Assuming it's the white content card. */}
      <Image
        source={require("../../assets/images/imgmask.png")} // Use your actual mask image if it's the intent
        style={styles.contentMaskCard} // Renamed style for clarity, matches the last Rectangle 384
        resizeMode="contain" // 'contain' is good for scaling without cropping
      />

      {/* Header and Progress Bar */}
      <View style={styles.header}>
        {/* Group 942 / Group 1068 - Back Arrow */}
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => console.log("Back pressed")}
        >
          <Icon name="arrow-left" size={responsiveFontSize(20)} color="#000" />{" "}
          {/* arrow-right (5) 1 with transform - size 20px */}
        </TouchableOpacity>
        {/* Frame 9391 - Progress Bar */}
        <View style={styles.progressBarContainer}>
          {/* Frame 1072 - Step 1 (Active) */}
          <View style={styles.progressCircleInactive}>
            {" "}
            {/* background #6D028E from design */}
            <Text style={styles.progressTextActive}>1</Text>{" "}
            {/* color #FFFFFF */}
          </View>
          {/* Rectangle 385 - Line 1 (Active) */}
          <View style={styles.progressLineActive} />{" "}
          {/* background linear-gradient(90deg, #FFFFFF 0%, #FFFFFF 100%) */}
          {/* Frame 1072 - Step 2 (Inactive) */}
          <View style={styles.progressCircleInactive}>
            {" "}
            {/* background #FFFFFF, border rgba(255, 255, 255, 0.1) */}
            <Text style={styles.progressTextActive}>2</Text>{" "}
            {/* color #6D028E */}
          </View>
          {/* Rectangle 385 - Line 2 (Inactive) */}
          <View style={styles.progressLineInactive} />{" "}
          {/* background rgba(255, 255, 255, 0.1) */}
          {/* Frame 1072 - Step 3 (Inactive) */}
          <View style={styles.progressCircleInactiveBordersOnly}>
            {" "}
            {/* border rgba(255, 255, 255, 0.1) */}
            <Text style={styles.progressTextInactiveGray}>3</Text>{" "}
            {/* color rgba(255, 255, 255, 0.5) */}
          </View>
        </View>
        <View style={{ width: responsiveWidth(40) }} />{" "}
        {/* Placeholder for alignment, matches Group 942/1068 width */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Frame 9380 - Main Content Container */}
        <View style={styles.mainContentArea}>
          {/* Frame 9378 - Heading Container */}
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>
              What is your current {"\n"} experience level?
            </Text>
          </View>

          {/* Frame 9379 / Frame 898 / Frame 1069 - List of Job Levels */}
          <View style={styles.jobLevelsList}>
            {talentsList.map((job, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.jobLevelItem, // Frame 9388 base style
                  selectedJob.includes(job) && styles.jobLevelItemSelected, // Selected state (border/background)
                ]}
                onPress={() => handleJobSelect(job)}
              >
                {/* Group 1072 - Checkbox icon */}
                <Icon
                  name={
                    selectedJob.includes(job)
                      ? "checkbox-marked" // Rectangle 386 active state
                      : "checkbox-blank-outline" // Rectangle 386 inactive state
                  }
                  size={responsiveFontSize(18)} // Based on 18px width/height of Rectangle 386
                  color={selectedJob.includes(job) ? "#6D028E" : "#B3B3B3"} // Colors from design
                />
                <Text
                  style={[
                    styles.jobLevelText, // Internship text style
                    selectedJob.includes(job) && styles.jobLevelTextSelected, // Color change when selected
                  ]}
                >
                  {job}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Frame 9370 - Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => console.log("Next button pressed", selectedJob)}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default JobStepScreen

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF", // Matches 10_Job_Step_2 background
  },
  // Rectangle 383
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: responsiveHeight(311), // Height from design
  },
  // Rectangle 384 (the largest one, assuming this is the content card)
  contentMaskCard: {
    position: "absolute",
    width: responsiveWidth(345),
    height: responsiveHeight(407),
    left: responsiveWidth(15),
    top: responsiveHeight(80),
    backgroundColor: "#FFFFFF", // Matches background #FFFFFF
    borderRadius: responsiveWidth(15), // Matches border-radius
    // Assuming imgmask.png is primarily for shape, this acts as the white background card.
    // If imgmask.png is a texture, you'd apply it differently.
    // mixBlendMode: 'normal' is a CSS property for blending layers, not directly supported by React Native styles.
    // Box shadow will be applied to the nextButton which has it.
  },

  // Group 39888 - A container for the whole UI, implicit by SafeAreaView and content arrangement

  // Header and Progress Bar (Frame 9391 and related groups)
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Ensures spacing between back button, progress, and placeholder
    paddingHorizontal: responsiveWidth(15), // Adjusted to align with general padding
    paddingTop: responsiveHeight(15), // Based on Group 942 top 15px
    // The design has top: 23px for Frame 9391 (progress bar) and top: 15px for Group 942 (back button)
    // We'll use a consistent `paddingTop` for the header and then adjust `progressBarContainer` top if needed.
    position: "absolute",
    width: "100%",
    zIndex: 2, // Ensure it's above other elements
  },
  // Group 942 / Group 1068 - Back Button container
  backButtonContainer: {
    width: responsiveWidth(40), // Based on Group 942 width
    height: responsiveHeight(40), // Based on Group 942 height
    justifyContent: "center",
    alignItems: "center",
    // Ellipse 244 and arrow-right transform: matrix(-1,0,0,1,0,0) implies a circle background and a flipped arrow.
    // Assuming the background circle is part of the button visually.
    borderRadius: responsiveWidth(20), // Half of width/height for a circle
    backgroundColor: "transparent", // Or a specific color if the circle should be visible
    // The design shows the arrow inside a circle which might be implied or a separate component.
  },

  // Frame 9391 - Progress Bar
  progressBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: responsiveWidth(4), // Gap between elements
    // The design shows top: 23px for this container relative to its parent (which is the header's effective top)
    // We already have `paddingTop` on the header, so this `marginTop` will adjust relative to header's padding.
    marginTop: responsiveHeight(8), // Calculated: 23 (design top) - 15 (header paddingTop) = 8px offset
  },
  // Frame 1072 (active state for progress circle)
  progressCircleActive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12), // half of width/height
    backgroundColor: "#6D028E", // Color from design for active state
    justifyContent: "center",
    alignItems: "center",
  },
  // 1 (text inside active circle)
  progressTextActive: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24), // Line height for the text
    color: "#6D028E",
  },
  // Rectangle 385 (active line)
  progressLineActive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5), // Height from design
    backgroundColor: "#FFFFFF", // White color for active line
    borderRadius: responsiveWidth(5), // Border radius from design
  },
  // Frame 1072 (inactive state for progress circle - with background and border)
  progressCircleInactive: {
    width: responsiveWidth(24),
    height: responsiveWidth(24),
    borderRadius: responsiveWidth(12),
    backgroundColor: "#FFFFFF",
    borderWidth: responsiveWidth(2), // Border from design
    borderColor: "rgba(255, 255, 255, 0.1)", // Border color from design
    justifyContent: "center",
    alignItems: "center",
  },
  // 2 (text inside inactive circle)
  progressTextInactive: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(24),
    color: "#6D028E", // Color from design for inactive text
  },
  // Rectangle 385 (inactive line)
  progressLineInactive: {
    width: responsiveWidth(40),
    height: responsiveHeight(5),
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Color from design for inactive line
    borderRadius: responsiveWidth(5),
  },
  // Frame 1072 (inactive state for progress circle - border only)
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
    // The top of Frame 9380 is 115px. Header padding and height impact this.
    // We need to calculate a `paddingTop` for the ScrollView's contentContainerStyle
    // that positions `mainContentArea` at `responsiveHeight(115)` from the top of the screen.
    paddingTop: responsiveHeight(115),
    paddingBottom: responsiveHeight(40 + 48 + 20), // 40px bottom, 48px button height, + some extra if needed
    // You might also use `flexGrow: 1` if content is short to push it to top, but paddingBottom for scroll is fine
  },
  mainContentArea: {
    // Frame 9380 width 316px, left 30px
    width: responsiveWidth(316),
    alignSelf: "center", // Centered within the available space
    // height: responsiveHeight(412), // This height is a sum of its children, better to let content define height
    // No specific padding on this container from the design CSS, children handle it.
  },

  // Frame 9378 - Heading Container
  headingContainer: {
    // width: 316px (already set by parent), height: 44px
    gap: responsiveHeight(15), // Gap within the heading frame (though only one child)
    marginBottom: responsiveHeight(30), // Gap between heading frame and next section (Frame 9379 starts 30px below Frame 9378)
  },
  // What is your current experience level?
  heading: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(20),
    lineHeight: responsiveFontSize(28), // Line height from design
    textAlign: "center",
    color: "#24364C",
    // leading-trim and text-edge are not supported in React Native.
  },

  // Frame 9379 / Frame 898 / Frame 1069 - List of Job Levels
  jobLevelsList: {
    // width: 316px (inherited), height: 338px (sum of children)
    gap: responsiveHeight(10), // Gap between items
  },
  // Frame 9388 - Individual Job Level Item
  jobLevelItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(15),
    paddingVertical: responsiveHeight(18), // From design padding 18px
    gap: responsiveWidth(10), // Gap between checkbox and text
    width: responsiveWidth(316), // Width from design
    height: responsiveHeight(48), // Height from design
    backgroundColor: "#FFFFFF",
    borderWidth: responsiveWidth(2), // Border width from design
    borderColor: "#F5F5F5", // Inactive border color
    borderRadius: responsiveWidth(6), // Border radius from design
  },
  // Selected state for Frame 9388
  jobLevelItemSelected: {
    borderColor: "#6D028E", // Active border color
    // No specific background change in the provided design CSS for selected item
    // but your previous code had `backgroundColor: "#F9F0FB"`.
    // Sticking to design, so removing background change. If it's desired, keep it.
    // backgroundColor: "#F9F0FB", // Keep if light purple background is desired when selected
  },
  // Internship / Entry Level / etc. text
  jobLevelText: {
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "500",
    fontSize: responsiveFontSize(14),
    lineHeight: responsiveFontSize(20),
    color: "#24364C", // Default text color
    // leading-trim and text-edge are not supported
  },
  // Text color when selected
  jobLevelTextSelected: {
    color: "#6D028E", // Or #7B2C83 if that's the desired selected text color
    fontWeight: "bold", // Design says 500, but bold is commonly used for selected state. Adjust if needed.
  },

  // Frame 9370 - Next Button
  nextButton: {
    // position: absolute; width: 315px; height: 48px; left: 30px; bottom: 40px;
    position: "absolute",
    width: responsiveWidth(315),
    height: responsiveHeight(48),
    left: responsiveWidth(30),
    bottom: responsiveHeight(40),
    backgroundColor: "#6D028E",
    borderRadius: responsiveWidth(8), // From design
    // box-shadow: 0px 4px 4px rgba(25, 103, 210, 0.1);
    // React Native's shadow props are different for iOS/Android
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
    // Auto layout padding 18px 107px will be handled by paddingVertical/Horizontal if needed,
    // but simpler to use justifyContent/alignItems for a single text child.
  },
  // Next text
  nextButtonText: {
    // width: 35px; height: 15px;
    fontFamily: "Plus Jakarta Sans", // Needs custom font loading
    fontWeight: "700",
    fontSize: responsiveFontSize(15),
    lineHeight: responsiveFontSize(15), // Matches 100% of font-size
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",
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
  // Removing unused search styles since it's not in this screen's design
  // searchContainer: {},
  // searchInput: {},
})
