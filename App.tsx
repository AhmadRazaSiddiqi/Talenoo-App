import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import "./global.css";
import OnboardingScreen from "./screens/TalentSignUp/Onboarding";
const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
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
    </Stack.Navigator>
  );
}
export default function App() {
  const [fontsLoaded] = useFonts({
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
