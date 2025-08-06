import { responsiveFontSize, responsiveHeight, responsiveWidth } from "@/utils/responsive";
import { Feather } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from "toggle-switch-react-native";

const SettingsScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(false);
  const toggleNotification = () => setIsNotificationEnabled(prev => !prev);

  const DATA = [
    { section: "Profile" },
    {
      icon: require("../assets/icons/pencil.png"),
      label: "Edit Profile",
    },
    {
      icon: require("../assets/icons/save.png"),
      label: "Wishlist",
    },
    { section: "General" },
    {
      icon: require("../assets/icons/bell.png"),
      label: "Notification Alert",
      toggle: true,
    },
    {
      icon: require("../assets/icons/contact.png"),
      label: "Contact Us",
    },
    {
      icon: require("../assets/icons/file.png"),
      label: "Terms and Conditions",
    },
    {
      icon: require("../assets/icons/shield.png"),
      label: "Privacy Policy",
    },
    { section: "Content" },
    {
      icon: require("../assets/icons/upload.png"),
      label: "Upload Content",
    },
    {
      icon: require("../assets/icons/hamburger.png"),
      label: "Manage Content",
    },
    { section: "Delete" },
  ];

  const renderItem = ({ item }) => {
    if (item.section) {
      if (item.section === "Delete") {
        return (
          <View style={styles.DeleteBtnContianer}>
            <TouchableOpacity style={styles.deleteButton}>
              <Text style={styles.deleteButtonText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        );
      }
      return <Text style={styles.sectionTitle}>{item.section}</Text>;
    }

    return (
      <TouchableOpacity style={styles.menuItem} disabled={item.toggle}>
        <View style={styles.menuIcon}>
          <Image source={item.icon} />
        </View>
        <Text style={styles.menuText}>{item.label}</Text>
        {item.toggle && (
          <View style={{ marginLeft: "auto" }}>
            <ToggleSwitch
              isOn={isNotificationEnabled}
              onColor="#6D028E"
              offColor="#F2F2F5"
              trackOffStyle={{ height: responsiveHeight(31), width: responsiveWidth(51), padding: 2 }}
              trackOnStyle={{ height: responsiveHeight(31), width: responsiveWidth(51), padding: 2 }}
              thumbOnStyle={{ backgroundColor: "white" }}
              thumbOffStyle={{ backgroundColor: "white" }}
              onToggle={toggleNotification}
            />
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={responsiveFontSize(20)} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity style={styles.bellContainer}>
          <Image source={require("../assets/icons/bell.png")} />
        </TouchableOpacity>
      </View>

      {/* Profile Info */}
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/profile.png")}
          style={styles.avatar}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>Ava Harper</Text>
          <Text style={styles.profileUsername}>@ava_h</Text>
        </View>
        <TouchableOpacity>
          <Image source={require("../assets/icons/qr.png")} />
        </TouchableOpacity>
      </View>

      {/* Followers */}
      <View style={styles.followContainer}>
        <Pressable onPress={() => navigation.navigate("follower")} style={styles.followBox}>
          <Text style={styles.followNumber}>1.5K</Text>
          <Text style={styles.followLabel}>Followers</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("following")} style={styles.followBox}>
          <Text style={styles.followNumber}>750</Text>
          <Text style={styles.followLabel}>Following</Text>
        </Pressable>
      </View>

      {/* List Content */}
      <FlatList
        data={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    paddingBottom: responsiveHeight(20),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: responsiveHeight(72),
    paddingVertical: responsiveHeight(16),
    paddingHorizontal: responsiveWidth(16),
  },
  headerTitle: {
    fontSize: responsiveFontSize(20),
    fontFamily: "Font-Bold",
  },
  bellContainer: {
    height: responsiveHeight(40),
    width: responsiveWidth(40),
    borderRadius: responsiveWidth(8),
    backgroundColor: "#F2F2F5",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: responsiveWidth(16),
  },
  avatar: {
    width: responsiveWidth(56),
    height: responsiveWidth(56),
    borderRadius: responsiveWidth(28),
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: responsiveWidth(12),
  },
  profileName: {
    fontSize: responsiveFontSize(16),
    fontWeight: "bold",
  },
  profileUsername: {
    fontSize: responsiveFontSize(14),
    color: "#555",
  },
  followContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: responsiveWidth(16),
    paddingVertical: responsiveHeight(12),
    gap: responsiveWidth(12),
  },
  followBox: {
    flex: 1,
    padding: responsiveWidth(16),
    borderWidth: 1,
    borderColor: "#DEE0E3",
    borderRadius: responsiveWidth(8),
  },
  followNumber: {
    fontFamily: "Font-Bold",
    fontSize: responsiveFontSize(24),
    color: "#121417",
    fontWeight: "700",
  },
  followLabel: {
    fontFamily: "Font-Regular",
    fontSize: responsiveFontSize(14),
    color: "#6B7582",
  },
  sectionTitle: {
    fontSize: responsiveFontSize(18),
    fontFamily: "Font-Bold",
    paddingHorizontal: responsiveWidth(16),
    paddingTop: responsiveHeight(16),
    paddingBottom: responsiveHeight(8),
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: responsiveWidth(16),
    height: responsiveHeight(56),
    gap: responsiveWidth(16),
  },
  menuIcon: {
    height: responsiveHeight(40),
    width: responsiveHeight(40),
    backgroundColor: "#F2F2F5",
    borderRadius: responsiveWidth(8),
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: responsiveFontSize(16),
    fontFamily: "Font-Regular",
    color: "#121417",
  },
  DeleteBtnContianer: {
    paddingVertical: responsiveHeight(12),
    paddingHorizontal: responsiveWidth(16),
  },
  deleteButton: {
    backgroundColor: "#FE5120",
    borderRadius: responsiveWidth(20),
    alignItems: "center",
    justifyContent: "center",
    height: responsiveHeight(40),
    width: responsiveWidth(139),
    alignSelf: "center",
  },
  deleteButtonText: {
    fontFamily: "Font-Bold",
    color: "#fff",
    fontSize: responsiveFontSize(14),
    fontWeight: "700",
  },
});
