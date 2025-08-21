import { StyleSheet } from "react-native";

export const bookingRequestStyles = StyleSheet.create({
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
      fontFamily: "Font-Bold",
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
      fontFamily: "Font-Bold",
      fontSize: 20,
      color: "#000",
    },
    role: {
      fontFamily: "Font-Regular",
      fontSize: 16,
      color: "#666",
    },
    rating: {
      fontFamily: "Font-Medium",
      fontSize: 16,
      color: "#ffb800",
      marginTop: 4,
    },
    sectionTitle: {
      fontFamily: "Font-Bold",
      fontSize: 18,
      color: "#000",
      marginVertical: 15,
    },
    slotContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 20,
    },
    slot: {
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderRadius: 20,
      backgroundColor: "#f3e9fc",
    },
    slotSelected: {
      backgroundColor: "#5E00A1",
    },
    slotText: {
      fontFamily: "Font-Regular",
      color: "#5E00A1",
    },
    slotTextSelected: {
      color: "#fff",
      fontFamily: "Font-Medium",
    },
    noSlot: {
      fontFamily: "Font-Regular",
      color: "#999",
    },
    note: {
      borderWidth: 1,
      borderColor: "#eee",
      borderRadius: 12,
      padding: 15,
      fontFamily: "Font-Regular",
      fontSize: 14,
      marginBottom: 20,
      minHeight: 80,
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
      fontFamily: "Font-Bold",
      fontSize: 16,
      color: "#fff",
    },
  });