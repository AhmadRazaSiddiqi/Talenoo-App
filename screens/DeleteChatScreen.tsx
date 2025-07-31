import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DeleteChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{width:50,height:5,left:170,top:556,borderRadius:100,backgroundColor:'#D9D9D9',position:'absolute'}}></View>
        <View style={styles.main}>
          <View style={styles.titleWrapper}>
            {" "}
            <Text style={styles.title}>Delete Chat?</Text>
          </View>
          <View style={styles.subTitleWrapper}>
            <Text style={styles.subTitle}>
              This action cannot be undone. This message{"  "}histoy will be permanently deleted.
            </Text>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={[styles.btn, styles.blockBtn]}>
              <Text style={styles.deteteText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.cancelBtn]}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </SafeAreaView>
  );
};
export default DeleteChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position:'relative',
    alignItems:'center'
  },
  main: {
    width: 390,
    height: 356,
    alignItems:'center',
  },
  titleWrapper: {
    width: 390,
    height: 60,
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    position:'absolute',
    top:576
  },
  title: {
    fontSize: 22,
    fontFamily: "Font-Bold",
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
    alignItems:'flex-start',
    position:'absolute',
    top:636
  },
  subTitle: {
    width: 358,
    height: 48,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Font-Regular",
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
    position:'absolute',
    top:700
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
    fontFamily: "Font-Bold",
    color: "#FFFFFF",
    fontWeight: "700",
    letterSpacing: 0,
  },
  cancelText: {
    fontSize: 16,
    fontFamily: "Font-Bold",
    color: "#121417",
    fontWeight: "700",
    letterSpacing: 0,
  },
});
