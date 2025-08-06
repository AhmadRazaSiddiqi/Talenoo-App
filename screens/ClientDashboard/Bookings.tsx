// BookingScreen.tsx

import { responsiveFontSize as rf, responsiveHeight as rh, responsiveWidth as rw } from "@/utils/responsive";
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
import { Calendar } from "react-native-calendars";
import { Button } from "react-native-paper";
import DropDown from "react-native-paper-dropdown";
const BookingScreen = () => {
  const [selectedDate, setSelectedDate] = useState("2025-10-05");
  const [skill, setSkill] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [note, setNote] = useState("");

  const skillsList = [
    { label: "Cooking", value: "cooking" },
    { label: "Baking", value: "baking" },
    { label: "Meal Prep", value: "meal-prep" },
  ];

  const slots = {
    "2025-10-05": ["10:00 - 11:00", "13:00 - 14:00"],
    "2025-10-06": ["10:00 - 11:00", "13:00 - 14:00"],
    "2025-10-07": ["10:00 - 11:00", "13:00 - 14:00", "15:00 - 16:00"],
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.close}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Booking Request</Text>
      </View>

      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png", // use any placeholder or upload your asset
          }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>Sam I.</Text>
          <Text style={styles.role}>Chef</Text>
          <Text style={styles.rating}>⭐⭐⭐⭐⭐ 5.0</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Select Date</Text>
      <Calendar
        current={selectedDate}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#660099",
          },
        }}
        theme={{
          textDayFontSize: rf(1.8),
          textMonthFontSize: rf(2),
          textDayHeaderFontSize: rf(1.6),
        }}
      />

      <Text style={styles.sectionTitle}>Select Slot</Text>
      {Object.keys(slots).map((date) => (
        <View key={date} style={styles.dateSlotContainer}>
          <Text style={styles.dateLabel}>
            {new Date(date).toLocaleDateString("en-US", {
              weekday: "long",
              month: "short",
              day: "numeric",
            })}
          </Text>
          <View style={styles.slotRow}>
            {slots[date].map((slot, idx) => (
              <TouchableOpacity
                key={idx}
                style={[
                  styles.slot,
                  date === selectedDate ? styles.slotSelected : {},
                ]}
              >
                <Text
                  style={[
                    styles.slotText,
                    date === selectedDate ? styles.slotTextSelected : {},
                  ]}
                >
                  {slot}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Choose Skill</Text>
      <DropDown
        label={"Choose related skill"}
        mode={"outlined"}
        value={skill}
        setValue={setSkill}
        list={skillsList}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        inputProps={{
          style: { backgroundColor: "#f2f2f7" },
        }}
      />

      <Text style={styles.sectionTitle}>Note</Text>
      <TextInput
        placeholder="Add note for the talent ..."
        value={note}
        onChangeText={setNote}
        multiline
        style={styles.noteInput}
      />

      <Button
        mode="contained"
        style={styles.bookingBtn}
        labelStyle={styles.bookingBtnText}
        onPress={() => {}}
      >
        Request Booking
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: rw(5),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: rh(2),
  },
  close: {
    fontSize: rf(3),
    marginRight: rw(3),
  },
  title: {
    fontSize: rf(2.5),
    fontWeight: "bold",
    color: "#660099",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(4),
    marginBottom: rh(2),
  },
  avatar: {
    width: rw(20),
    height: rw(20),
    borderRadius: rw(10),
    marginRight: rw(3),
  },
  name: {
    fontSize: rf(2.2),
    fontWeight: "bold",
  },
  role: {
    fontSize: rf(1.8),
    color: "#666",
  },
  rating: {
    fontSize: rf(1.6),
    color: "#ffaa00",
  },
  sectionTitle: {
    fontSize: rf(2),
    fontWeight: "600",
    marginTop: rh(2),
    marginBottom: rh(1),
  },
  dateSlotContainer: {
    marginBottom: rh(1),
  },
  dateLabel: {
    fontSize: rf(1.7),
    color: "#999",
    marginBottom: rh(0.5),
  },
  slotRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: rw(2),
  },
  slot: {
    backgroundColor: "#f2eaff",
    paddingVertical: rh(0.8),
    paddingHorizontal: rw(4),
    borderRadius: rw(5),
    marginBottom: rh(1),
  },
  slotSelected: {
    backgroundColor: "#660099",
  },
  slotText: {
    fontSize: rf(1.7),
    color: "#660099",
  },
  slotTextSelected: {
    color: "#fff",
  },
  noteInput: {
    backgroundColor: "#f2f2f7",
    padding: rw(3),
    borderRadius: rw(2),
    height: rh(10),
    textAlignVertical: "top",
    fontSize: rf(1.7),
    marginBottom: rh(2),
  },
  bookingBtn: {
    backgroundColor: "#660099",
    paddingVertical: rh(1.5),
    borderRadius: rw(10),
    marginBottom: rh(3),
  },
  bookingBtnText: {
    fontSize: rf(2),
    color: "#fff",
  },
});

export default BookingScreen;
