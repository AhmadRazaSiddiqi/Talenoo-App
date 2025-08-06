import ProfileInput from "@/components/profile/ProfileInput";
import ProfileRadioButtons from "@/components/profile/ProfileRadioButtons";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "@/utils/responsive";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import ApiService from "../../services/ApiService.js";

import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "react-native-size-matters";
import CustomNumericInput from "../../components/profile/AgeInput";

const ProfileScreen = () => {
  const [Countryopen, setcountryOpen] = useState(false);
  const [Cityopen, setcityOpen] = useState(false);
  const [Languageopen, setlanguageOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Saudia Arabia", value: "saudia" },
    { label: "Egypt", value: "egypt" },
    { label: "Moroco", value: "moroco" },
  ]);
  const [Talents, setTalents] = useState([
    {
      label: "Hair Dresser",
      value: "hairDresser",
      price: "50",
      currency: "/SAR hr",
    },
    { label: "Singer", value: "singer", price: "50", currency: "/SAR hr" },
    { label: "Painter", value: "painter", price: "50", currency: "/SAR hr" },
  ]);
  console.log(Talents);
  const [FormData,setFormData]=useState({
    name:'',
    email:'',
    phone_number:'',
    password:'',
    role:'',
    full_name:'',
    country:'',
    city:'',
    main_talent:'',
    languages:[],
    skills:[],
    hourly_rate:'',
    profile_photo:''
  })
  const handleChange = (key: string, value: any) => {
    setFormData(prev => {
      const updated = { ...prev, [key]: value };
      console.log("Updated Form Data", updated);
      return updated;
    });
  };
  
  
  
  return (
    <SafeAreaView
      style={{ flex: 1, position: "relative", backgroundColor: "#FFF" }}
    >
      <View
        style={{
          position: "absolute",
          top: responsiveHeight(15),
          left: responsiveWidth(15),
          width: responsiveWidth(40),
          height: responsiveWidth(40),
          borderRadius: responsiveWidth(20),
          backgroundColor: "#F5F7FA",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pressable>
          <AntDesign
            name="arrowleft"
            size={responsiveFontSize(20)}
            color="#6D028E"
          />
        </Pressable>
      </View>
      <Text
        style={{
          position: "absolute",
          top: responsiveHeight(29.77),
          left: responsiveWidth(146),
          fontSize: responsiveFontSize(20),
          lineHeight: responsiveHeight(28),
          fontFamily: "Font-Bold",
          textAlignVertical: "top",
          color: "#6D028E",
        }}
      >
        Profile
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flex: 1,
          gap: responsiveHeight(15),
          top: responsiveHeight(90),
          left: responsiveWidth(30),
          paddingBottom: responsiveHeight(20),
        }}
      >
        <View
          style={{
            width: responsiveWidth(319),
            
            flexDirection: "column",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Font-Bold",
                fontSize: responsiveFontSize(20),
                color: "#24364C",
                textAlign: "center",
                lineHeight: responsiveHeight(28),
              }}
            >
              Complete your profile
            </Text>
            <Text
              style={{
                fontFamily: "Font-Medium",
                color: "#5F729D",
                fontSize: responsiveFontSize(14),
                textAlign: "center",
                lineHeight: responsiveHeight(20),
              }}
            >
              {
                "Rest assured,your personal data is visible only \n to you.No one else will have access to it."
              }
            </Text>
          </View>
          <ProfileInput labelText="Full Name" Inputtype="name" value={FormData.full_name} setValue={handleChange} name='full_name'/>
          <ProfileInput labelText="Username" Inputtype="email" value={FormData.email}  setValue={handleChange} name="name"/>
          <ProfileInput labelText="Phone Number" Inputtype="phone" value={FormData.phone_number}  setValue={handleChange} name="phone_number"/>
          {/* Radio Buttons */}
          <ProfileRadioButtons />
          <CustomNumericInput />
          <View>
            <Text
              style={{
                fontSize: scale(15),
                fontFamily: "Font-Medium",
                fontWeight: "500",
                color: "#25374D",
                lineHeight: verticalScale(24),
              }}
            >
              Country
            </Text>
            <DropDownPicker
              open={Countryopen}
              value={value}
              items={items}
              setOpen={setcountryOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={"Select Your Country"}
              dropDownDirection="BOTTOM"
              textStyle={{
                color: "#6D028E",
                fontFamily: "Font-Medium",
                fontSize: responsiveFontSize(15),
                fontWeight: "500",
              }}
              style={{ borderColor: "transparent", backgroundColor: "#F5F7FA" }}
              containerStyle={{ borderColor: "transparent" }}
              dropDownContainerStyle={{ borderColor: "transparent" }}
              arrowIconStyle={{ outlineColor: "green" }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: scale(15),
                fontFamily: "Font-Medium",
                fontWeight: "500",
                color: "#25374D",
                lineHeight: verticalScale(24),
              }}
            >
              City
            </Text>
            <DropDownPicker
              open={Cityopen}
              value={value}
              items={items}
              setOpen={setcityOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={"Select Your Country"}
              dropDownDirection="BOTTOM"
              textStyle={{
                color: "#6D028E",
                fontFamily: "Font-Medium",
                fontSize: responsiveFontSize(15),
                fontWeight: "500",
              }}
              style={{ borderColor: "transparent", backgroundColor: "#F5F7FA" }}
              containerStyle={{ borderColor: "transparent" }}
              dropDownContainerStyle={{ borderColor: "transparent" }}
              arrowIconStyle={{ outlineColor: "green" }}
              multiple={true}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: scale(15),
                fontFamily: "Font-Medium",
                fontWeight: "500",
                color: "#25374D",
                lineHeight: verticalScale(24),
              }}
            >
              Languages
            </Text>
            <DropDownPicker
              open={Languageopen}
              value={value}
              items={items}
              setOpen={setlanguageOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={"Select Your Country"}
              dropDownDirection="BOTTOM"
              textStyle={{
                color: "#6D028E",
                fontFamily: "Font-Medium",
                fontSize: responsiveFontSize(15),
                fontWeight: "500",
              }}
              style={{ borderColor: "transparent", backgroundColor: "#F5F7FA" }}
              containerStyle={{ borderColor: "transparent" }}
              dropDownContainerStyle={{ borderColor: "transparent" }}
              multiple={true}
              searchPlaceholder="Add language..."
            />
          </View>
          <View>
            <Text>Talents</Text>
            <FlatList
              data={Talents}
              keyExtractor={(item, index) => index.toString()}
              renderItem={(Item) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    height: responsiveHeight(48),
                    width: responsiveWidth(316),
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                      <FontAwesome6
                        name="trash-can"
                        size={13}
                        color="#FE5120"
                      />
                    </TouchableOpacity>{" "}
                    <Text>{Item.item.label}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text>{Item.item.price}</Text>
                    <Text> /SAR hr</Text>
                  </View>
                </View>
              )}
            />
          </View>
          <Pressable onPress={()=>ApiService.post('updateProfile',FormData)}
            style={{
              height: responsiveHeight(48),
              width: responsiveWidth(315),
              borderRadius: responsiveWidth(8),
              backgroundColor: "#6D028E",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Complete Profile</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
