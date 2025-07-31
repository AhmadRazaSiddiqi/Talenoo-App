//FIXME - Fix the Calender
import { Feather, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

// Locale config for single-letter weekdays
LocaleConfig.locales["short"] = {
  monthNames: [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ],
  monthNamesShort: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ],
  dayNames: [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ],
  dayNamesShort: ["S", "M", "T", "W", "T", "F", "S"],
  today: "Today",
};

LocaleConfig.defaultLocale = "short";

const RequestCalenderScreen = () => {
  const [selectedDate, setSelectedDate] = useState("2025-10-03");

  const baseMarkedDates = {
    "2025-10-03": {
      dots: [{ key: "dot1", color: "#6D028E" }],
    },
    "2025-10-05": {
      dots: [{ key: "dot2", color: "#6D028E" }],
    },
    "2025-10-07": {
      dots: [{ key: "dot3", color: "#6D028E" }],
    },
    "2025-10-12": {
      dots: [{ key: "dot4", color: "#6D028E" }],
    },
    "2025-10-16": {
      dots: [{ key: "dot5", color: "#6D028E" }],
    },
    "2025-10-18": {
      dots: [{ key: "dot6", color: "#6D028E" }],
    },
    "2025-10-20": {
      dots: [{ key: "dot7", color: "#6D028E" }],
    },
    "2025-10-24": {
      dots: [{ key: "dot8", color: "#6D028E" }],
    },
    "2025-10-26": {
      dots: [{ key: "dot9", color: "#6D028E" }],
    },
    "2025-10-29": {
      dots: [{ key: "dot10", color: "#6D028E" }],
    },
  };

  // Add selected date with dots (if applicable)
  const markedDates = {
    ...baseMarkedDates,
    [selectedDate]: {
      ...(baseMarkedDates[selectedDate] || {}),
      selected: true,
      selectedColor: "#6D028E",
    },
  };

  const requestData = [
    {
      id: "1",
      name: "Sophia Bannett",
      location: "Riyadh, Saudi Arabia",
      role: "Talent (Cooking)",
      time: "10:00–11:00",
      image: require("../../assets/images/sophia.png"),
    },
    {
      id: "2",
      name: "Client Name",
      location: "Riyadh, Saudi Arabia",
      role: "Talent (Cooking)",
      time: "10:00–11:00",
      image: require("../../assets/images/clientImage.png"),
    },
    {
      id: "3",
      name: "Client Name",
      location: "Riyadh, Saudi Arabia",
      role: "Talent (Cooking)",
      time: "10:00–11:00",
      image: require("../../assets/images/clientImage.png"),
    },
  ];

  const renderRequestCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.avatar} />
      <View style={styles.cardDetails}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.role}>{item.role}</Text>
        <Text style={styles.location}>{item.location}</Text>
      </View>
      <View style={styles.cardTimeContainer}>
        <Text style={styles.date}>03 Oct, 2025</Text>
        <View style={styles.timeRow}>
          <FontAwesome name="clock-o" size={14} color="#1C2439" />
          <Text style={styles.time}>{item.time}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request Calendar</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.calendarContainer}>
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          hideExtraDays={true}
          disableMonthChange={true}
          firstDay={0}
          markingType="multi-dot"
          markedDates={markedDates}
          renderArrow={(direction) =>
            direction === "left" ? (
              <Image source={require("../../assets/icons/leftArrow.png")} />
            ) : (
              <Image source={require("../../assets/icons/rightArrow.png")} />
            )
          }
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            selectedDayTextColor: "#fff",
            todayTextColor: "#6D028E",
            dayTextColor: "#121417",
            monthTextColor: "#121417",
            arrowColor: "#6D028E",

            textMonthFontSize: 18,
            textMonthFontFamily: "Font-Bold",
            textMonthFontWeight: "700",

            textDayFontFamily: "Font-Medium",
            textDayFontSize: 16,

            textDayHeaderFontFamily: "Font-Bold",
            textDayHeaderFontSize: 14,

            dotColor: "#6D028E",
            selectedDotColor: "#ffffff",
          }}
          style={styles.calendar}
        />
      </View>

      <FlatList
        data={requestData}
        renderItem={renderRequestCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeAreaView>
  );
};

export default RequestCalenderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "row",
    height: 72,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Font-Bold",
    color: "#6D028E",
  },
  calendarContainer: {
    height: 370,
    width: 390,
    paddingHorizontal: 16,
    alignSelf: "center",
    paddingTop: 16,
  },
  calendar: {
    height: 338,
    width: 336,
    marginLeft: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  cardDetails: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "Font-Bold",
    color: "#121417",
  },
  role: {
    fontSize: 13,
    color: "#6D028E",
    fontFamily: "Font-Regular",
    marginTop: 2,
  },
  location: {
    fontSize: 13,
    fontFamily: "Font-Regular",
    color: "#5F6C86",
    marginTop: 2,
  },
  cardTimeContainer: {
    alignItems: "flex-end",
  },
  date: {
    backgroundColor: "#E4F9ED",
    color: "#1BAF65",
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontFamily: "Font-Medium",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  time: {
    marginLeft: 6,
    fontSize: 13,
    fontFamily: "Font-Regular",
    color: "#1C2439",
  },
});
