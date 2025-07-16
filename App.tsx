import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import "./global.css";
import QRScreen from "./screens/QRCode";
import HomeScreen from "./screens/Tabs/HomeScreen";
import MessagesScreen from "./screens/Tabs/MessagesScreen";
import ProfileScreen from "./screens/Tabs/ProfileScreen";
import RequestsScreen from "./screens/Tabs/RequestsScreen";
import { responsiveHeight, responsiveWidth } from "./utils/responsive";
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
    tabBarActiveTintColor: '#6D028E',
    tabBarInactiveTintColor: '#6B7582',
    tabBarLabelStyle: {
      fontFamily: 'PlusJakartaSans-Regular',
    },
  }}
>
  <Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <Octicons
          name="home"
          size={24}
          color={focused ? '#6D028E' : '#6B7582'} 
        />
      ),
    }}
  />
  <Tab.Screen
    name="Requests"
    component={RequestsScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <MaterialCommunityIcons
          name="inbox-outline"
          size={24}
          color={focused ? '#6D028E' : '#6B7582'}
        />
      ),
    }}
  />
  <Tab.Screen
    name="Messages"
    component={MessagesScreen}
    options={{
      tabBarIcon: ({ focused, color, size }) => (
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={24}
          color={focused ? '#6D028E' : '#6B7582'}
        />
      ),
    }}
  />
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    
    options={{
      tabBarIcon: ({ focused, color, size }) => (
      
        <Octicons
          name="person"
          size={24}
          color={focused ? '#6D028E' : '#6B7582'}
          
        />
      ),
    }}
  />
</Tab.Navigator>

  );
}

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false ,presentation:'card'}}>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
      {/* <Stack.Screen name="test" component={CurveViewScreen} /> */}
      {/* Add other screens here as needed */}
      {/* Example: <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="UserType" component={UserTypeSelectionScreen} /> */}
      {/* <Stack.Screen name="TalentSignUp" component={Sign_Up} /> */}
      {/* <Stack.Screen name="Otpscreen" component={OTPVerificationScreen} /> */}
      {/* <Stack.Screen name="ClientSignUp" component={ClientSignUpScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="TalentStep" component={TalentStep} /> */}
      {/* <Stack.Screen name="JobStep" component={JobStepScreen} /> */}
      {/* <Stack.Screen name="JobStep2" component={JobStepScreen2} /> */}
      {/* <Stack.Screen name="Location" component={FindLocation} /> */}
      {/* <Stack.Screen name="Location" component={LocationSearchScreen} /> */}
      {/* <Stack.Screen name="plan" component={Plans} /> */}
      {/* <Stack.Screen name="plan" component={SiginScreen} /> */}
      {/* <Stack.Screen name="booking" component={BookingDetailsModal} /> */}
      {/* <Stack.Screen name="notifications" component={NotificationScreen} /> */}
      {/* <Stack.Screen name="settings" component={SettingsScreen} /> */}
      {/* <Stack.Screen name="follower" component={FollowersScreen} /> */}
      {/* <Stack.Screen name="following" component={FollowingScreen} /> */}
      {/* <Stack.Screen name="contactus" component={ContactUsScreen} /> */}
      {/* <Stack.Screen name="upload" component={UploadContentScreen} /> */}
      {/* <Stack.Screen name="ManageContent" component={ManageContentScreen} /> */}
      {/* <Stack.Screen name="editvideo" component={EditVideoScreen} /> */}
      {/* <Stack.Screen name="editImage" component={EditImageScreen} /> */}
      {/* <Stack.Screen name="wishlist" component={WishListScreen} /> */}
      <Stack.Screen name="qrscreen" component={QRScreen} />


      {/* <Stack.Screen name="MainTabs" component={MainTabs} /> */}
    </Stack.Navigator>
  );
}
export default function App() {
  const [fontsLoaded] = useFonts({
    "PlusJakartaSans-Medium": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "PlusJakartaSans-Regular": require("./assets/fonts/PlusJakartaSans-Regular.ttf"),
    "PlusJakartaSans-Bold": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
    // add other fonts here if needed
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or a custom loading component if you want
  }

  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
