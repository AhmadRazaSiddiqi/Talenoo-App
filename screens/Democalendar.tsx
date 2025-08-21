import { Image } from "expo-image";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { height, width } = Dimensions.get("screen");
const Democalendar = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: height * 0.5, width, backgroundColor: "#FFFFFF" }}>
        <Image
          source={require("../assets/Mask.svg")}
          style={{ width: "100%", height: "100%" }}
          contentPosition={"center"}
          contentFit="contain"
        />
      </View>
      <View style={{ width, flex: 1, backgroundColor: "red" }}>
        <View>
          <Text>Finding</Text>
        </View>
        <View>
          <Text>Finding</Text>
        </View>
      </View>

      <View>
        <View>
          <Text>Button</Text>
        </View>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};

export default Democalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
