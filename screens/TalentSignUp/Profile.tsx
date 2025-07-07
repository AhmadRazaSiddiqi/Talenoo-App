import React, { useState } from "react"
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native"
import { Picker } from "@react-native-picker/picker" // You'll need to install this library
import Icon from "react-native-vector-icons/MaterialCommunityIcons" // You'll need to install this library

const ProfileScreen = () => {
  const [fullName, setFullName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [gender, setGender] = useState("Male")
  const [age, setAge] = useState(45)
  const [country, setCountry] = useState("Saudi Arabia")
  const [city, setCity] = useState("Riyadh")
  const [languages, setLanguages] = useState(["English", "Spanish"])
  const [newLanguage, setNewLanguage] = useState("")
  const [hourlyRate, setHourlyRate] = useState(45)
  const [currency, setCurrency] = useState("SAR")

  const handleAddLanguage = () => {
    if (newLanguage && !languages.includes(newLanguage)) {
      setLanguages([...languages, newLanguage])
      setNewLanguage("")
    }
  }

  const handleRemoveLanguage = (langToRemove) => {
    setLanguages(languages.filter((lang) => lang !== langToRemove))
  }

  const handleIncreaseAge = () => setAge(age + 1)
  const handleDecreaseAge = () => setAge(age > 0 ? age - 1 : 0)

  const handleIncreaseHourlyRate = () => setHourlyRate(hourlyRate + 1)
  const handleDecreaseHourlyRate = () =>
    setHourlyRate(hourlyRate > 0 ? hourlyRate - 1 : 0)

  const handleCompleteProfile = () => {
    // Handle profile completion logic here
    console.log("Profile Data:", {
      fullName,
      phoneNumber,
      gender,
      age,
      country,
      city,
      languages,
      hourlyRate,
      currency,
    })
    alert("Profile Completed!")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log("Back button pressed")}>
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.profileCompletionSection}>
        <Text style={styles.profileCompletionTitle}>Complete Your Profile</Text>
        <Text style={styles.profileCompletionText}>
          Rest assured, your personal data is visible only to you. No one else
          will have access to it.
        </Text>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          {/* Replace with actual Image component and source */}
          <Icon name="account-circle" size={120} color="#ccc" />
          <TouchableOpacity style={styles.editButton}>
            <Icon name="pencil" size={16} color="#fff" />
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formSection}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Full Name<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
           
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Phone Number<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.phoneCodeWrapper}>
              <Text style={styles.phoneCode}>+966</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Gender<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderOption,
                gender === "Male" && styles.genderOptionSelected,
              ]}
              onPress={() => setGender("Male")}
            >
              <Icon
                name={gender === "Male" ? "radiobox-marked" : "radiobox-blank"}
                size={20}
                color={gender === "Male" ? "#6D028E" : "#F5F7FA"}
              />
              <Text
                style={[
                  styles.genderText,
                  gender === "Male" && styles.genderTextSelected,
                ]}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderOption,
                gender === "Female" && styles.genderOptionSelected,
              ]}
              onPress={() => setGender("Female")}
            >
              <Icon
                name={
                  gender === "Female" ? "radiobox-marked" : "radiobox-blank"
                }
                size={20}
                color={gender === "Female" ? "#6D028E" : "#F5F7FA"}
              />
              <Text
                style={[
                  styles.genderText,
                  gender === "Female" && styles.genderTextSelected,
                ]}
              >
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Age<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.numberInputContainer}>
            <Text style={styles.numberInputValue}>{age}</Text>
            <View style={styles.numberInputControls}>
              <TouchableOpacity onPress={handleIncreaseAge}>
                <Icon name="chevron-up" size={24} color="#5F729D" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDecreaseAge}>
                <Icon name="chevron-down" size={24} color="#5F729D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Country<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={country}
              onValueChange={(itemValue) => setCountry(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Saudi Arabia" value="Saudi Arabia" />
              <Picker.Item label="United States" value="United States" />
              <Picker.Item label="Canada" value="Canada" />
              {/* Add more countries as needed */}
            </Picker>
            <Icon
              name="chevron-down"
              size={16}
              color="#5F729D"
              style={styles.pickerIcon}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            City<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={city}
              onValueChange={(itemValue) => setCity(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="Riyadh" value="Riyadh" />
              <Picker.Item label="Jeddah" value="Jeddah" />
              <Picker.Item label="Dammam" value="Dammam" />
              {/* Add more cities as needed based on selected country */}
            </Picker>
            <Icon
              name="chevron-down"
              size={16}
              color="#5F729D"
              style={styles.pickerIcon}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Languages<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.languageInputContainer}>
            <View style={styles.languageTagsContainer}>
              {languages.map((lang, index) => (
                <View key={index} style={styles.languageTag}>
                  <Text style={styles.languageTagText}>{lang}</Text>
                  <TouchableOpacity
                    onPress={() => handleRemoveLanguage(lang)}
                    style={styles.removeLanguageButton}
                  >
                    <Icon name="close-circle" size={16} color="#fff" />
                  </TouchableOpacity>
                </View>
              ))}
              <TextInput
                style={styles.addLanguageInput}
                value={newLanguage}
                onChangeText={setNewLanguage}
                placeholder="Add language..."
                onSubmitEditing={handleAddLanguage} // Add language on Enter
                placeholderTextColor="#ADAEBC"
              />
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Hourly Rate<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.hourlyRateContainer}>
            <View style={styles.currencyPickerContainer}>
              <Picker
                selectedValue={currency}
                onValueChange={(itemValue) => setCurrency(itemValue)}
                style={styles.currencyPicker}
               
              >
                <Picker.Item label="SAR" value="SAR" />
              </Picker>
            </View>
            <TextInput
              style={styles.hourlyRateInput}
              value={String(hourlyRate)}
              onChangeText={(text) => setHourlyRate(Number(text))}
              keyboardType="numeric"
            />
            <View style={styles.hourlyRateControls}>
              <TouchableOpacity onPress={handleIncreaseHourlyRate}>
                <Icon name="chevron-up" size={24} color="#5F729D" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDecreaseHourlyRate}>
                <Icon name="chevron-down" size={24} color="#5F729D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.completeProfileButton}
        onPress={handleCompleteProfile}
      >
        <Text style={styles.completeProfileButtonText}>Complete Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 0, // Removed padding as the design uses fixed width elements
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 27, // Matches the top position for "Profile"
    marginBottom: 45, // Space before the next section
  },
  headerTitle: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    color: "#6D028E",
  },
  profileCompletionSection: {
    alignItems: "center",
    marginBottom: 30, // Gap of 30px from Frame 9380
    width: 319,
    height: 60,
    alignSelf: "center", // Center the fixed-width element
  },
  profileCompletionTitle: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "700",
    fontSize: 20,
    lineHeight: 28,
    textAlign: "center",
    color: "#24364C",
    width: 319,
    height: 15,
  },
  profileCompletionText: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#5F729D",
    width: 319,
    height: 30,
    marginTop: 15, // Gap from title
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // For a circular avatar
    backgroundColor: "#ccc", // Placeholder background
    justifyContent: "center",
    alignItems: "center",
  },
  editButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    gap: 2,
    position: "absolute",
    width: 54,
    height: 22,
    left: "50%",
    top: "100%",
    transform: [{ translateX: -27 }, { translateY: -22 }], // Center horizontally, adjust vertically
    backgroundColor: "#FE5120",
    borderRadius: 4,
  },
  editButtonText: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
  },
  formSection: {
    width: 319, // Fixed width for the form section
    alignSelf: "center", // Center the form section
    paddingBottom: 20, // Padding at the bottom of the form
  },
  inputGroup: {
    marginBottom: 20, // Gap between input groups
    gap: 10, // Gap between label and input
  },
  label: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    color: "#25374D",
  },
  required: {
    color: "red",
  },
  input: {
    width: 319,
    height: 48,
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
    paddingHorizontal: 15,
    fontSize: 15,
    color: "#6D028E",
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 319,
    height: 48,
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
  },
  phoneCodeWrapper: {
    width: 57,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    marginLeft: 4,
  },
  phoneCode: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    color: "#6D028E",
  },
  phoneInput: {
    flex: 1,
    height: 48,
    paddingLeft: 10,
    fontSize: 15,
    color: "#6D028E",
  },
  genderContainer: {
    flexDirection: "row",
    gap: 10,
    width: 319,
    height: 48,
  },
  genderOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
    gap: 5,
    width: 152,
    height: 48,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#F5F7FA",
    borderRadius: 6,
  },
  genderOptionSelected: {
    borderColor: "#6D028E",
  },
  genderText: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    fontSize: 14,
    lineHeight: 20,
    color: "#24364C",
  },
  genderTextSelected: {
    // Styles for selected gender text if needed
  },
  numberInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 319,
    height: 50,
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
    paddingLeft: 14,
    paddingRight: 14,
  },
  numberInputValue: {
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 24,
    color: "#6D028E",
  },
  numberInputControls: {
    flexDirection: "column",
    gap: 0,
  },
  pickerContainer: {
    width: 319,
    height: 48,
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
    justifyContent: "center", // Center picker content vertically
    position: "relative", // For positioning the icon
  },
  picker: {
    width: "100%",
    height: 48,
    color: "#6D028E",
    fontFamily: "Plus Jakarta Sans",
    fontSize: 15,
    lineHeight: 24,
  },
  pickerIcon: {
    position: "absolute",
    right: 14, // Aligned with the design
    top: "50%",
    transform: [{ translateY: -8 }], // Center the icon vertically
  },
  languageInputContainer: {
    width: 319,
    minHeight: 82, // Changed from fixed height to minHeight to allow content to grow
    backgroundColor: "#F5F7FA",
    borderRadius: 6,
    padding: 9,
  },
  languageTagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  languageTag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3E8FF", // Changed to match design's tag background
    borderRadius: 9999, // To achieve full pill shape
    paddingVertical: 4, // Adjusted for tighter fit based on design
    paddingHorizontal: 9, // Adjusted for tighter fit based on design
    marginRight: 8,
    marginBottom: 8,
  },
  languageTagText: {
    color: "#6D028E",
    fontSize: 12, // Adjusted font size to match design
    fontFamily: "Roboto",
    fontWeight: "500",
    lineHeight: 14,
    marginRight: 5,
  },
  removeLanguageButton: {
    marginLeft: 5,
  },
  addLanguageInput: {
    flex: 1,
    fontSize: 14, // Adjusted font size
    color: "#ADAEBC", // Placeholder color from design
    minWidth: 120, // Ensure enough space for typing
    height: 32, // Height for the input field itself
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "400",
    lineHeight: 24,
  },
  hourlyRateContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F7FA", // Background for the whole container
    borderRadius: 6,
    width: 319,
    height: 50,
  },
  currencyPickerContainer: {
    width: 64, // Fixed width for currency picker
    height: 48,
    backgroundColor: "#F5F7FA", // Match the main background
    borderRadius: 6,
    justifyContent: "center",
    position: "relative",
  },
  currencyPicker: {
    height: 48,
    width: "100%",
    color: "#6D028E",
    fontFamily: "Plus Jakarta Sans",
    fontSize: 15,
    lineHeight: 24,
  },
  currencyPickerIcon: {
    position: "absolute",
    right: 14,
    top: "50%",
    transform: [{ translateY: -8 }],
  },
  hourlyRateInput: {
    flex: 1, // Take remaining space
    height: 50,
    backgroundColor: "#F5F7FA", // Match the main background
    borderRadius: 6,
    paddingLeft: 10,
    fontSize: 15,
    color: "#6D028E",
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "500",
    lineHeight: 24,
    textAlign: "left", // Align to the left as per design value "45"
  },
  hourlyRateControls: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 14, // Padding to align with design
  },
  completeProfileButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 107,
    gap: 10,
    width: 315,
    height: 48,
    backgroundColor: "#6D028E",
    boxShadow: "0px 4px 4px rgba(25, 103, 210, 0.1)", // Not directly supported by React Native StyleSheet
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 31, // Margin from the bottom of the scroll view / form
    marginBottom: 31,
  },
  completeProfileButtonText: {
    width: 124,
    height: 15,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "700",
    fontSize: 15,
    lineHeight: 15,
    textAlign: "center",
    textTransform: "capitalize",
    color: "#FFFFFF",
  },
})

export default ProfileScreen
