import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import Onboarding from "./screens/TalentSignUp/Onboarding"
import "./global.css"
import UserTypeSelectionScreen from "./screens/TalentSignUp/UserType"
import Sign_Up from "./screens/TalentSignUp/Sign_Up"
import OTPVerificationScreen from "./screens/TalentSignUp/EnterCode"
import ProfileScreen from "./screens/TalentSignUp/Profile"
import TalentStep from "./screens/TalentSignUp/TalentStep"
import JobStepScreen from "./screens/TalentSignUp/JopStep"
const Stack = createNativeStackNavigator()

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      {/* Add other screens here as needed */}
      {/* Example: <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="UserType" component={UserTypeSelectionScreen} /> */}
      {/* <Stack.Screen name="TalentSignUp" component={Sign_Up} /> */}
      {/* <Stack.Screen name="Otpscreen" component={OTPVerificationScreen} /> */}
      {/* <Stack.Screen name="ClientSignUp" component={ClientSignUpScreen} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
      {/* <Stack.Screen name="TalentStep" component={TalentStep} /> */}
      <Stack.Screen name="JobStep" component={JobStepScreen} />
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
