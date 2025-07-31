import ProfileInput from '@/components/profile/ProfileInput'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Keyboard, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const ProfileScreen = () => {
  return (
      <SafeAreaView style={{flex:1,position:'relative'}}>
       
        <View style={{position:'absolute',top:verticalScale(15),left:moderateScale(15),width:moderateScale(40),height:moderateScale(40), borderRadius:20,backgroundColor:'#F5F7FA',justifyContent:'center',alignItems:'center'}}>
          <Pressable>
          <AntDesign name="arrowleft" size={scale(20)} color="#6D028E" />
          </Pressable>
        </View>
        <Text style={{position:'absolute',top:verticalScale(29.77),left:moderateScale(146),fontSize:scale(20),lineHeight:verticalScale(28),fontFamily:'Font-Bold',textAlignVertical:'top',color:'#6D028E'}}>Profile</Text>
        <View style={{width:moderateScale(319),height:verticalScale(583),flexDirection:'column',gap:verticalScale(15),top:verticalScale(90),left:moderateScale(30)}}>
          <View>
            <Text style={{fontFamily:'Font-Bold',fontSize:scale(20),color:'#24364C',textAlign:'center',lineHeight:verticalScale(28)}}>Complete your profile</Text>
            
            <Text style={{fontFamily:'Font-Medium',color:'#5F729D',fontSize:scale(14),textAlign:'center',lineHeight:verticalScale(20)}}>Rest assured,your personal data is visible only {'\n'} to you.No one else will have access to it.</Text>
          </View>
          <ProfileInput labelText='Full Name'  Inputtype='name'/>
          <ProfileInput labelText='Username' Inputtype='email'/>
          <ProfileInput labelText='Phone Number' Inputtype='phone'/>
          
          <View style={{flexDirection:'row',height:verticalScale(48),width:'100%',gap:moderateScale(5)}}>
            <View style={{width:moderateScale(75),height:verticalScale(48),justifyContent:'center',alignItems:'center',borderColor:'#6D028E',borderWidth:moderateScale(2),flexDirection:'row',gap:moderateScale(5),borderRadius:moderateScale(6)}}>
              <View style={{height:moderateScale(18),width:moderateScale(18),borderRadius:moderateScale(6),backgroundColor:'black'}}></View>
              <Text style={{fontFamily:'Font-Medium',fontSize:scale(14),lineHeight:verticalScale(20),color:'#24364C'}}>Male</Text>
            </View>
            <View style={{width:moderateScale(90),height:verticalScale(48),justifyContent:'center',alignItems:'center',borderColor:'#6D028E',borderWidth:moderateScale(2),flexDirection:'row',gap:moderateScale(5),borderRadius:moderateScale(6)}}>
              <View style={{height:moderateScale(18),width:moderateScale(18),borderRadius:moderateScale(6),backgroundColor:'black'}}></View>
              <Text style={{fontFamily:'Font-Medium',fontSize:scale(14),lineHeight:verticalScale(20),color:'#24364C'}}>Female</Text>
            </View>
            <View style={{width:moderateScale(144),height:verticalScale(48),justifyContent:'center',alignItems:'center',borderColor:'#6D028E',borderWidth:moderateScale(2),flexDirection:'row',gap:moderateScale(5),borderRadius:moderateScale(6)}}>
              <View style={{height:moderateScale(18),width:moderateScale(18),borderRadius:moderateScale(6),backgroundColor:'black'}}></View>
              <Text style={{fontFamily:'Font-Medium',fontSize:scale(14),lineHeight:verticalScale(20),color:'#24364C'}}>Prefer not to say</Text>
            </View>
          </View>
        </View>

      </SafeAreaView>

  )
}

export default ProfileScreen

const styles = StyleSheet.create({

})