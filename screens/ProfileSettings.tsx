import { Feather } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ToggleSwitch from 'toggle-switch-react-native';

const SettingsScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] =
    React.useState(false);
  const toggleNotification = () =>
    setIsNotificationEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={24} color="black" />
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

      {/* Followers and Following */}
      <View style={styles.followContainer}>
        <View style={styles.followBox}>
          <Text style={styles.followNumber}>1.5K</Text>
          <Text style={styles.followLabel}>Followers</Text>
        </View>
        <View style={styles.followBox}>
          <Text style={styles.followNumber}>750</Text>
          <Text style={styles.followLabel}>Following</Text>
        </View>
      </View>

      {/* Profile Section */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View>
          <Text style={styles.sectionTitle}>Profile</Text>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/pencil.png")} />
            </View>
            <Text style={styles.menuText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/save.png")} />
            </View>
            <Text style={styles.menuText}>Wishlist</Text>
          </TouchableOpacity>
        </View>

        {/* General Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>General</Text>
          <View style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/bell.png")} />
            </View>
            <Text style={styles.menuText}>Notification Alert</Text>
          <View style={{left:80}}>
                <ToggleSwitch
                isOn={isNotificationEnabled}
                onColor="#6D028E"
                offColor="#F2F2F5"
                trackOffStyle={{height:31,width:51,padding:2}}
                trackOnStyle={{height:31,width:51,padding:2}}
                disabled={false}
            
                thumbOnStyle={{ backgroundColor: 'white' }}
                thumbOffStyle={{ backgroundColor: 'white' }}
                onToggle={() => setIsNotificationEnabled(!isNotificationEnabled)}
                
                />
          </View>
          </View>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/contact.png")} />
            </View>
            <Text style={styles.menuText}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              {" "}
              <Image source={require("../assets/icons/file.png")} />
            </View>
            <Text style={styles.menuText}>Terms and Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/shield.png")} />
            </View>
            <Text style={styles.menuText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Content</Text>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Image source={require("../assets/icons/upload.png")} />
            </View>
            <Text style={styles.menuText}>Upload Content</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIcon}>
              {" "}
              <Image source={require("../assets/icons/hamburger.png")} />
            </View>
            <Text style={styles.menuText}>Manage Content</Text>
          </TouchableOpacity>
        </View>

        {/* Delete Account */}
        <View style={styles.DeleteBtnContianer}>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    padding: 16,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 72,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Font-Bold",
  },
  bellContainer: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#F2F2F5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    height: 72,
    width: 390,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileUsername: {
    fontSize: 14,
    color: "#555",
  },

  followContainer: {
    flexDirection: "row",
    height: 109,
    width: 390,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  followBox: {
    height: 85,
    width: 173,
    padding: 12,
    borderWidth: 1,
    borderColor: "#DEE0E3",
    borderRadius: 8,
  },
  followNumber: {
    fontFamily: "Font-Bold",
    fontSize: 24,
    color: "#121417",
    fontWeight: "700",
    lineHeight: 30,
  },
  followLabel: {
    fontFamily: "Font-Regular",
    fontSize: 14,
    lineHeight: 21,
    color: "#6B7582",
    fontWeight: "400",
  },
  sectionContainer: {},
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Font-Bold",
    fontWeight: "700",
    width: 390,
    height: 47,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  menuItem: {
    height: 56,
    width: 390,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  menuIcon: {
    height: 40,
    width: 40,
    backgroundColor: "#F2F2F5",
    borderRadius: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    fontSize: 16,
    fontFamily: "Font-Regular",
    lineHeight: 24,
    fontWeight: "400",
    color: "#121417",
  },
  DeleteBtnContianer: {
    height: 64,
    width: 390,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  deleteButton: {
    backgroundColor: "#FE5120",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 139,
    alignSelf: "center",
  },
  deleteButtonText: {
    fontFamily: "Font-Bold",
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },
  switch: {
    borderRadius: 15.5,
    height: 31,
    width: 51,
    backgroundColor: "red",
    justifyContent: "center",
  },
});
