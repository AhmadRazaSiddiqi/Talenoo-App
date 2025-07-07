import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useFonts } from "expo-font"
import Svg, { Circle, Path } from "react-native-svg"
import { ArrowLeft, ArrowRight } from "lucide-react-native"
import { scale, verticalScale, moderateScale } from "react-native-size-matters"

const { height, width } = Dimensions.get("window")

// TypeScript interfaces
interface PersonWithDeviceProps {
  width: number
  height: number
}

interface DotIndicatorProps {
  active: boolean
  color?: string
}

interface CareerTagProps {
  label: string
  backgroundColor: string
  iconPath: string
  style: any
}

// Custom SVG Components
const CareerTag: React.FC<CareerTagProps> = ({
  label,
  backgroundColor,
  iconPath,
  style,
}) => (
  <View
    style={[
      {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
      },
      style,
    ]}
  >
    <Svg width="12" height="12" viewBox="0 0 24 24" style={{ marginRight: 4 }}>
      <Path d={iconPath} fill="white" />
    </Svg>
    <Text style={{ color: "white", fontWeight: "bold", fontSize: 11 }}>
      {label}
    </Text>
    <Svg width="12" height="12" viewBox="0 0 24 24" style={{ marginLeft: 4 }}>
      <Path d={iconPath} fill="white" />
    </Svg>
  </View>
)

const PersonWithDevice: React.FC<PersonWithDeviceProps> = ({
  width: svgWidth,
  height: svgHeight,
}) => {
  const careerTags = [
    {
      label: "#Designer",
      backgroundColor: "#8B5CF6",
      iconPath:
        "M13.64 21.97c-.16-.02-.3-.06-.44-.09l-1.42-3.48c-.29.14-.59.25-.91.31v3.83c.57-.07 1.16-.28 1.77-.57zm-3.34.57v-3.83c-.32-.06-.62-.17-.91-.31l-1.42 3.48c-.14.03-.28.07-.44.09.61.29 1.2.5 1.77.57zM8.5 21.92c-.44-.15-.85-.35-1.24-.58l1.42-3.48c.18.14.38.25.6.33l-.78 3.73zm7-.01l-.78-3.73c.22-.08.42-.19.6-.33l1.42 3.48c-.39.23-.8.43-1.24.58z",
      style: {
        position: "absolute" as const,
        top: "15%",
        left: "5%",
      },
    },
    {
      label: "#Manager",
      backgroundColor: "#F97316",
      iconPath:
        "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      style: {
        position: "absolute" as const,
        top: "25%",
        right: "8%",
      },
    },
    {
      label: "#React Developer",
      backgroundColor: "#8B5CF6",
      iconPath:
        "M12 2.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM21 9h-6l2 3-2 3h6l2-3-2-3zM3 9l2 3-2 3h6l-2-3 2-3H3z",
      style: {
        position: "absolute" as const,
        top: "55%",
        left: "2%",
      },
    },
    {
      label: "#UX Designer",
      backgroundColor: "#10B981",
      iconPath:
        "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
      style: {
        position: "absolute" as const,
        top: "70%",
        right: "5%",
      },
    },
    {
      label: "#Developer",
      backgroundColor: "#F97316",
      iconPath:
        "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      style: {
        position: "absolute" as const,
        bottom: "15%",
        left: "8%",
      },
    },
  ]

  return (
    <View style={{ position: "relative", width: svgWidth, height: svgHeight }}>
      {/* Background with the actual image */}
      <View
        style={{
          width: svgWidth,
          height: svgHeight,
          borderRadius: svgWidth / 2,
          overflow: "hidden",
          backgroundColor: "#F0F0F0",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Replace this with your actual image */}
        <Image
          source={require("../../assets/images/image1.png")} // Replace with your image path
          style={{
            width: "80%",
            height: "80%",
            resizeMode: "contain",
          }}
        />
      </View>

      {/* Floating Career Tags */}
      <View
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {careerTags.map((tag, index) => (
          <CareerTag
            key={index}
            label={tag.label}
            backgroundColor={tag.backgroundColor}
            iconPath={tag.iconPath}
            style={tag.style}
          />
        ))}
      </View>
    </View>
  )
}

