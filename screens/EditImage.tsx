import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const EditImageScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visibility, setVisibility] = useState("Unlisted");

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.main}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.backButton}>
            <Image
              source={require("../assets/icons/back.png")}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View style={styles.headerTextContainer}>
            {" "}
            <Text style={styles.headerText}>Edit Image</Text>
          </View>
        </View>

        {/* Video Thumbnail */}
        <View style={styles.videoContainer}>
          <View style={styles.videoContainerWrapper}>
            <Image
              source={require("../assets/images/ocean.png")} // Replace with your thumbnail image
              style={styles.thumbnail}
            />
          </View>
        </View>

        {/* Title Input */}
        <View style={styles.TitleInputContainer}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Add a title"
            placeholderTextColor="#A0A0A0"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        {/* Description Input */}
        <View style={styles.DescriptionInputContainer}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Add a description"
            placeholderTextColor="#A0A0A0"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        {/* Visibility */}
        <Text style={styles.Visibilitylabel}>Visibility</Text>
        <View style={styles.UnlistedContainer}>
          <TouchableOpacity style={styles.unlistedWrapper}>
            <View>
              <Text style={styles.radioLabel}>Unlisted</Text>
              <Text style={styles.radioDesc}>
                Anyone with the link can view
              </Text>
            </View>
            <View style={styles.radioOuter}></View>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  main: {
    width: 390,
    height: 770,
  },
  headerContainer: {
    flexDirection: "row",
    height: 72,
    width: 390,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    height: 48,
    width: 48,
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 24,
    color: "#000",
    fontFamily: "Font-Regular",
  },
  headerText: {
    fontSize: 23,
    fontFamily: "Font-Bold",
    color: "#6D028E",
    fontWeight: "700",
  },
  headerTextContainer: {
    height: 23,
    width: 310,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  videoContainer: {
    position: "relative",
    height: 233,
    width: 358,
    padding: 16,
  },
  videoContainerWrapper: {
    height: 201,
    width: 358,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },
  label: {
    fontSize: 16,
    fontFamily: "Font-Medium",
    color: "#000",
    marginTop: 15,
    flex: 1,
    paddingBottom: 8,
  },
  TitleInputContainer: {
    height: 112,
    width: 390,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  DescriptionInputContainer: {
    width: 390,
    height: 200,
    maxWidth: 480,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  input: {
    backgroundColor: "#F2F2F5",
    height: 56,
    width: 358,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: "Font-Regular",
    color: "#667582",
    lineHeight: 24,
    fontWeight: "400",
    letterSpacing: 0,
    outlineColor: "transparent",
  },
  textArea: {
    width: 358,
    height: 144,
    borderRadius: 12,
    padding: 16,
    minHeight: 144,
    backgroundColor: "#F2F2F5",
    color: "#667582",
  },
  Visibilitylabel: {
    width: 390,
    height: 47,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    color: "#121417",
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: 18,
    fontFamily: "Font-Bold",
    fontWeight: "700",
  },

  UnlistedContainer: {
    flexDirection: "row",
    width: 390,
    height: 106,
    padding: 16,
  },
  unlistedWrapper: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#DEE0E3",
    padding: 15,
    height: 74,
    width: 358,
    justifyContent: "space-between",
    alignItems: "center",
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#DEE0E3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#6D028E",
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: "Font-Bold",
    color: "#000",
  },
  radioDesc: {
    fontSize: 14,
    fontFamily: "Font-Regular",
    color: "#6C6C6C",
  },
  buttonRow: {
    width: 390,
    height: 72,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  cancelButton: {
    width: 95,
    height: 48,
    minWidth: 84,
    maxWidth: 480,
    backgroundColor: "#F2F2F5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
  },
  cancelText: {
    fontFamily: "Font-Bold",
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "700",
    letterSpacing: 0,
    color: "#121417",
  },
  saveButton: {
    width: 84,
    height: 48,
    minWidth: 84,
    maxWidth: 480,
    backgroundColor: "#6D028E",
    paddingHorizontal: 20,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  saveText: {
    fontSize: 16,
    fontFamily: "Font-Bold",
    color: "#FFFFFF",
    lineHeight: 24,
    letterSpacing: 0,
  },
});

export default EditImageScreen;
