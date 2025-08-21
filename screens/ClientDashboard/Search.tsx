// import Slider from '@react-native-community/slider';
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SeacchScreenStyles as styles } from "../../assets/styles/searchScreen";

const SearchScreen = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState([50, 100]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View style={styles.filtersContainer}>
        <Text style={styles.label}>Filters</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.label}>Talent Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Select talent type"
          editable={false}
        />
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
        <Text style={styles.label}>Price Range</Text>
        {/* <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={priceRange}
          onValueChange={setPriceRange}
          thumbTintColor="#6B46C1"
          minimumTrackTintColor="#6B46C1"
          maximumTrackTintColor="#D1D5DB"
        /> */}

        <View style={{ width: "100%", alignItems: "center" }}>
          <MultiSlider
            values={priceRange}
            onValuesChange={(values)=>setPriceRange(values)}
            min={0}
            
            max={150}
            step={1}
            selectedStyle={{ backgroundColor: "#6D028E" }}
            customMarker={(e)=> <View>
             <View style={{alignItems:'center'}}>
                <View style={{height:15,width:15,borderRadius:7.5,backgroundColor: '#6D028E',marginTop:18}}/>
                <Text style={{fontFamily:'Font-Medium',color:'#6D028E'}}> {e.currentValue} </Text>
             </View>
              </View>}
            markerStyle={{ backgroundColor: "#6D028E",height:16,width:16,marginTop:5 }}
            
            trackStyle={{height:5,width:100}}
          />
        </View>
        <Text style={styles.priceText}>{`${priceRange} - 100`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchScreen;
