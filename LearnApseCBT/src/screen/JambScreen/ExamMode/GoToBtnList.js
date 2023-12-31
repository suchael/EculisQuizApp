import { View, Text, TouchableOpacity } from "react-native";

import React, { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

// my import
import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";
import {COLORS} from "../../../../Colors.js";


const GoToBtnList = React.memo(() => {
  const navigation = useNavigation();
  const { totalPages, goToPage, currentPage } = useContext(ShowQuestionContext);
  const [selectedNumber, setSelectedNumber] = useState(currentPage);

  const questionNumbers = Array.from(
    { length: totalPages - 530 },
    (_, index) => index + 1
  );

  return (
    <View
      style={{
        elevation: 10,
        backgroundColor: COLORS.secondary,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingHorizontal: 2,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: COLORS.primary,
        paddingVertical: 5,
        borderRadius: 10,
      }}
    >
      {questionNumbers.map((number, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: currentPage - 1 === index ? COLORS.lightPrimary : "white",
            elevation: 10,
            width: 48,
            height: 52,
            borderWidth: 1,
            borderColor: COLORS.primary,
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
          }}
          onPress={() => {
            goToPage(index + 1);
            navigation.setParams({ currentPage: index + 1 }); //Go to next page if currentPage changes
            console.log("Cur page: ", currentPage);
            setSelectedNumber(index);
            console.log("Num", selectedNumber, "\n");
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: "900", color: "black" }}>
            {number}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
});

export default GoToBtnList;
