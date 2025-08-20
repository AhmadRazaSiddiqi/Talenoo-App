import ApiService from "@/services/ApiService";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Contactstyles as styles } from '../assets/styles/ContactUs';

const ContactUsScreen = () => {

    // Single state object to hold all text values
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  
    // Handle text changes for any field
    const handleInputChange = (field:any, value:string) => {
      setFormData({
        ...formData,
        [field]: value
      });
    };
  
    const handleSubmit = async() => {
      try {
        console.log(formData)
        const response=await ApiService.post('contact',formData)
        console.log(AsyncStorage.getItem('token'))
        if(response!==undefined)
        {
          console.log(response.data)
        }
      } catch (e) {
        console.log(e)
      }
      // Submit logic here
    };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.headerContainer}>
          <Ionicons name="arrow-back" size={24} color="black" />
          <Text style={styles.headerText}>Contact Us</Text>
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Your Name"
            placeholderTextColor="#6B7280"
            style={styles.input}
            onChangeText={(text)=>handleInputChange('name',text)}
          />
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#6B7280"
            style={styles.input}
            onChangeText={(text)=>handleInputChange('email',text)}
          />
        </View>

        <View style={styles.detailsInputContainer}>
          <TextInput
            placeholder="Subject"
            placeholderTextColor="#6B7280"
            style={styles.input}
            onChangeText={(text)=>handleInputChange('subject',text)}
          />
        </View>

        <View style={styles.messageInputCntainer}>
          <TextInput
            placeholder=""
            placeholderTextColor="#6B7280"
            style={[styles.input, styles.messageInput]}
            multiline
            onChangeText={(text)=>handleInputChange('message',text)}
          />
        </View>

        <View style={styles.submitBtnContainer}>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.otherWaysContainer}>
          <Text style={styles.otherWaysHeader}>Other ways to reach us</Text>
        </View>

        <View style={styles.emailContainer}>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/icons/mail.png")} />
          </View>
          <View style={styles.emailRow}>
            <Text style={styles.emailLabel}>Email</Text>
            <Text style={styles.emailAddress}>support@example.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


export default ContactUsScreen;
