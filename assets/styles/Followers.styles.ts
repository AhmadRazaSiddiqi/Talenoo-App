export const Followingstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    headerContainer: {
      flexDirection: "row",
      height: 72,
      width: 390,
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 16,
    },
    headerTitle: {
      fontSize: 18,
      fontFamily: "Font-Bold",
      color: "#6D028E",
      fontWeight: "700",
    },
    followerContainer: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 8,
      height: 72,
      width: 390,
      justifyContent: "space-between",
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
    },
    textContainer: {
      flex: 1,
      marginLeft: 12,
    },
    name: {
      fontSize: 16,
      fontFamily: "Font-Regular",
      color: "#121417",
      fontWeight: "500",
      lineHeight: 24,
    },
    profession: {
      fontSize: 14,
      fontFamily: "Font-Regular",
      color: "#6B7582",
      lineHeight: 21,
      fontWeight: "400",
    },
    removeButton: {
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 20,
    },
    removeButtonText: {
      fontSize: 14,
      fontFamily: "Font-Regular",
      fontWeight: "500",
      color: "#121417",
    },
  });
  