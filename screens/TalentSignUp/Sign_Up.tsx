import ApiService from "@/services/ApiService"
import {
  responsiveHeight
} from "@/utils/responsive"
import { Feather } from "@expo/vector-icons"
import AsyncStorage from "@react-native-async-storage/async-storage"
import Checkbox from "expo-checkbox"
import React, { useState } from "react"
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { Signupstyles as styles } from '../../assets/styles/singnupScreen.styles'

const SignUpScreen = ({navigation}:any) => {
  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [agreed, setAgreed] = useState(false)
const handleLogin =async(username:string,phone_number:string)=>{
  const role=await AsyncStorage.getItem('role')
const data={username,phone_number,role}
console.log(phoneNumber)
console.log(name)
console.log(data)
  const response=await ApiService.post("auth/register",data)
  console.log(response.data)
}
  return (
    <SafeAreaView style={styles.container}>
      {/* Back button */}
    
        
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.replace('usertypescreen')}
        >
          <View style={styles.backButtonCircle}>
            <Feather name="arrow-left" size={20} color="#6D028E" />
          </View>
        </TouchableOpacity>
  
        {/* Logo */}
        <Image
          source={require("@/assets/images/brandlogo.png")} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
  
        {/* Title */}
        <View style={styles.heading}>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Welcome back! Please enter your details
          </Text>
        </View>
  
      <KeyboardAvoidingView  behavior={'padding'} keyboardVerticalOffset={Platform.OS==='ios'?100:0} style={{ marginTop:'100%' }}>
          <View style={[styles.inputContainer]}>
            <Text style={styles.inputLabel}>
              Username <Text style={styles.required}>*</Text>
            </Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
          </View>
    
          {/* Phone Number Field */}
          <View style={[styles.inputContainer,{marginTop:'25%'} ]}>
            <Text style={styles.inputLabel}>
              Phone Number <Text style={styles.required}>*</Text>
            </Text>
            <View style={[styles.phoneInputContainer]}>
              <Text style={styles.phoneCode} >+966</Text>
              <TextInput
                style={styles.phoneInput}
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={(text)=>setPhoneNumber(text)}
              />
            </View>
          </View>
      </KeyboardAvoidingView>
  
        {/* Terms Checkbox */}
        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agreed}
            onValueChange={setAgreed}
            style={styles.checkbox}
            // color={'#6D028E'}
          
          />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.checkboxText}>I agree to all , </Text>
            <Text style={styles.linkText}>Privacy and </Text>
            <Text style={styles.linkText}>Fees</Text>
          </View>
        </View>
  
        {/* Sign Up Button */}
        <TouchableOpacity onPress={()=>handleLogin(name,phoneNumber)} style={[styles.signUpButton,{top: responsiveHeight(690), backgroundColor: "#6D028E",}]}>
          <Text  style={[styles.signUpButtonText,{color: "#FFF",}]}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signUpButton,{top: responsiveHeight(748),backgroundColor: "#F5F7FA",elevation:6}]}>
          <Text style={[styles.signUpButtonText,{color: "#FE5120",}]}>Continue As Guest</Text>
        </TouchableOpacity>
  
        {/* Sign In link */}
  
        <Text style={styles.signInText}>
          Already have an account? <Text style={styles.linkText}>Sign In</Text>
        </Text>
  
       </SafeAreaView>
  )
}

export default SignUpScreen
