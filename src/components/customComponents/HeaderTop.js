import { View, Text, StyleSheet, TouchableHighlight } from "react-native";

import React, { useEffect, useState } from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons"; // Import your icon libraries

const HeaderTop = ({ title }) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        paddingTop: insets.top + 12,
        paddingBottom: insets.bottom + 4,
        borderBottomWidth: 2,
        borderBottomColor: "gray",
      }}
    >
      <TouchableHighlight
        onPress={() => navigation.goBack()}
        activeOpacity={0.9}
        underlayColor="lightgray"
        style={{
          width: 60,
          height: 40,
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={27}
          color="#333"
          style={{ marginLeft: -4 }}
        />
      </TouchableHighlight>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "600", marginLeft: -50 }}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({});
