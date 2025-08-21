import { StyleSheet } from "react-native";

export const ProfileScreenstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    scrollView: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: 20,
      paddingBottom: 40,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 30,
    },
    backButton: {
      padding: 8,
    },
    headerTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#6D028E',
      fontFamily: 'Font-Medium',
    },
    placeholder: {
      width: 36,
    },
    titleSection: {
      alignItems: 'center',
      marginBottom: 40,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#1A1A1A',
      textAlign: 'center',
      marginBottom: 12,
      fontFamily: 'Font-Medium',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      lineHeight: 24,
      paddingHorizontal: 20,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 40,
      position: 'relative',
    },
    profileImage: {
      width: 120,
      height: 120,
      borderRadius: 60,
      resizeMode: 'cover',
    },
    editButton: {
      position: 'absolute',
      bottom: 0,
      right: '30%',
      backgroundColor: '#FF6B35',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 15,
      gap: 4,
    },
    editButtonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '500',
    },
    formContainer: {
      gap: 24,
    },
    inputContainer: {
      gap: 8,
    },
    label: {
      fontSize: 16,
      color: '#333',
      fontWeight: '500',
    },
    required: {
      color: '#FF6B35',
    },
    textInput: {
      backgroundColor: '#F5F7FA',
      fontSize: 16,
    },
    outlineStyle: {
      borderColor: 'transparent',
      borderRadius: 8,
    },
    inputContent: {
      paddingHorizontal: 16,
      color:'black'
    },
    prefixText: {
      color: '#6D028E',
      fontSize: 16,
      fontWeight: '500',
    },
    phoneContainer: {
      backgroundColor: '#F5F7FA',
      borderRadius: 8,
      overflow: 'hidden',
    },
    phoneInputContainer: {
      backgroundColor: 'transparent',
      width: '100%',
    },
    phoneTextContainer: {
      backgroundColor: 'transparent',
      paddingVertical: 0,
    },
    phoneTextInput: {
      fontSize: 16,
      color: '#333',
      paddingVertical: 12,
    },
    countryPicker: {
      backgroundColor: 'transparent',
      paddingLeft: 16,
    },
    flagButton: {
      backgroundColor: 'transparent',
    },
    dropdownContainer: {
      backgroundColor: '#F5F7FA',
      borderRadius: 8,
      paddingHorizontal: 16,
      paddingVertical: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdownText: {
      fontSize: 16,
      color: '#6D028E',
      fontWeight: '500',
    },
    menuContent: {
      backgroundColor: 'white',
      borderRadius: 8,
      maxHeight: 200,
    },
    menuScrollView: {
      maxHeight: 200,
    },
    menuItem: {
      color: '#333',
      fontSize: 16,
    },
    selectedMenuItem: {
      color: '#6D028E',
      fontSize: 16,
      fontWeight: '500',
    },
    languagesContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8,
      marginBottom: 8,
    },
    languageTag: {
      backgroundColor: '#F0E6FF',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 6,
    },
    languageText: {
      color: '#6D028E',
      fontSize: 14,
      fontWeight: '500',
    },
    addLanguageContainer: {
      marginTop: 8,
    },
    languageInput: {
      backgroundColor: '#F5F7FA',
      fontSize: 16,
    },
    completeButton: {
      backgroundColor: '#6D028E',
      borderRadius: 12,
      paddingVertical: 16,
      alignItems: 'center',
      marginTop: 40,
    },
    completeButtonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  })