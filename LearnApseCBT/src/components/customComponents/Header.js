import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


// My import
import HeaderNav from "./HeaderNav";
import {COLORS} from "../../../Colors.js"


function Header({ userName }) {
  console.log("username  ===>hhh", userName)
  const insets = useSafeAreaInsets();
  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + 16,
          paddingRight: insets.right + 10,
          paddingLeft: insets.left + 10,
        },
      ]}
    >
      <View style={styles.top}>
        <View style={{display:"flex",flexDirection:"column"}}>
          <Text style={styles.learnApseText}>LearnApse</Text>

          <View style={{display:"flex", flexDirection:"row"}}>

          <Text style={styles.greetingText}>Hi,</Text>
          <Text style={styles.greetingText1}> {userName}</Text>

          </View>

        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            gap: 8,
          }}
        >
          <InputFieldViewBox />
          <TouchableHighlight
            onPress={openModal}
            activeOpacity={0.9}
            underlayColor="lightgray"
            style={[
              styles.topIcons,
              { width: 50, height: 50, borderRadius: 25 },
            ]}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 4,
                padding: 2,
              }}
            >
              <MaterialIcons
                name="menu"
                size={22}
                color="white"
                style={{ marginTop: -0.6 }}
              />
            </View>
          </TouchableHighlight>
          <HeaderNav visible={modalVisible} onClose={closeModal} />
        </View>
      </View>
    </View>
  );
}

function InputFieldViewBox() {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={
        () => navigation.navigate("SearchInputScreen") // Search input Screen component is in SearchInputScreen.js
      }
      activeOpacity={0.9}
      underlayColor="lightgray"
      style={styles.topIcons}
    >
      <View style={styles.inputContainerTouchable}>
        <Text>
          <Ionicons name="search" size={23} color="white" />
        </Text>
      </View>
    </TouchableHighlight>
  );
}

//height:  useWindowDimensions().height * 0.1873,
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingBottom: 8,
  },
  learnApseText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  top: {
    flexDirection: "row",
    marginBottom: -5,
    justifyContent: "space-between",
  },
  topIcons: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
    borderRadius: 25,
  },
  inputContainerText: {
    fontSize: 15,
    color: "#555",
    fontWeight: "200",
    letterSpacing: 0.18,
  },
  inputContainerTouchable: {
    paddingTop: 3,
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "300",
    color: "white",
  },
  greetingText1: {
    fontSize: 18,
    fontWeight: "300",
    color: "black",
  },
});


export default Header;
