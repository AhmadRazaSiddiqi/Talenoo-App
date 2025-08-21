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
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function RateClient() {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState("");

  const handleStarPress = (value:number) => {
    setRating(value);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={26} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Rate Client</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={require("../assets/images/Lucas.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Ethan Carter</Text>
        <Text style={styles.role}>Talent</Text>
      </View>

      {/* Stars */}
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((i) => (
          <TouchableOpacity key={i} onPress={() => handleStarPress(i)}>
            <MaterialIcons
              name={i <= rating ? "star" : "star-border"}
              size={36}
              color="#FFD700"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Question */}
      <Text style={styles.question}>
        How was your experience working with Ethan?
      </Text>

      {/* Rating Buttons */}
      <View style={styles.ratingButtons}>
        {[1, 2, 3, 4, 5].map((i) => (
          <TouchableOpacity
            key={i}
            style={[styles.ratingButton, rating === i && styles.ratingSelected]}
            onPress={() => handleStarPress(i)}
          >
            <Text
              style={[
                styles.ratingText,
                rating === i && styles.ratingTextSelected,
              ]}
            >
              {i} star{i > 1 ? "s" : ""}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Review */}
      <Text style={styles.sectionTitle}>Write a review</Text>
      <TextInput
        style={styles.reviewInput}
        placeholder="Write your review here..."
        placeholderTextColor="#999"
        multiline
        value={review}
        onChangeText={setReview}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>✓ Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontFamily: "font-Bold",
    fontSize: 18,
    color: "#5E00A1",
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontFamily: "font-Bold",
    fontSize: 20,
    color: "#000",
  },
  role: {
    fontFamily: "font-Regular",
    fontSize: 16,
    color: "#666",
  },
  starsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  question: {
    fontFamily: "font-Medium",
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
    textAlign: "center",
  },
  ratingButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  ratingButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  ratingSelected: {
    backgroundColor: "#5E00A1",
    borderColor: "#5E00A1",
  },
  ratingText: {
    fontFamily: "font-Regular",
    fontSize: 14,
    color: "#333",
  },
  ratingTextSelected: {
    fontFamily: "font-Medium",
    color: "#fff",
  },
  sectionTitle: {
    fontFamily: "font-Bold",
    fontSize: 16,
    marginBottom: 10,
  },
  reviewInput: {
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 12,
    padding: 15,
    fontFamily: "font-Regular",
    fontSize: 14,
    minHeight: 100,
    marginBottom: 20,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#5E00A1",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 40,
  },
  buttonText: {
    fontFamily: "font-Bold",
    fontSize: 16,
    color: "#fff",
  },
});
