import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from "@/utils/responsive";
import { StyleSheet } from "react-native";
export const SeacchScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      padding: rw(20),
    },
    title: {
      fontSize: rf(24),
      fontFamily:'Font-Bold',
      fontWeight: 'bold',
      color: '#6B46C1',
      marginBottom: rh(20),
      textAlign:'center'
    },
    filtersContainer: {
      flex: 1,
    },
    label: {
      fontSize: rf(16),
      fontFamily:'Font-Bold',
      fontWeight: 'bold',
      color: '#1F2937',
      marginBottom: rh(10),
    },
    input: {
      height: rh(40),
      borderWidth: 2,
      borderColor: '#DEE0E3',
      borderRadius: rw(8),
      paddingHorizontal: rw(10),
      marginBottom: rh(20),
      paddingVertical:25,
      color: '#6B7280',
    },
    slider: {
      marginBottom: rh(10),
    },
    priceText: {
      textAlign: 'center',
      color: '#6B7280',
      marginBottom: rh(20),
    },
    button: {
      backgroundColor: '#6D028E',
      paddingVertical: rh(15),
      borderRadius: rw(20),
      alignItems: 'center',
      width:100,
      marginLeft:'75%'
    },
    buttonText: {
      fontFamily:'Font-Family',
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    bottomNav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderTopWidth: 1,
      borderTopColor: '#E5E7EB',
      paddingVertical: rh(10),
    },
    navItem: {
      alignItems: 'center',
    },
    navText: {
      color: '#6B7280',
      fontFamily:'Font-Regular',
      fontSize: rf(12),
    },
  });
  