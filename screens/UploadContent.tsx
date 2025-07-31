import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from '@/utils/responsive.js';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UploadContentScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scroll}>
        <View style={styles.headerContainer}>
          <View style={styles.crossContainer}><Ionicons name="close" size={24} color="black" /></View>
          <Text style={styles.headerText}>Upload</Text>
          <View style={{width:24}} /> {/* To balance the close icon space */}
        </View>
<View style={styles.uploadBoxContainer}>
    
            <View style={styles.uploadBox}>
             <View style={{display:'flex',gap:8}}>
                  <Text style={styles.uploadTitle}>Upload Photo/Video</Text>
                  <Text style={styles.uploadSubtitle}>Or, select files from your media</Text>
             </View>
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select Files</Text>
              </TouchableOpacity>
            </View>
</View>

      <View style={styles.TitleContainer}>
            <TextInput
              placeholder="Add a title"
              placeholderTextColor="#6B7280"
              style={styles.input}
            />
      </View>

      <View style={styles.DescriptionContainer}>
            <TextInput
              placeholder="Add a description"
              placeholderTextColor="#6B7280"
              style={[styles.input, styles.descriptionInput]}
              multiline
            />
      </View>
      </View>
       <View style={styles.PostBtnContainer}>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.postText}>Post</Text>
            </TouchableOpacity>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scroll: {
    height: rh(584),
    width: rw(390),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: rh(20),
    justifyContent: 'space-between',
    height: rh(72),
    width: rw(390),
  },
  headerText: {
    height: rh(23),
    width: rw(310),
    fontFamily: 'Font-Bold',
    fontSize: rf(18),
    color: '#6D028E',
    paddingRight: rw(48),
    fontWeight: '700',
    lineHeight: rh(23),
    letterSpacing: 0,
    textAlign: 'center',
  },
  uploadBox: {
    display: 'flex',
    borderWidth: 2,
    height: rh(232),
    width: rw(358),
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: rw(12),
    alignItems: 'center',
    paddingVertical: rh(56),
    paddingHorizontal: rw(24),
    gap: rw(24),
  },
  uploadTitle: {
    fontFamily: 'Font-Bold',
    fontWeight: '700',
    fontSize: rf(18),
    color: '#121417',
    lineHeight: rh(23),
    letterSpacing: 0,
    textAlign: 'center',
  },
  uploadSubtitle: {
    fontFamily: 'Font-Regular',
    fontSize: rf(14),
    fontWeight: '400',
    color: '#6B7280',
    letterSpacing: 0,
    lineHeight: rh(21),
    textAlign: 'center',
  },
  selectButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F5',
    borderRadius: rw(20),
    paddingHorizontal: rw(16),
    width: rw(110),
    height: rh(40),
  },
  selectButtonText: {
    fontFamily: 'Font-Bold',
    fontSize: rf(14),
    color: '#121417',
    lineHeight: rh(21),
    letterSpacing: 0,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F2F2F5',
    borderRadius: rw(20),
    paddingHorizontal: rw(20),
    paddingVertical: rh(16),
    fontFamily: 'Font-Regular',
    fontSize: rf(16),
    marginBottom: rh(15),
    color: '#000',
  },
  descriptionInput: {
    height: rh(150),
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#6D028E',
    borderRadius: rw(24),
    height: rh(48),
    width: rw(358),
    alignItems: 'center',
    justifyContent: 'center',
   paddingHorizontal:rw(20)
  },
  postText: {
    color: '#fff',
    fontFamily: 'Font-Bold',
    fontSize: rf(16),
  },
  crossContainer:{
    height:rh(48),
    width:rh(48),
    justifyContent:'center',
    alignItems:'center'
  },
  uploadBoxContainer:{
    position:'absolute',
    height:rh(264),
    width:rw(390),
    top:rh(72),
    padding:rw(16)
  },
  TitleContainer:{
    position:'absolute',
    width:rw(390),
    height:rh(80),
    top:rh(336)
  },
  DescriptionContainer:{
    position:'absolute',
    height:rh(169),
    width:rw(390),
    top:rh(416)
  },
  PostBtnContainer:{
    display:'flex',
    justifyContent:'center',
    // alignItems:'center',
   position:'absolute',
   paddingVertical:rh(12),
   paddingHorizontal:rw(16),
    top:rh(752),
    width:rw(390),
    height:rh(72)

  }
});

export default UploadContentScreen;
