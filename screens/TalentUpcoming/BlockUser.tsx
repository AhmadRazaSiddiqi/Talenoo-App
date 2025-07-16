import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BlockUserScreen = () => {
  return (
    <SafeAreaView>
      {/* Header */}
      <View>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.crossButton}>
            <Image
              source={require("../../assets/icons/cross.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
          <View style={styles.titleWrapper}>
            {" "}
            <Text style={styles.title}>Block this User?</Text>
          </View>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>
              They won't be able to see your  profile or posts,{"  "}and you won't be
              able to see the theirs.
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn, styles.blockBtn]}>
              <Text style={styles.deteteText}>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.cancelBtn]}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default BlockUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  headerContainer: {
    flexDirection: "row",
    height: 72,
    width: 390,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  crossButton: {
    height: 48,
    width: 48,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0,
    fontFamily: "PlusJakartaSans-Bold",
    color: "#121417",
    fontWeight: "700",
    textAlign: "center",
    paddingRight: 48,
  },
  headerTextContainer: {
    height: 23,
    width: 310,
    justifyContent: "center",
  },
  main: {
    width: 390,
    height: 328,
  },
  titleWrapper: {
    width: 390,
    height: 60,
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: "PlusJakartaSans-Bold",
    textAlign: "center",
    lineHeight: 28,
    fontWeight: "700",
    letterSpacing: 0,
  },
  subTitleWrapper: {
    height: 64,
    width: 390,
    paddingTop: 4,
    paddingBottom: 12,
    paddingHorizontal: 16,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  subTitle: {
    width: 358,
    height: 48,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: 24,
    letterSpacing: 0,
    textAlign:'center'
    
  },
  btnContainer: {
    flexDirection: "column",
    width: 390,
    height: 132,
    maxWidth: 480,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  btn: {
    width: 358,
    minWidth: 84,
    maxWidth: 480,
    height: 48,
    borderRadius: 24,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  blockBtn: {
    backgroundColor: "#FE5120",
  },
  cancelBtn: {
    backgroundColor: "#F2F2F5",
  },
  deteteText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 0,
  },
  cancelText: {
    fontSize: 16,
    fontFamily: "PlusJakartaSans-Bold",
    color: "#121417",
    fontWeight: "700",
    letterSpacing: 0,
  },
});
