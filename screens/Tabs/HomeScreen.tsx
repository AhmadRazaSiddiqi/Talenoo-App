import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "../../utils/responsive.js";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Background Gradient */}
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        style={styles.background}
      />

      {/* Mask layers for blurred card effect */}
      <View style={styles.con1}></View>
      <View style={styles.con2}></View>

      <Text style={styles.dashboardHeading}>Dashboard</Text>
      <View style={styles.mainContentArea}>
        {/* Dashboard Heading */}

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Total Task</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1,240</Text>
            <Text style={styles.statLabel}>Total Hours</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5.0</Text>
            <Text style={styles.statStars}>
              {" "}
              <AntDesign name="star" size={12} color="#FACC15" />
              <AntDesign name="star" size={12} color="#FACC15" />
              <AntDesign name="star" size={12} color="#FACC15" />
              <AntDesign name="star" size={12} color="#FACC15" />
              <AntDesign name="star" size={12} color="#FACC15" />
            </Text>
          </View>
        </View>

        {/* Tabs */}
        <View style={styles.tabContainer}>
          <Text
            style={[
              styles.tabText,
              { color: "#24364C", borderColor: "#E5E7EB", borderWidth: 1 },
            ]}
          >
            Upcoming
          </Text>
          <Text
            style={[
              styles.tabText,
              { backgroundColor: "#F3E8FF", color: "#6D028E" },
            ]}
          >
            Completed
          </Text>
        </View>
        {/* Scrollable Tasks */}
        <ScrollView
          style={styles.taskList}
          showsVerticalScrollIndicator={false}
        >
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <View key={item} style={styles.taskCard}>
              <View style={styles.taskHeader}>
                <Image
                  source={require("../../assets/images/clientImage.png")}
                  style={styles.avatar}
                  resizeMode="cover"
                />
                <View>
                  <View>
                    <View style={{ flex: 1 }}>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          marginBottom: responsiveHeight(10),
                        }}
                      >
                        <Text style={styles.taskTitle}>Music and playing</Text>
                        <Text style={styles.taskRating}>
                          <AntDesign name="star" size={12} color="#FACC15" />
                          <AntDesign name="star" size={12} color="#FACC15" />
                          <AntDesign name="star" size={12} color="#FACC15" />
                          <AntDesign name="star" size={12} color="#FACC15" />
                          <AntDesign name="star" size={12} color="#FACC15" />
                          5.0
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={styles.taskSubTitle}>Madawi</Text>
                        <Text style={styles.status}>26 Oct, 2025</Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.taskDetails}>
                    <Text style={styles.taskTime}>
                      <MaterialCommunityIcons
                        name="clock"
                        size={12}
                        color="black"
                      />{" "}
                      10:00-11:00
                    </Text>
                  </View>

                  <Text style={styles.taskDescription}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: responsiveHeight(311),
  },
  con1: {
    position: "absolute",
    backgroundColor: "white",
    height: responsiveHeight(407),
    width: responsiveWidth(305),
    left: responsiveWidth(35),
    top: responsiveHeight(67),
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 0,
  },
  con2: {
    position: "absolute",
    backgroundColor: "white",
    height: responsiveHeight(407),
    width: responsiveWidth(325),
    left: responsiveWidth(25),
    top: responsiveHeight(73),
    borderRadius: 15,
    opacity: 0.3,
    zIndex: 0,
  },
  mainContentArea: {
    position: "absolute",
    backgroundColor: "#FFFFFF",
    width: responsiveWidth(345),
    alignSelf: "center",
    top: responsiveHeight(80),
    left: responsiveWidth(15),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: responsiveHeight(745),
    padding: responsiveWidth(15),
  },
  dashboardHeading: {
    position: "absolute",
    top: responsiveHeight(27),
    // left: responsiveWidth(148),
    fontSize: responsiveFontSize(16),
    width: responsiveWidth(108),
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "left",
    alignSelf: "center",
    fontFamily: "PlusJakartaSans-Regular",
    lineHeight: responsiveHeight(24),
    marginBottom: responsiveHeight(10),
    letterSpacing: 1,
  },
  statsContainer: {
    backgroundColor: "#FFFFFF",
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    top: responsiveHeight(104 - 80),
    height: responsiveHeight(52),
    width: responsiveWidth(325.98),
    left: responsiveWidth(25 - 15),
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontSize: responsiveFontSize(24),
    color: "#6D028E",
    fontFamily: "PlusJakartaSans-Regular",
  },
  statLabel: {
    fontSize: responsiveFontSize(12),
    color: "#24364C",
  },
  statStars: {
    fontSize: responsiveFontSize(12),
    color: "#FFC107",
  },
  tabContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2.8,

    // Android
    elevation: 3,
    height: responsiveHeight(50),
    width: responsiveWidth(345),
    top: responsiveHeight(176 - 80),
    left: 0,

    // backgroundColor:'red'
    // alignSelf:'flex-start'
  },
  tabText: {
    display: "flex",
    fontSize: responsiveFontSize(14),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999,
    width: responsiveWidth(152),
    height: responsiveHeight(36),
    fontFamily: "PlusJakartaSans-Regular",
    fontWeight: "400",
  },
  activeTab: {
    color: "#6D028E",
    backgroundColor: "#F3E8FF",
  },
  activeTabText: {
    fontSize: responsiveFontSize(14),
    color: "#6D028E",
    fontFamily: "PlusJakartaSans-Regular",
  },
  taskList: {
    height: responsiveHeight(520),
    position: "absolute",
    top: responsiveHeight(176 + 70 - 80),
  },
  taskCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: responsiveWidth(10),
    marginBottom: responsiveHeight(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    minHeight: responsiveHeight(177),
    width: responsiveWidth(304),
    marginInline: "auto",
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: responsiveHeight(5),
  },
  avatar: {
    width: responsiveWidth(40),
    height: responsiveWidth(40),
    borderRadius: 20,
    marginRight: responsiveWidth(10),
  },
  taskTitle: {
    fontSize: responsiveFontSize(14),
    fontWeight: "700",
    color: "#24364C",
  },
  taskSubTitle: {
    fontSize: responsiveFontSize(12),
    color: "#888888",
  },
  inProgressBadge: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    paddingHorizontal: responsiveWidth(8),
    paddingVertical: responsiveHeight(2),
  },
  inProgressText: {
    fontSize: responsiveFontSize(10),
    color: "#6D028E",
  },
  taskDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: responsiveHeight(5),
  },
  taskTime: {
    fontSize: responsiveFontSize(12),
    color: "#888888",
  },
  taskRating: {
    display: "flex",
    flexDirection: "row",
    fontSize: responsiveFontSize(13),
    fontWeight: 400,
    color: "#24364C",
    gap: responsiveWidth(1),
    alignItems: "center",
    fontFamily: "PlusJakartaSans-Regular",
    width: responsiveWidth(93.77),
    height: responsiveHeight(16),
    justifyContent: "center",
  },
  taskDescription: {
    fontSize: responsiveFontSize(12),
    color: "#24364C",
    width: responsiveWidth(219),
    lineHeight: responsiveHeight(20),
    fontFamily: "PlusJakartaSans-Regular",
    flexShrink: 1,
  },
  status: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    color: "#15803D",
    borderColor: "#E5E7EB",
    borderWidth: 1,
    fontSize: responsiveFontSize(12),
    borderRadius: 9999,
    width: responsiveWidth(83),
    height: responsiveHeight(20),
    fontWeight: 400,
  },
});
