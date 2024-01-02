import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  BackHandler,
  TouchableHighlight,
} from "react-native";

import React, { useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

// Icons
import { FontAwesome5, AntDesign } from "@expo/vector-icons";
import HeaderTop from "../components/customComponents/HeaderTop";

// My import

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderTop title={"Profile"} />
      <Main />
    </View>
  );
}

function Main() {
  const insets = useSafeAreaInsets();
  const screenHeight = Dimensions.get("window").height;
  console.log(screenHeight);
  return (
    <ScrollView>
      <View
        style={[
          styles.container,
          {
            paddingLeft: insets.left + 10,
            paddingRight: insets.right + 10,
            paddingTop: insets.top + 12,
            paddingBottom: insets.bottom + 10,
          },
        ]}
      >
        <View style={styles.bigIconContainer}>
          <View style={styles.bigIcon}>
            <FontAwesome5 name="user" size={40} color="#999" />
          </View>
        </View>
        <About />
      </View>
    </ScrollView>
  );
}

function About() {
  return (
    <View style={styles.aboutContainer}>
      <View style={styles.infoBox}>
        <FontAwesome5 name="user-alt" style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>
            Username:{"  "}
            <Text style={styles.infoDetail}>Galadima</Text>
          </Text>
          <Text style={styles.infoDetail}>
            Use this name to connect with others in the Online Battle section
          </Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5 name="user-alt" style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>
            Fullname:{"  "}
            <Text style={styles.infoDetail}>Ahmed Success </Text>
          </Text>
          <Text style={styles.infoDetail}>
            Note: This is the name visible to everyone in the National Watchers
            and Group Exam section.
          </Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5 name="user-alt" style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>
            Account Type:{"  "}
            <Text style={styles.infoDetail}>Student</Text>
          </Text>
        </View>
      </View>

      <View style={styles.infoBox}>
        <FontAwesome5 name="user-alt" style={styles.infoIcon} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoTitle}>
            Email:{"  "}
            <Text style={styles.infoDetail}>succhycomic@gmail.com</Text>
          </Text>
        </View>
      </View>

      <View style={styles.poweredByContainer}>
        <Text style={styles.poweredByText}>Powered by</Text>
        <Text style={styles.poweredByEculisCode}>Eculis Code</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 12,
    paddingBottom: 10,
    flex: 1,
  },
  bigIconContainer: {
    height: 100,
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bigIcon: {
    borderWidth: 2.5,
    borderColor: "#999",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 20,
    right: 0,
    bottom: 5,
    zIndex: 1,
    backgroundColor: "white",
  },
  aboutContainer: {
    paddingVertical: 15,
    marginBottom: 10,
  },
  infoBox: {
    borderWidth: 0.5,
    borderColor: "#999",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    gap: 10,
    flex: 1,
    marginBottom: 10,
  },
  infoIcon: {
    fontSize: 18,
    color: "black",
  },
  infoTextContainer: {
    justifyContent: "center",
    flex: 1,
  },
  infoTitle: {
    fontSize: 17,
    fontWeight: "600",
    color: "black",
  },
  infoDetail: {
    fontSize: 16,
    fontWeight: "500",
    marginTop: 8,
    marginBottom: 4,
  },
  poweredByContainer: {
    marginTop: 80,
    padding: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  poweredByText: {
    fontSize: 16,
    fontWeight: "500",
  },
  poweredByEculisCode: {
    fontSize: 24,
    fontWeight: "900",
  },
});
