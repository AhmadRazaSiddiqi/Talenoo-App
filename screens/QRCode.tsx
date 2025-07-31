import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const QRScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.crossButton}>
            <Image
              source={require("../assets/icons/cross.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            {" "}
            <Text style={styles.headerText}>MY QR code</Text>
          </View>
        </View>

      {/* Profile Image */}
<View style={styles.ProfileWrapper}>
          <View style={styles.profileSection}>
           <View style={{height:196,width:131,alignItems:'center'}}>
                <Image
                  source={require('../assets/images/AVAB.png')} // <- Replace with your image
                  style={styles.profileImage}
                />
                <View>
                    <Text style={styles.name}>Ava Bennett</Text>
                    <Text style={styles.username}>@ava.bennett</Text>
                </View>
           </View>
          </View>
</View>

      {/* QR Code */}
      <View style={styles.qrWrapper}>
        <View style={styles.qrInner}>
            <Image
              source={require('../assets/images/Code.png')} // <- Replace with your image
              style={styles.qrImage}
              resizeMode='cover'
            />
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default QRScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: "row",
    height: 72,
    width: 390,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    alignItems: "center",
  },
  crossButton: {
    height: 48,
    width: 48,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
    fontFamily: "Font-Regular",
  },
  headerText: {
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 0,
    fontFamily: "Font-Bold",
    color: "#121417",
    fontWeight: "700",
  textAlign:'center',
  paddingRight:48
  },
  headerTextContainer: {
    height: 23,
    width: 310,
    justifyContent: "center",
  
  },
  WishlistContainer: {
    display: "flex",
    flexDirection: "row",
    height: 72,
    minHeight: 72,
    width: 390,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  ProfileWrapper:{
    height:228,
    width:390,
    padding:16,
  },
  profileSection: {
    height:190,
    width:358,
    // gap:16,
    justifyContent:'center',
    alignItems:'center'
  },
  profileImage: {
    width: 128,
    height: 128,
    borderRadius: 64,

  },
  name: {
    fontFamily: 'Font-Bold',
    fontSize: 22,
    fontWeight:'700',
    lineHeight:28,
    letterSpacing:0,
    color: '#121417',
  },
  username: {
    fontFamily: 'Font-Regular',
    fontSize: 14,
    color: '#667582',
    textAlign:'center'
  },
  qrWrapper: {
    backgroundColor: '#FFFFFF',
    height:347,
    width:390,
    padding:16,
  },
  qrInner:{
    height:315,
    width:358,
    borderRadius:12,
    color:'#FFFFFF',
    overflow:'hidden',
  },
  qrImage: {
height:'100%',
width:'100%'
  },
  buttonContainer: {
    width:390,
    height:64,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical:12,
    backgroundColor:'green'
  },
  shareButton: {
    width:176,
    height:40,
    backgroundColor: '#F2F2F5',
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth:80,
    maxWidth:480,
    alignItems: 'center',
    marginRight: 10,
    justifyContent:'center'
  },
  saveButton: {
    width:176,
    height:40,
    backgroundColor: '#6D028E',
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth:80,
    maxWidth:480,
    alignItems: 'center',
    marginRight: 10,
    justifyContent:'center'
  },
  shareText: {
    fontFamily: 'Font-Bold',
    fontSize: 14,
    color: '#121417',
  },
  saveText: {
    fontFamily: 'Font-Bold',
    fontSize: 14,
    color: '#fff',
  },
});
