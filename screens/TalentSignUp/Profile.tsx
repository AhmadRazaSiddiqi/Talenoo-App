import DropdownComponent from '@/components/profile/DropDown'
import ApiService from '@/services/ApiService'
import { FontAwesome6 } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Image,
  ScrollView,
  TouchableOpacity,
  View
} from 'react-native'
import {
  Text,
  TextInput
} from 'react-native-paper'
import PhoneInput from "react-native-phone-number-input"
import { SafeAreaView } from 'react-native-safe-area-context'
import { ProfileScreenstyles as styles } from '../../assets/styles/ProfileScreen.styles'
import ProfileRadioButtons from '../../components/profile/ProfileRadioButtons'

const ProfileScreen = () => {
  const [profileImage, setProfileImage] = useState(require('../../assets/images/Lucas.png'))
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('khalidkhan')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [age, setAge] = useState('45')
  const [country, setCountry] = useState (194)
  const [city, setCity] = useState('')
  const [languages, setLanguages] = useState(['English', 'Arabic'])
  const [newLanguage, setNewLanguage] = useState('')

  const [countries, setCountries] = useState<any[]>([])
  const [cities, setCities] = useState<any[]>([])
  const [gender, setGender] = useState<string>();
  const[selectedCountry,setselectedCountry]=useState()

  // Menu states

  const phoneInputRef = useRef(null)

  // Age options
  const ageOptions = Array.from({ length: 80 }, (_, i) => (i + 18).toString())

  // Fetch Countries
  const fetchCountries=async ()=>{
    try {
      const data = await ApiService.get('country');
      if (data?.data?.countries) {
        setCountries(data.data.countries.map((c: any) => ({ label: c.name, value: c.id }))); 
       // Assuming city objects have a 'name' property
      } else {
        setCountries([]);
      }
    } catch (error) {
      console.error("Failed to fetch cities:", error);
      setCities([])
    }
  }
  useEffect(() => {
    fetchCountries()

  }, [])

  // Fetch Cities when country changes
  const fetchCities = async () => {
    try {
      const data = await ApiService.get('city', { "country_id": country });
      if (data?.data?.cities) {
        setCities(data.data.cities.map((c: any) => ({ label: c.name, value: c.name }))); // Assuming city objects have a 'name' property
      } else {
        setCities([]);
      }
    } catch (error) {
      console.error("Failed to fetch cities:", error);
      setCities([])
    }
  };
  useEffect(() => {
    fetchCities()
    console.log(countries.find(e=>e.value===country))
  }, [country])
  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('Permission Required', 'Sorry, we need camera roll permissions to change your profile picture!')
        return
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
        base64: false,
      })

      if (!result.canceled && result.assets && result.assets[0]) {
        setTimeout(() => {
          setProfileImage({ uri: result.assets[0].uri })
        }, 100)
      }
    } catch (error) {
      console.error('Error picking image:', error)
      Alert.alert('Error', 'Failed to pick image. Please try again.')
    }
  }

  const removeLanguage = (langToRemove: string) => {
    setLanguages(languages.filter(lang => lang !== langToRemove))
  }

  const addLanguage = () => {
    if (newLanguage.trim() && !languages.includes(newLanguage.trim())) {
      setLanguages([...languages, newLanguage.trim()])
      setNewLanguage('')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
        >
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity style={styles.backButton}>
              <FontAwesome6 name="arrow-left" size={20} color="#6D028E" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Profile</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Complete Your Profile</Text>
            <Text style={styles.subtitle}>
              Rest assured, your personal data is visible only to you. No one else will have access to it.
            </Text>
          </View>

          {/* Profile Image */}
          <View style={styles.imageContainer}>
            <Image
              source={profileImage}
              style={styles.profileImage}
              onError={() => setProfileImage(require('../../assets/images/Lucas.png'))}
            />
            <TouchableOpacity style={styles.editButton} onPress={pickImage}>
              <FontAwesome6 name="pen-to-square" size={14} color="white" />
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>

          {/* Form Fields */}
          <View style={styles.formContainer}>
            {/* Full Name */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Full Name</Text>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                mode="outlined"
                style={styles.textInput}
                outlineColor="transparent"
                activeOutlineColor="transparent"
                outlineStyle={styles.outlineStyle}
                contentStyle={styles.inputContent}
              />
            </View>

            {/* Username */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Username<Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                value={username}
                onChangeText={setUsername}
                mode="outlined"
                style={styles.textInput}
                outlineColor="transparent"
                activeOutlineColor="transparent"
                outlineStyle={styles.outlineStyle}
                contentStyle={styles.inputContent}
                left={<TextInput.Affix text="@" textStyle={styles.prefixText} />}
              />
            </View>

            {/* Phone Number */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Phone Number<Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.phoneContainer}>
                <PhoneInput
                  ref={phoneInputRef}
                  defaultValue={phoneNumber}
                  defaultCode="SA"
                  layout="second"
                  renderDropdownImage={<View />}
                  onChangeText={setPhoneNumber}
                  containerStyle={styles.phoneInputContainer}
                  textContainerStyle={styles.phoneTextContainer}
                  textInputStyle={styles.phoneTextInput}
                  countryPickerButtonStyle={styles.countryPicker}
                  flagButtonStyle={styles.flagButton}
                />
              </View>
            </View>

            {/* Gender */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>
                Gender<Text style={styles.required}>*</Text>
              </Text>
              <ProfileRadioButtons />
            </View>

            {/* Age */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Age</Text>
             
            </View>

            {/* Country */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Country</Text>
              <DropdownComponent items={countries} value={country}    setValue={setCountry}/>
                
            </View>

            {/* City */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>City</Text>
              <DropdownComponent items={cities} value={city}    setValue={setCity}/>
             
            </View>

            {/* Languages */}
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Languages</Text>
              <View style={styles.languagesContainer}>
                {languages.map((language) => (
                  <View key={language} style={styles.languageTag}>
                    <Text style={styles.languageText}>{language}</Text>
                    <TouchableOpacity onPress={() => removeLanguage(language)}>
                      <FontAwesome6 name="xmark" size={12} color="#6D028E" />
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
              <View style={styles.addLanguageContainer}>
                <TextInput
                  value={newLanguage}
                  onChangeText={setNewLanguage}
                  placeholder="Add language..."
                  mode="outlined"
                  style={styles.languageInput}
                  outlineColor="transparent"
                  activeOutlineColor="transparent"
                  outlineStyle={styles.outlineStyle}
                  contentStyle={styles.inputContent}
                  onSubmitEditing={addLanguage}
                />
              </View>
            </View>
          </View>

          {/* Complete Profile Button */}
          <TouchableOpacity style={styles.completeButton}>
            <Text style={styles.completeButtonText}>Complete Profile</Text>
          </TouchableOpacity>
        </ScrollView>
    
    </SafeAreaView>
  )
}

export default ProfileScreen


