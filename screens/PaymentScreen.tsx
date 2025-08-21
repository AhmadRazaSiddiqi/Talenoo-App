import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PaymentScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Image source={require('../assets/icons/cross.png')}/>
        </View>
        <View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "Font-Bold",
            }}
          >
            Payment Screen
          </Text>
        </View>
        <View />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  
});
