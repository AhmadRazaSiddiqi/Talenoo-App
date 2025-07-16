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
    alignItems:'center'
  },
  scroll: {
   height:584,
   width:390
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
    height:72,
    width:390
  },
  headerText: {
    height:23,
    width:310,
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 18,
    color: '#6D028E',
    paddingRight:48,
    fontWeight:'700',
    lineHeight:23,
    letterSpacing:0,
    textAlign:'center'
  },
  uploadBox: {
    display:'flex',
    borderWidth: 2,
    height:232,
    width:358,
    borderColor: '#D1D5DB',
    borderStyle: 'dashed',
    borderRadius: 12,
    alignItems: 'center',
    paddingVertical:56,
    paddingHorizontal:24,
    gap:24
  },
  uploadTitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontWeight:'700',
    fontSize: 18,
    color: '#121417',
    lineHeight:23,
    letterSpacing:0,
    textAlign:'center'
    
  },
  uploadSubtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    fontWeight:'400',
    color: '#6B7280',
    letterSpacing:0,
    lineHeight:21,
    textAlign:'center'
  },
  selectButton: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#F2F2F5',
    borderRadius: 20,
    paddingHorizontal: 16,
    width:110,
    height:40,

  },
  selectButtonText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 14,
    color: '#121417',
    lineHeight:21,
    letterSpacing:0,
    textAlign:'center'
  },
  input: {
    backgroundColor: '#F2F2F5',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 16,
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  descriptionInput: {
    height: 150,
    textAlignVertical: 'top',
  },
  postButton: {
    backgroundColor: '#6D028E',
    borderRadius: 24,
    height:48,
    width:358,
    alignItems: 'center',
    justifyContent: 'center',
   paddingHorizontal:20
  },
  postText: {
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
  },
  crossContainer:{
    height:48,
    width:48,
    justifyContent:'center',
    alignItems:'center'
  },
  uploadBoxContainer:{
    position:'absolute',
    height:264,
    width:390,
    top:72,
    padding:16
  },
  TitleContainer:{
    position:'absolute',
    width:390,
    height:80,
    top:336
  },
  DescriptionContainer:{
    position:'absolute',
    height:169,
    width:390,
    top:416
  },
  PostBtnContainer:{
    display:'flex',
    justifyContent:'center',
    // alignItems:'center',
   position:'absolute',
   paddingVertical:12,
   paddingHorizontal:16,
    top:752,
    width:390,
    height:72

  }
});

export default UploadContentScreen;
