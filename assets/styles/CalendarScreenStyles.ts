import { StyleSheet } from "react-native";

export const CalendarScreenStyles = StyleSheet.create({
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
  