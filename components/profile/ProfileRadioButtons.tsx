import { responsiveHeight, responsiveWidth } from "@/utils/responsive"
import React, { useState } from "react"
import { View } from "react-native"
import { RadioButtonProps, RadioGroup } from "react-native-radio-buttons-group"

const ProfileRadioButtons = () => {
  const [selectedId, setSelectedId] = useState<string | undefined>("")

  const getUpdatedButtons = (
    selectedId: string | undefined
  ): RadioButtonProps[] => {
    return [
      {
        id: "1",
        label: "Male",
        value: "male",
        color: "#FFF",
        borderSize: selectedId === "1" ? responsiveWidth(9) : responsiveWidth(2),
        borderColor: selectedId === "1" ? "#6D028E" : "#F5F7FA",
        size:responsiveWidth(18),
        
        labelStyle: { color: "#000" ,fontFamily:'Font-Medium',lineHeight:responsiveHeight(24),marginLeft:responsiveWidth(5)},
        containerStyle: {
          borderRadius: responsiveWidth(8),
          flexDirection:'row',
         marginHorizontal: responsiveWidth(0),
          borderWidth: responsiveWidth(2),
          borderColor: selectedId === "1" ? "#6D028E" : "#F5F7FA",
          height:responsiveHeight(48),
          width:responsiveWidth(72),
          gap:responsiveWidth(0),
          paddingLeft:responsiveWidth(8),
          backgroundColor:'#FFF',
         
        },
      },
      {
        id: "2",
        label: "Female",
        value: "female",
        color: "#FFF",
        borderSize: selectedId === "2" ? responsiveWidth(9) : responsiveWidth(2),
        borderColor:selectedId === "2" ? "#6D028E" : "#F5F7FA",
        labelStyle: { color: "#000" ,fontFamily:'Font-Medium',lineHeight:responsiveHeight(24),marginLeft:responsiveWidth(5)},
        size:responsiveWidth(18),
        
        containerStyle: {
          
          borderRadius: responsiveWidth(8),
          borderWidth: responsiveWidth(2),
          borderColor: selectedId === "2" ? "#6D028E" : "#F5F7FA",
          marginHorizontal:0,
          height:responsiveHeight(48),
          width:responsiveWidth(90),
         backgroundColor:'#FFF',
         paddingLeft:responsiveWidth(8),
         
        },
      },
      {
        id: "3",
        label: "Prefer not to say",
        value: "non-binary",
        borderSize: selectedId === "3" ? responsiveWidth(9) : responsiveWidth(2),
        borderColor: selectedId === "3" ? "#6D028E" : "#F5F7FA",
        color: "#FFF",
        labelStyle: { color: "#000" ,fontFamily:'Font-Medium',lineHeight:responsiveHeight(24),marginLeft:responsiveWidth(5)},
        size:responsiveWidth(18),

        containerStyle: {
          borderRadius: responsiveWidth(8),
          borderWidth: responsiveWidth(2),
          borderColor: selectedId === "3" ? "#6D028E" : "#F5F7FA",
          height:responsiveHeight(48),
          width:responsiveWidth(144),
        marginHorizontal:0,
        paddingLeft:responsiveWidth(8),
backgroundColor:'#FFF'
          
        },
      },
    ]
  }

  const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(
    getUpdatedButtons(selectedId)
  )

  const handlePress = (id: string) => {
    setSelectedId(id)
    setRadioButtons(getUpdatedButtons(id))
  }

  return (
   <View style={{width:responsiveWidth(319),padding:0}}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={handlePress}
        selectedId={selectedId}
        layout="row"
        containerStyle={{
         gap:responsiveWidth(5),
          width:responsiveWidth(319),
         
          
          
        }}
      />
   </View>
  )
}

export default ProfileRadioButtons
