import { Feather } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const TalentReview = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Following</Text>
        <View style={{ width: 24 }} /> 
      </View>
    </SafeAreaView>
  )
}

export default TalentReview

const styles = StyleSheet.create({
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
})