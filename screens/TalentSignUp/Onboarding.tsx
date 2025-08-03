import { responsiveFontSize, responsiveHeight, responsiveWidth } from "@/utils/responsive";
import React from "react";
import {
  Image,
  Pressable,
  Text,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const OnboardingScreen = ({navigation}) => {
  return (
    // <SafeAreaView
    //   style={{ flex: 1, backgroundColor: "#FFFFFF", position: "relative" }}
    // >
    //   <View style={styles.parentContainer}>
    //     <View style={styles.ellipse1} />
    //     <View style={styles.ellipse2} />
    //     <View style={styles.ellipse3} />

    //     <View style={styles.childContent}>
    //       <Image
    //         source={require("../../assets/images/image.png")}
    //         resizeMode="contain"
    //         style={styles.img}
    //       />
    //     </View>
    //   </View>
    //   <Image
    //     source={require("../../assets/images/career.png")}
    //     resizeMode="contain"
    //     style={{
    //       left: responsiveWidth(10),
    //       top: responsiveHeight(43.33),
    //       position: "absolute",
    //     }}
    //   />
    //   <Text style={styles.heading}>
    //     Finding Your Perfect {"\n"} Career Path Starts Here!
    //   </Text>
    //   <Text style={styles.subHeading}>
    //     Confused looking for updated talents {"\n"} and let’s see here lots of
    //     talent listings
    //   </Text>
    //   <TouchableOpacity style={styles.getStarted}>
    //     <Text style={styles.getStartedText}>let’s get Started</Text>
    //   </TouchableOpacity>
    //   <View style={styles.SignInContainer}>
    //     <Text
    //       style={{
    //         color: "#6D028E",
    //         fontSize: responsiveFontSize(14),
    //         fontFamily: "Font-Regular",
    //         fontWeight: 389,
    //         textAlign: "center",
    //       }}
    //     >
    //       Already have an account?
    //     </Text>
    //     <Text
    //       style={{
    //         textDecorationLine: "underline",
    //         color: "#FE5120",
    //         fontSize: responsiveFontSize(14),
    //         fontFamily: "Font-Regular",
    //         fontWeight: 389,
    //         textAlign: "center",
    //       }}
    //     >
    //       {" "}
    //       Sign in
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={{flex:1,backgroundColor:'#FFF'}}>
      <View style={[{height:responsiveWidth (821),width:responsiveWidth (821),top:-responsiveHeight(389),left:-responsiveWidth(223),borderRadius:responsiveWidth(821/2),overflow:'hidden',shadowColor:'#0D37724D',shadowOpacity:0.1}]}>
      <View style={{backgroundColor:'#FFF',height:responsiveWidth(370),width:responsiveWidth(370),borderRadius:responsiveWidth(370/2),top:responsiveHeight(389+95),left:responsiveWidth(223+3),position:'absolute',elevation:60,shadowOpacity:0.3,shadowColor:'#0D37724D',opacity:0.1}}></View>
      <View style={[{backgroundColor:'#FFF',height:responsiveWidth(318),width:responsiveWidth(318),borderRadius:responsiveWidth(318/2),top:responsiveHeight(389+121),left:responsiveWidth(223+29),position:'absolute',elevation:60,shadowOpacity:0.3,shadowColor:'#0D37724D',opacity:0.3}]}></View>
      <View style={{backgroundColor:'#FFF',height:responsiveWidth(264),width:responsiveWidth(264),top:responsiveHeight(389+148),left:223+56,borderRadius:responsiveWidth(264/2),position:'absolute',elevation:60,shadowOpacity:0.3,shadowColor:'#0D37724D',opacity:0.5}}></View>
     <View style={{width:responsiveWidth(298),height:responsiveHeight(420),backgroundColor:'#CCCCCC',top:responsiveHeight(389+26),left:responsiveWidth(223+41),position:'absolute'}}></View>
     <Image source={require('../../assets/images/image.png')} style={{height:responsiveHeight(396),width:responsiveWidth(366),left:responsiveWidth(223+3.65),top:responsiveHeight(389+46),position:'absolute',resizeMode:'contain'}}/>
     <Image source={require('../../assets/images/singer.png')} style={{top:responsiveHeight(389+46.33),left:responsiveWidth(223+23),position:'absolute'}}/>
     <Image source={require('../../assets/images/barber.png')} style={{top:responsiveHeight(389+152.37),left:responsiveWidth(223+281),position:'absolute'}}/>
     <Image source={require('../../assets/images/chef.png')} style={{top:responsiveHeight(389+223.41),left:responsiveWidth(223+41),position:'absolute'}}/>
     <Image source={require('../../assets/images/guitarist.png')} style={{top:responsiveHeight(389+322.25),left:responsiveWidth(223+251),position:'absolute'}}/>
     <Image source={require('../../assets/images/carpenter.png')} style={{top:responsiveHeight(389+340.78),left:responsiveWidth(223+23),position:'absolute'}}/>
      </View>
      <Text style={{position:'absolute',top:responsiveHeight(531),left:responsiveWidth(26),fontSize:24,fontFamily:'Font-Bold',fontWeight:'700',width:323,textAlign:'center'}} numberOfLines={2}>Finding Your Perfect 
     {'\n'} Career Path Starts Here!</Text>
      <Text style={{top:responsiveHeight (620),fontSize:responsiveFontSize(16),fontFamily:'Font-Medium',position:'absolute',alignSelf:'center',lineHeight:responsiveHeight(24)}} numberOfLines={2}>Confused looking for updated talents{'\n'} and let’s see here lots of talent listings</Text>
   <Pressable onPress={()=>navigation.replace('usertypescreen')} style={{height:responsiveHeight(48),width:responsiveWidth(315),position:'absolute',top:responsiveHeight(748),left:responsiveWidth(30),borderRadius:responsiveWidth(8),backgroundColor:'#6D028E',justifyContent:'center',alignItems:'center'}}>
    <Text style={{color:'#FFF',fontFamily:'Font-Bold',fontSize:15}}>Lets Get Started</Text>
   </Pressable>
   <View style={{position:'absolute',top:responsiveHeight(800),left:responsiveWidth(74),flexDirection:'row',justifyContent:'center',alignItems:'center'}}><Text style={{fontFamily:'Font-Medium',fontSize:14,fontWeight:'500'}}>Already have an account?</Text> <Text style={{fontFamily:'Font-Medium',fontSize:14,fontWeight:'500',textDecorationLine:'underline'}}>Sign In</Text></View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
