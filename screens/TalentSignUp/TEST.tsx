import { responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TEST = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainElipse}>
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        locations={[0.4823, 1]}
        style={styles.gradientBackground}
      />
        <View style={styles.Elipse1}></View>
        <View style={styles.Elipse2}></View>
        <View style={styles.Elipse3}></View>
      </View>
    </SafeAreaView>
  )
}

export default TEST

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF',
        position:'relative'
    },
    mainElipse:{
        
        height:rw(747),
        width:rw(747),
        borderRadius:rw(747/2),
        top:rh(-389),
        left:rw(-186),
        backgroundColor:'red'
    },
    Elipse1:{
        backgroundColor:'green'
    },
    Elipse2:{
        backgroundColor:'yellow'
    },
    Elipse3:{
        backgroundColor:'blue'
    },
    gradientBackground: {
        position: "absolute",
        left: 0,
        // right: 0,
       top:rh(389),
        width: "100%",
        height: rh(311),
      },
})