const DotIndicator: React.FC<DotIndicatorProps> = ({
  active,
  color = "#E2CCE8",
}) => (
  <Svg width="12" height="12" viewBox="0 0 12 12">
    <Circle cx="6" cy="6" r="6" fill={active ? "#6D028E" : color} />
  </Svg>
)

const Onboarding: React.FC = () => {
  const [fontsLoaded] = useFonts({
    "Font-Medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Font-Bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero Image Section */}
        <View style={styles.imageContainer}>
          <PersonWithDevice
            width={Math.min(width * 0.9, 400)}
            height={Math.min(height * 0.45, 400)}
          />
        </View>

        {/* Content Section */}
        <View style={styles.contentContainer}>
          <View style={styles.textAndNavigation}>
            {/* Main Heading */}
            <Text style={styles.heading}>
              Finding Your Perfect{"\n"}Career Path Starts Here!
            </Text>

            {/* Subheading */}
            <Text style={styles.subHeading}>
              Confused looking for updated talents{"\n"}and let's see here lots
              of talent listings
            </Text>

            {/* Navigation Indicators */}
            <View style={styles.navigationContainer}>
              <TouchableOpacity style={styles.navButton}>
                <ArrowLeft color="#6D028E" size={20} />
              </TouchableOpacity>

              <View style={styles.dotsContainer}>
                <DotIndicator active={true} />
                <DotIndicator active={false} />
                <DotIndicator active={false} />
                <DotIndicator active={false} />
              </View>

              <TouchableOpacity
                style={[styles.navButton, styles.activeNavButton]}
              >
                <ArrowRight color="#FFFFFF" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.bottomSection}>
            {/* Get Started Button */}
            <TouchableOpacity style={styles.getStartedButton}>
              <Text style={styles.getStartedText}>Let's Get Started</Text>
            </TouchableOpacity>

            {/* Sign In Link */}
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>
                Already have an account?{" "}
                <Text style={styles.signInLink}>Sign In</Text>
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: verticalScale(40),
    minHeight: height,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(30),
    minHeight: height * 0.45,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: scale(20),
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: verticalScale(30),
  },
  textAndNavigation: {
    alignItems: "center",
    width: "100%",
  },
  bottomSection: {
    alignItems: "center",
    width: "100%",
    paddingBottom: verticalScale(20),
  },
  heading: {
    fontFamily: "Font-Bold",
    fontSize: moderateScale(28),
    fontWeight: "700",
    textAlign: "center",
    color: "#24364C",
    lineHeight: verticalScale(36),
    marginBottom: verticalScale(16),
    paddingHorizontal: scale(10),
  },
  subHeading: {
    fontFamily: "Font-Medium",
    fontSize: moderateScale(16),
    fontWeight: "500",
    textAlign: "center",
    color: "#5F729D",
    lineHeight: verticalScale(24),
    marginBottom: verticalScale(40),
    paddingHorizontal: scale(20),
  },
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(40),
    width: "100%",
  },
  navButton: {
    backgroundColor: "#F5F5F5",
    borderRadius: scale(22.5),
    height: scale(45),
    width: scale(45),
    alignItems: "center",
    justifyContent: "center",
  },
  activeNavButton: {
    backgroundColor: "#6D028E",
  },
  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: scale(20),
    gap: scale(8),
  },
  getStartedButton: {
    backgroundColor: "#6D028E",
    borderRadius: scale(12),
    paddingVertical: verticalScale(16),
    paddingHorizontal: scale(40),
    width: "100%",
    maxWidth: scale(315),
    alignItems: "center",
    justifyContent: "center",
    marginBottom: verticalScale(20),
  },
  getStartedText: {
    fontFamily: "Font-Medium",
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  signInContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(16),
    paddingHorizontal: scale(20),
  },
  signInText: {
    fontFamily: "Font-Medium",
    fontSize: moderateScale(14),
    color: "#6D028E",
    textAlign: "center",
    lineHeight: verticalScale(20),
  },
  signInLink: {
    color: "#FE5120",
    fontWeight: "600",
  },
})
