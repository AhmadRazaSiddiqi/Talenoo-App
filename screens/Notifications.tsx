import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";

const notifications = [
  {
    id: "1",
    day: "Today",
    items: [
      {
        id: "1-1",
        type: "message",
        avatar: require("../assets/images/sophia.png"), // replace with your local image
        text: "New message: @Sophia_R",
        time: "10:30 AM",
      },
      {
        id: "1-2",
        type: "booking",
        icon: require("../assets/images/calendar.png"),
        text: "Booking confirmed for your",
        time: "11:45 AM",
      },
      {
        id: "1-3",
        type: "booking",
        icon: require("../assets/images/calendar.png"),
        text: "Booking confirmed for your",
        time: "11:45 AM",
      },
    ],
  },
  {
    id: "2",
    day: "Yesterday",
    items: [
      {
        id: "2-1",
        type: "account",
        icon: require("../assets/images/security.png"),
        text: "Account update: Password",
        time: "3",
      },
      {
        id: "2-2",
        type: "message",
        avatar: require("../assets/images/sophia.png"),
        text: "New message: @Sophia_R",
        time: "10",
      },
      {
        id: "2-3",
        type: "booking",
        icon: require("../assets/images/security.png"),
        text: "Booking request received from",
        time: "4:55 PM",
      },
      {
        id: "2-4",
        type: "booking",
        icon: require("../assets/images/calendar.png"),
        text: "Booking request received from",
        time: "4:55 PM",
      },
      {
        id: "2-5",
        type: "message",
        avatar: require("../assets/images/sophia.png"),
        text: "New message: @Sophia_R",
        time: "10:30 AM",
      },
      {
        id: "2-6",
        type: "booking",
        icon: require("../assets/images/calendar.png"),
        text: "Booking request received from",
        time: "4:55 PM",
      },
    ],
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {item.type === "message" ? (
        <Image source={item.avatar} style={styles.avatar} />
      ) : (
        <View style={styles.iconContainer}>
          <Image source={item.icon} style={styles.icon} />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
      {item.type!=="message" ? (<TouchableOpacity style={styles.arrowContainer}>
        <Icon name="arrow-right" size={28} color="#000" />
      </TouchableOpacity>):null}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(section) => section.id}
        renderItem={({ item: section }) => (
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionHeader}>{section.day}</Text>
            {section.items.map((item) => (
              <View key={item.id}>{renderItem({ item })}</View>
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height:806
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    color: "purple",
    marginVertical: 20,
    alignSelf: "center",
    letterSpacing:0,
    fontFamily:"PlusJakartaSans-Bold",
    lineHeight:28,
    
  },
  sectionContainer: {
    marginBottom: 20,
    // backgroundColor:'yellow'
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "700",
    color: "#6D028E",
    height:47,
    width:390,
    paddingHorizontal:16,
    paddingTop:16,
    paddingBottom:8,
    lineHeight:23,
    fontFamily:'PlusJakartaSans-Bold',
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor:'red',
    paddingVertical:8,
    paddingHorizontal:16,
    width:390,
    height:72,
    alignSelf:'center'
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  icon: {
    alignSelf: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight:24,
    fontFamily:'PlusJakartaSans-Regular',
    color:'#121417'
  },
  time: {
    fontSize: 14,
    color: "#6B7582",
  lineHeight:21
  },
  arrowContainer: {
    justifyContent:'center',
    alignItems:'center'
  },
});
