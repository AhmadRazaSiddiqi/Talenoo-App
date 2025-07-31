import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive.js';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const SearchScreen = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState(50);

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
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={priceRange}
          onValueChange={setPriceRange}
          thumbTintColor="#6B46C1"
          minimumTrackTintColor="#6B46C1"
          maximumTrackTintColor="#D1D5DB"
        />
        <Text style={styles.priceText}>{`${priceRange} - 100`}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: rw(20),
  },
  title: {
    fontSize: rf(24),
    fontWeight: 'bold',
    color: '#6B46C1',
    marginBottom: rh(20),
  },
  filtersContainer: {
    flex: 1,
  },
  label: {
    fontSize: rf(16),
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: rh(10),
  },
  input: {
    height: rh(40),
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: rw(8),
    paddingHorizontal: rw(10),
    marginBottom: rh(20),
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
    backgroundColor: '#6B46C1',
    paddingVertical: rh(10),
    borderRadius: rw(20),
    alignItems: 'center',
  },
  buttonText: {
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
    fontSize: rf(12),
  },
});

export default SearchScreen;