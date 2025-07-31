import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { rf, rh, rw } from '../../../utils/scaling';

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
})