//FIXME:Fix the Selection menu
import React from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

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
        height:72,
        width:390,
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
      headerTitle: {
        fontSize: 18,
        lineHeight:23,
        fontFamily: "PlusJakartaSans-Bold",
        color: "#6D028E", // Purple as in design
        fontWeight:'700',
        letterSpacing:0
    },
    reportContainer:{
        height:329,
        width:390,
        paddingBottom:16,
        paddingHorizontal:16,
        gap:12
    },
    textAreaWrapper:{
        width:390,
        height:168,
        maxWidth:480,
        paddingVertical:12,
        paddingHorizontal:16,
        gap:16
    },
    textArea:{
        width:358,
        height:144,
        minHeight:144,
        borderRadius:12,
        borderWidth:1,
        padding:15,
        borderColor:'#DEE0E3'
    },
    btnContainer:{
        flexDirection:'row',
        height:64,
        width:390,
        paddingVertical:12,
        paddingHorizontal:16,
        justifyContent:'space-between',
        
    },
    btn:{
        width:175,
        minWidth:84,
        maxWidth:480,
        height:40,
        paddingHorizontal:16,
        borderRadius:20,
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
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:14,
        letterSpacing:0,
        lineHeight:21,
        textAlign:'center',
        fontWeight:'700',
        color:'#121417'
    },
    submitBtnText:{
        fontFamily:'PlusJakartaSans-Bold',
        fontSize:14,
        letterSpacing:0,
        lineHeight:21,
        textAlign:'center',
        fontWeight:'700',
        color:'#FFFFFF'
    },
    blockBtnContainer:{
        width:390,
        height:200,
        paddingVertical:12,
        paddingHorizontal:16,
        // justifyContent:'center',
        // alignItems:'center',
    },
    blockBtn:{
        width:360,
        height:40,
        minWidth:84,
        maxWidth:480,
        backgroundColor:'#FE5120',
        paddingHorizontal:16,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    blockBtnText:{
        fontFamily:'PlusJakartaSans-Regular',
        fontSize:16,
        fontWeight:'400',
        letterSpacing:0,
        lineHeight:24,
        color:'#FFFFFF'
    },
})