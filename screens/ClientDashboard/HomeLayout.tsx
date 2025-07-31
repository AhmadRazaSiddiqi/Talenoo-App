import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const arr=[1,2,3,4]

const HomeLayoutScreen = () => {
    const renderItem = ({ item }) => (
        <View style={{height:191,width:344,alignItems:'center',justifyContent:'center'}}>
             {/* Profile Section */}
      <View style={[styles.profileCard]}>
      <View style={{height:83,width:312,justifyContent:'center'}}>
           <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={styles.profileName}>Ava Carter</Text>
               <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row'}}>{[1,2,3,4,5].map(()=><Image source={require("../../assets/icons/star.png")} />)}</View>
                    <Text style={styles.ratingText}>5.0</Text>
               </View>
           </View>
          
              <Text style={styles.profileInfo}>Los Angeles | Musician</Text>
      </View>
      {/* Rating Section */}
          <View style={styles.actionRow}>
            <View style={styles.iconGroup}>
              <Ionicons name="heart" size={24} color="red" />
              <Text style={{color:'#6B7582',fontWeight:'700',fontSize:13,fontFamily:"Font-Bold"}}>98</Text>
            </View>
            <View style={styles.iconGroup}>
              <Image
                source={require("../../assets/icons/share (1).png")}
                style={{ width: 24, height: 24 }}
              />
              <Text style={{color:'#6B7582',fontWeight:'700',fontSize:13,fontFamily:"Font-Bold"}}>32</Text>
            </View>
            <View style={styles.iconGroup}>
              <Ionicons name="bookmark" size={24} color="#FE5120" />
              <Text style={{color:'#6B7582',fontWeight:'700',fontSize:13,fontFamily:"Font-Bold"}}>15</Text>
            </View>
          </View>      
          <View style={styles.bookNowWrapper}>
            <View style={styles.bookNowButton}>
              <Text style={styles.bookNowText}>Book Now</Text>
              <Image
                source={require("../../assets/icons/rightArrowWhite.png")}
                style={styles.bookNowIcon}
              />
            </View>
          </View>
      </View>

        </View>
      );
      
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        style={styles.background}
      />
      <View style={styles.con1} />
      <View style={styles.con2} />

      {/* Top Feed/Clips icons */}
      <View style={styles.topIconRow}>
        <Image source={require("../../assets/icons/feed.png")} />
        <Image source={require("../../assets/icons/clips.png")} />
      </View>

      {/* White Card */}
      <View style={styles.cardContainer}>
        <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={( index) =>  index.toString()}
        showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeLayoutScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    position: "relative",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 311,
  },
  con1: {
    position: "absolute",
    backgroundColor: "white",
    height: 407,
    width: 305,
    left: 35,
    top: 67,
    borderRadius: 15,
    zIndex: 0,
    opacity: 0.3,
  },
  con2: {
    position: "absolute",
    backgroundColor: "white",
    height: 407,
    width: 325,
    left: 25,
    top: 73,
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 0,
  },
  topIconRow: {
    flexDirection: "row",
    position: "absolute",
    top: 13,
    left: 143,
    gap: 10,
  },
  cardContainer: {
    backgroundColor: "#FFFFFF",
    width: 344,
    height: 679.94,
    top: 80,
    left: 16,
    borderRadius: 12,
    position: "absolute",
  },
  cardContent: {
    height: 661,
    width: 312,
    overflow: "hidden",
    left: 16,
    top: 15,
    borderRadius: 12,
    position: "relative",
  },
  mainImage: {
    width: "100%",
    height: "100%",
    transform: [{ scale: 1 }],
  },
  flagIcon: {
    height: 30,
    width: 30,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    position: "absolute",
    top: 11,
    left: 271,
    justifyContent: "center",
    alignItems: "center",
  },

  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 35,
    width: 312,
    alignItems:'center'
  },
  iconGroup: {
    height: 40,
    width: 70,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  bookNowWrapper: {
    height: 59,
    width: 312,
    alignItems: "center",
    justifyContent:'center'
  },
  bookNowButton: {
    width: 289,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#6D028E",
    position: "relative",
  },
  bookNowText: {
    color: "#FFFFFF",
    fontSize: 14,
    top: 9.5,
    left: 99,
  },
  bookNowIcon: {
    position: "absolute",
    top: 11,
    left: 173,
  },
  playButton: {
    position: "absolute",
    top: 308,
    left: 156,
  },
  profileCard: {
    width: 312,
    height: 177,
    minWidth: 288,
    paddingTop:15,
    paddingBottom:16,
    // paddingHorizontal:16
    
  },
  profileName: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Font-Bold",
    lineHeight: 23,
    letterSpacing: 0,
    color: "#121417",

  },
  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 24,
    paddingTop: 5,
  },
  profileInfo: {
    color: "#667582",
    lineHeight: 24,
    fontSize: 16,
    fontWeight: "400",
    fontFamily: "Font-Regular",
  },
  profileViews: {
    color: "#24364C",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
  },
  profileStats: {
    width: 270,
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
    color: "#667582",
  },
  ratingContainer: {
    position:'absolute',
    height: 16,
    width: 46,
    left:211,
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    color: "#24364C",
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0,
    fontFamily: "Font-Regular",
  },
});
