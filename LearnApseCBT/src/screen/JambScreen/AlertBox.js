import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  Easing,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

// My imports
import UnderLineTextBtn from "./ExamMode/UnderLineTextBtn.js";

export default function AlertBox({ userEmail }) {
  const navigation = useNavigation();
  const deviceWidth = Dimensions.get("window").width;
  const [position, setPosition] = useState(new Animated.Value(20));

  useEffect(() => {
    const moveText = () => {
      position.setValue(-25);
      Animated.timing(position, {
        toValue: 22,
        duration: 5600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(moveText);
    };

    moveText();
  }, []);

  console.log('Inside gaurav',userEmail)

  const content = (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 5,
      }}
    >
      <Animated.Text
        style={[styles.alertText, { transform: [{ translateX: position }] }]}
      >
        {userEmail
          ? "Welcome! Bored? Join students in the ongoing"
          : "You are not logged in, please"}
      </Animated.Text>
      {userEmail ? (
        <UnderLineTextBtn text="Online Battle" goTo="Online battle" />
      ) : (
        <UnderLineTextBtn text="Login" goTo="Login" />
      )}
    </View>
  );

  return <View style={styles.alert}>{content}</View>;
}

const styles = StyleSheet.create({
  alert: {
    //paddingHorizontal: 20,
    marginTop: 2,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: "#999",
    backgroundColor: "#FAFAFA",
    //borderRadius: 15,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 1,
  },
  alertText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
  },
  underlineText: {
    textDecorationLine: "underline",
    fontWeight: "600",
    fontSize: 17,
    color: "blue",
    backgroundColor: "white",
  },
});
