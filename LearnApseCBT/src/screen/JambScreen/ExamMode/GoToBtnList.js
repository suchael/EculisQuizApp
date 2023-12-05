import { View, Text, TouchableOpacity } from "react-native";

import React, { useState, useContext } from "react";

import { useNavigation } from "@react-navigation/native";

// my import
import { ShowQuestionContext } from "./ShowQuestionContext/Context.js";

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
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        paddingHorizontal: 2,
        paddingLeft: 10,
        borderWidth: 2,
        paddingVertical: 5,
        borderRadius: 10,
      }}
    >
      {questionNumbers.map((number, index) => (
        <TouchableOpacity
          key={index}
          style={{
            backgroundColor: selectedNumber === index ? "red" : "white",
            width: 48,
            height: 52,
            borderWidth: 2,
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
            margin: 2,
          }}
          onPress={() => {
            goToPage(index);
            navigation.setParams({ currentPage: index }); //Go to next page if currentPage changes
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
