import React, { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import Icon from "react-native-vector-icons/Ionicons";
import { bookingRequestStyles as styles } from '../assets/styles/BookingRequest';

const renderCustomImageArrow = (direction:'left' | 'right') => {
  if (direction === 'left') {
    return <Image source={require('../assets/icons/leftArrow.png')} style={{ }} />;
  } else {
    return <Image source={require('../assets/icons/rightArrow.png')} style={{  }} />;
  }}
export default function BookingRequest() {
  const [selectedDate, setSelectedDate] = useState("2025-10-05");
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots: Record<string,string[]> = {
    "2025-10-05": ["10:00 - 11:00", "13:00 - 14:00"],
    "2025-10-06": ["10:00 - 11:00", "13:00 - 14:00"],
    "2025-10-07": ["10:00 - 11:00", "13:00 - 14:00", "15:00 - 16:00"],
  };

  LocaleConfig.locales[LocaleConfig.defaultLocale] = {
    monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], // This is the key change
    today: 'Today'
    
  };
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="close" size={26} color="#5E00A1" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Booking Request</Text>
        <View style={{ width: 26 }} />
      </View>

      {/* Profile */}
      <View style={styles.profile}>
        <Image
          source={{ uri: "https://cdn-icons-png.flaticon.com/512/921/921071.png" }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Sam I.</Text>
        <Text style={styles.role}>Chef</Text>
        <Text style={styles.rating}>⭐ 5.0</Text>
      </View>

      {/* Calendar */}
      <Text style={styles.sectionTitle}>Select Date</Text>
      <Calendar
        current={"2025-10-01"}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        renderArrow={renderCustomImageArrow}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#5E00A1",
            selectedTextColor: "#fff",
          },
        }}
        theme={{
          textDayFontFamily: "Font-Regular",
          textMonthFontFamily: "Font-Bold",
          textDayHeaderFontFamily: "Font-Medium",
          textDayHeaderFontWeight:'700',
         'stylesheet.calendar.header':{
          dayHeader:{
            color:'black',
            // fontWeight:'bold',
            fontFamily:'Font-Bold'
          },
          monthHeader:{
            color:'black'
          }
         },
          }
          
        }
      />

      {/* Slots */}
      <Text style={styles.sectionTitle}>Select Slot</Text>
      <View style={styles.slotContainer}>
        {slots[selectedDate] ? (
          slots[selectedDate].map((slot) => (
            <TouchableOpacity
              key={slot}
              style={[
                styles.slot,
                selectedSlot === slot && styles.slotSelected,
              ]}
              onPress={() => setSelectedSlot(slot)}
            >
              <Text
                style={[
                  styles.slotText,
                  selectedSlot === slot && styles.slotTextSelected,
                ]}
              >
                {slot}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.noSlot}>No slots available</Text>
        )}
      </View>

      {/* Note */}
      <Text style={styles.sectionTitle}>Note</Text>
      <TextInput
        style={styles.note}
        placeholder="Add note for the talent ..."
        placeholderTextColor="#999"
        multiline
      />

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Request Booking</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


