import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { setVisibilityAsync, useVisibility } from "expo-navigation-bar";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect } from "react";
import { AppState, Image, Platform, StatusBar as RNStatusBar } from "react-native";

import "./global.css";

import SearchScreen from "./screens/ClientDashboard/Search";
import MessagesScreen from "./screens/Messages";
import HomeScreen from "./screens/Tabs/HomeScreen";
// import ProfileScreen from "./screens/Tabs/ProfileScreen";
import RequestsScreen from "./screens/Tabs/RequestsScreen";
import ProfileScreen from "./screens/TalentSignUp/Profile";

import ContactUsScreen from "./screens/ContactUs";
import EditImageScreen from "./screens/EditImage";
import EditVideoScreen from "./screens/EditVideo";
import FollowersScreen from "./screens/Followers";
import FollowingScreen from "./screens/Following";
import ManageContentScreen from "./screens/ManageVideos";
import BookingDetailsModal from "./screens/Modals/BookingDetails";
import NotificationScreen from "./screens/Notifications";
import SettingsScreen from "./screens/ProfileSettings";
import QRScreen from "./screens/QRCode";
import UploadContentScreen from "./screens/UploadContent";
import WishListScreen from "./screens/WishList";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "./utils/responsive";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          width: responsiveWidth(390),
          height: responsiveHeight(75),
          borderWidth: 1,
          paddingTop: responsiveHeight(8),
          paddingRight: responsiveWidth(16),
          paddingBottom: responsiveHeight(12),
          paddingLeft: responsiveWidth(16),
          gap: responsiveWidth(8),
        },
        tabBarActiveTintColor: "#6D028E",
        tabBarInactiveTintColor: "#6B7582",
        tabBarLabelStyle: {
          fontFamily: "Font-Regular",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="home" size={24} color={focused ? "#6D028E" : "#6B7582"} />
          ),
        }}
      />
      <Tab.Screen
        name="Requests"
        component={RequestsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="inbox-outline"
              size={24}
              color={focused ? "#6D028E" : "#6B7582"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color={focused ? "#6D028E" : "#6B7582"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="person" size={responsiveFontSize(24)} color={focused ? "#6D028E" : "#6B7582"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ClientTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: responsiveHeight(76),
          borderWidth: responsiveWidth(1),
          paddingTop: responsiveHeight(8),
          paddingRight: responsiveWidth(16),
          paddingBottom: responsiveHeight(12),
          paddingLeft: responsiveWidth(16),
          gap: responsiveWidth(8),
          borderColor: "#F2F2F5",
        },
        tabBarActiveTintColor: "#6D028E",
        tabBarInactiveTintColor: "#6B7582",
        tabBarLabelStyle: {
          fontFamily: "Font-Regular",
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="home" size={responsiveFontSize(24)} color={focused ? "#6D028E" : "#6B7582"} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={RequestsScreen}
        options={{
          tabBarIcon: () => <Image source={require("./assets/icons/search.png")} />,
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={MessagesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="grid-outline"
              size={responsiveFontSize(24)}
              color={focused ? "#6D028E" : "#6B7582"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="person" size={responsiveFontSize(24)} color={focused ? "#6D028E" : "#6B7582"} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Octicons name="person" size={responsiveFontSize(24)} color={focused ? "#6D028E" : "#6B7582"} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="usertypescreen" component={UserTypeSelectionScreen} /> */}
      {/* Add other screens here as needed */}
      {/* <Stack.Screen name="Home" component={HomeLayoutScreen} /> */}
      {/* <Stack.Screen name="UserSelection" component={UserTypeSelectionScreen} /> */}
      {/* <Stack.Screen name="TalentSignUp" component={SignUpScreen} /> */}
      {/* <Stack.Screen name="Otpscreen" component={OTPVerificationScreen} /> */}
      {/* <Stack.Screen name="ClientSignUp" component={ClientSignUpScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="TalentStep" component={TalentStep} /> */}
      {/* <Stack.Screen name="JobStep2" component={JobStepScreen2} /> */}
      {/* <Stack.Screen name="JobStep" component={JobStepScreen} /> */}
      {/* <Stack.Screen name="Location" component={LocationSearchScreen} /> */}
      {/* <Stack.Screen name="Location" component={LocationSearchScreen} /> */}
      {/* <Stack.Screen name="plan" component={Plans} /> */}
      {/* <Stack.Screen name="signin" component={SiginScreen} /> */}
      <Stack.Screen name="booking" component={BookingDetailsModal} />
      <Stack.Screen name="notifications" component={NotificationScreen} />
      <Stack.Screen name="settings" component={SettingsScreen} />
      <Stack.Screen name="follower" component={FollowersScreen} />
      <Stack.Screen name="following" component={FollowingScreen} />
      <Stack.Screen name="contactus" component={ContactUsScreen} />
      <Stack.Screen name="upload" component={UploadContentScreen} />
      <Stack.Screen name="ManageContent" component={ManageContentScreen} />
      <Stack.Screen name="editvideo" component={EditVideoScreen} />
      <Stack.Screen name="editImage" component={EditImageScreen} />
      <Stack.Screen name="wishlist" component={WishListScreen} />
      <Stack.Screen name="qrscreen" component={QRScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    "Font-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Font-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "Font-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  const visibility = useVisibility(); // 👈 Tracks nav bar state

  const hideSystemBars = useCallback(async () => {
    if (Platform.OS === "android") {
      try {
        await setVisibilityAsync("hidden");
        RNStatusBar.setHidden(true, "fade");
        console.log("✅ Navigation and status bars hidden");
      } catch (error) {
        console.warn("❌ Error hiding system bars:", error);
      }
    } else if (Platform.OS === "ios") {
      RNStatusBar.setHidden(true, "fade");
    }
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      hideSystemBars();
    }

    const appStateListener = AppState.addEventListener("change", (nextAppState) => {
      if (nextAppState === "active" && fontsLoaded) {
        hideSystemBars();
      }
    });

    return () => {
      appStateListener.remove();
    };
  }, [fontsLoaded, hideSystemBars]);

  useEffect(() => {
    console.log("🔍 Navigation bar visibility:", visibility);
  }, [visibility]);

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <StatusBar hidden={true} style="auto" />
      <RootStack />
    </NavigationContainer>
  );
}
