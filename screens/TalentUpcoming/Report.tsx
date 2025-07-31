//FIXME:Fix the Selection menu
import React from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { rf, rh, rw } from '../../../utils/scaling';

const reportType=["Harassment","Spam","Inappropriate Language","Abuse","Other"]
const ReportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Image source={require('../../assets/icons/back.png')}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report</Text>
        <View style={{ width: 24 }} /> 
      </View>
      <View style={styles.reportContainer}>
        {reportType.map((r)=><TouchableOpacity style={{flexDirection:'row',width:358,height:53,borderRadius:12,borderWidth:1,borderColor:"#6D028E",gap:16,padding:15,justifyContent:'space-between',alignItems:'center'}}>
            <Text>{r}</Text>
            <View style={{height:20,width:20,borderRadius:10,borderWidth:2,borderColor:'#6D028E',justifyContent:'center',alignItems:'center'}}><View style={{height:6,width:6,borderRadius:3.75,backgroundColor:'#6D028E'}}></View></View>
        </TouchableOpacity>)}
      </View>
      <View style={styles.textAreaWrapper}>
        <TextInput multiline style={styles.textArea}/>
      </View>
      <View style={styles.btnContainer}>
        <View style={[styles.btn,styles.cancelBtn]}>
            <Text style={styles.cancelBtnText}>Cancel</Text>
        </View>
        <View style={[styles.btn,styles.SubmitBtn]}>
            <Text style={styles.submitBtnText}>Submit Report</Text>
        </View>
      </View>
      <View style={styles.blockBtnContainer}>
        <View style={styles.blockBtn}><Text style={styles.blockBtnText}>Block</Text></View>
      </View>
    </SafeAreaView>
  )
}

export default ReportScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFFFF',
    
    },
    headerContainer: {
        flexDirection: "row",
        height: rh(72),
        width: rw(390),
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: rw(16),
        paddingVertical: rh(16),
      },
      headerTitle: {
        fontSize: rf(18),
        lineHeight: rh(23),
        fontFamily: "Font-Bold",
        color: "#6D028E", // Purple as in design
        fontWeight:'700',
        letterSpacing:0
    },
    reportContainer:{
        height: rh(329),
        width: rw(390),
        paddingBottom: rh(16),
        paddingHorizontal: rw(16),
        gap: rw(12)
    },
    textAreaWrapper:{
        width: rw(390),
        height: rh(168),
        maxWidth: rw(480),
        paddingVertical: rh(12),
        paddingHorizontal: rw(16),
        gap: rw(16)
    },
    textArea:{
        width: rw(358),
        height: rh(144),
        minHeight: rh(144),
        borderRadius: rw(12),
        borderWidth: 1,
        padding: rw(15),
        borderColor:'#DEE0E3'
    },
    btnContainer:{
        flexDirection:'row',
        height: rh(64),
        width: rw(390),
        paddingVertical: rh(12),
        paddingHorizontal: rw(16),
        justifyContent:'space-between',
        
    },
    btn:{
        width: rw(175),
        minWidth: rw(84),
        maxWidth: rw(480),
        height: rh(40),
        paddingHorizontal: rw(16),
        borderRadius: rw(20),
        justifyContent:'center',
        alignItems:'center'
    },
    cancelBtn:{
        backgroundColor:'#F2F2F5'
    },
    SubmitBtn:{
        backgroundColor:'#6D028E'
    },
    cancelBtnText:{
        fontFamily:'Font-Bold',
        fontSize: rf(14),
        letterSpacing:0,
        lineHeight: rh(21),
        textAlign:'center',
        fontWeight:'700',
        color:'#121417'
    },
    submitBtnText:{
        fontFamily:'Font-Bold',
        fontSize: rf(14),
        letterSpacing:0,
        lineHeight: rh(21),
        textAlign:'center',
        fontWeight:'700',
        color:'#FFFFFF'
    },
    blockBtnContainer:{
        width: rw(390),
        height: rh(200),
        paddingVertical: rh(12),
        paddingHorizontal: rw(16),
        // justifyContent:'center',
        // alignItems:'center',
    },
    blockBtn:{
        width: rw(360),
        height: rh(40),
        minWidth: rw(84),
        maxWidth: rw(480),
        backgroundColor:'#FE5120',
        paddingHorizontal: rw(16),
        justifyContent:'center',
        alignItems:'center',
        borderRadius: rw(20)
    },
    blockBtnText:{
        fontFamily:'Font-Regular',
        fontSize: rf(16),
        fontWeight:'400',
        letterSpacing:0,
        lineHeight: rh(24),
        color:'#FFFFFF'
    },
})