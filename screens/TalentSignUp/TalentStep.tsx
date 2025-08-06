import ApiService from "@/services/ApiService";
import {
  responsiveFontSize,
  responsiveWidth,
} from "@/utils/responsive";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TalentStepStyles as styles } from "../../assets/styles/TalentStep.styles";

const TalentStep = ({ navigation }) => {
  const [selectedTalents, setSelectedTalents] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [otherTalent, setOtherTalent] = useState("");
  const [talentsList, setTalentsList] = useState([]);

  useEffect(() => {
    const fetchTalents = async () => {
      try {
        const response = await ApiService.get("talent-categories");
        setTalentsList(response.data.categories);
      } catch (error) {
        console.error("Failed to fetch talents:", error);
      }
    };

    fetchTalents();
  }, []);

  const handleTalentSelect = (name: string) => {
    setSelectedTalents((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((t) => t !== name)
        : [...prevSelected, name]
    );
  };

  const filteredTalents = talentsList.filter((talent) =>
    talent.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const isSelected = selectedTalents.includes(item.name);

    return (
      <TouchableOpacity
        style={[
          styles.talentItem,
          isSelected && styles.talentItemSelected,
        ]}
        onPress={() => handleTalentSelect(item.name)}
        activeOpacity={0.7}
      >
        <Icon
          name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"}
          size={responsiveFontSize(20)}
          color={isSelected ? "#6D028E" : "#F5F5F5"}
        />
        <Text
          style={[
            styles.talentText,
            isSelected && styles.talentTextSelected,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={["#6D028E", "rgba(109, 2, 142, 0)"]}
        locations={[0.4823, 1]}
        style={styles.backgroundGradient}
      />
      <View style={styles.con1} pointerEvents="none" />
      <View style={styles.con2} pointerEvents="none" />
      <View style={styles.contentCardBackground} pointerEvents="none" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButtonContainer}
          onPress={() => navigation.goBack()}
        >
          <Icon
            name="arrow-left"
            size={responsiveFontSize(20)}
            color="white"
          />
        </TouchableOpacity>

        <View style={styles.progressBarContainer}>
          <View style={styles.progressCircleActive}>
            <Text style={styles.progressTextActive}>1</Text>
          </View>
          <View style={styles.progressLineActive} />
          <View style={styles.progressCircleInactive}>
            <Text style={styles.progressTextInactive}>2</Text>
          </View>
          <View style={styles.progressLineInactive} />
          <View style={styles.progressCircleInactiveBordersOnly}>
            <Text style={styles.progressTextInactiveGray}>3</Text>
          </View>
        </View>

        <View style={{ width: responsiveWidth(40) }} />
      </View>

      {/* Talent List */}
      <FlatList
        data={filteredTalents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.mainContentArea}>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>
                What talent are you looking to obtain?
              </Text>
            </View>

            <View style={styles.searchContainer}>
              <Feather
                name="search"
                size={responsiveFontSize(20)}
                color="#6D028E"
                style={{ fontWeight: "700" }}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Search Talent"
                placeholderTextColor="#5F729D"
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>
          </View>
        }
        ListFooterComponent={
          selectedTalents.includes("Other") && (
            <TextInput
              style={styles.otherInput}
              value={otherTalent}
              onChangeText={setOtherTalent}
              placeholder="Enter your talent here"
              placeholderTextColor={"#527bad"}
            />
          )
        }
      />

      {/* Next Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.replace("JobStep2")}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TalentStep;
