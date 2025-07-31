import {
    responsiveFontSize,
    responsiveHeight,
    responsiveWidth,
} from "@/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PlanCard = (props) => {
  console.log(props.CardDetails);
  const { title, price, bgColor, text, offer, btnText, btnbg, btntxtClr } =
    props.CardDetails;
  return (
    <View style={[styles.FreeCard, { backgroundColor: bgColor }]}>
      <View style={styles.CardBody}>
        <Text style={[styles.CardHeader, { color: text }]}>{title}</Text>
        <View style={styles.duration}>
          <Text style={[styles.freeText, { color: text }]}>{price}</Text>
          <Text style={[styles.MonthText, { color: text }]}>/month</Text>
        </View>
        <TouchableOpacity
          style={[styles.SelectBtn, { backgroundColor: btnbg }]}
        >
          <Text style={[styles.SelectText, { color: btntxtClr }]}>
            {btnText}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.CardFooter}>
        {offer.map((o) => {
          return (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: responsiveWidth(8),
                alignItems: "center",
              }}
            >
              <Text style={[styles.checkMark, { color: text }]}>
                <Ionicons name="checkmark" size={20} color={text} />
              </Text>
              <Text style={[styles.footerText, { color: text }]}>{o} </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PlanCard;

const styles = StyleSheet.create({
  FreeCard: {
    display: "flex",
    minHeight: responsiveHeight(211),
    width: responsiveWidth(342),
    borderRadius: responsiveWidth(8),
    gap: responsiveHeight(16),
    borderColor: "#E0DEE3",
    borderWidth: 1,
    padding: 24,
  },
  CardHeader: {
    width: responsiveWidth(292),
    fontFamily: "Font-Bold",
    fontSize: responsiveFontSize(16),
  },
  CardBody: {
    gap: 4,
  },
  CardFooter: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    width: responsiveWidth(292),
  },
  duration: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: responsiveHeight(8),
  },
  freeText: {
    fontFamily: "Font-Bold",
    fontWeight: "800",
    fontSize: responsiveFontSize(36),
  },
  MonthText: {
    fontFamily: "Font-Bold",
    fontWeight: "800",
    fontSize: responsiveFontSize(16),
    bottom: 0,
  },
  SelectBtn: {
    display: "flex",
    justifyContent: "center",
    width: responsiveWidth(292),
    height: responsiveHeight(40),
    borderRadius: 8,
    alignItems: "center",
  },
  SelectText: {
    fontSize: responsiveFontSize(14),
    textAlign: "center",
    fontFamily: "Font-Bold",
    fontWeight: "700",
  },
  checkMark: {},
  footerText: {
    fontSize: responsiveFontSize(13),
    fontFamily: "Font-Regular",
    fontWeight: "400",
    color: "#141214",
  },
});
