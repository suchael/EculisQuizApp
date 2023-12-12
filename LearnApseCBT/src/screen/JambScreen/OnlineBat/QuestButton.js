import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// my import
import TruncatedText from "../PQuestion/TruncatedText.js";
import SubjectPickerModal from "../PQuestion/TopicPickerModal.js";

export default function QuestButton({
  subject,
  showTopicBar,
  selectedSubject,
  onSelect,
}) {
  const insets = useSafeAreaInsets();
  // Switch and TouchableHighlight state
  const [isToggleOn, setIsToggleOn] = useState(false);
  const handleToggle = () => setIsToggleOn(!isToggleOn);

  const handlePress = () => {
    onSelect(subject);
  };

  const isSelected = selectedSubject === subject;

  return (
    <View
      style={{
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        flex: 1,
      }}
    >
      <TouchableOpacity
        onPress={handlePress}
        underlayColor="lightgray"
        activeOpacity={0.9}
        style={[
          styles.buttonContainer,
          {
            backgroundColor: isSelected ? "white" : "gray",
            borderWidth: isSelected === true ? 2 : null,
          },
        ]}
      >
        <View style={styles.buttonContainerRect}>
          <View style={styles.switchContainer}>
            <View
              style={{
                width: 16,
                height: 16,
                borderRadius: 8,
                backgroundColor: isSelected ? "blue" : "#666",
              }}
            ></View>
          </View>
          <View style={{ flex: 1 }}>
            <TruncatedText
              text={subject.name}
              color={isSelected ? "black" : "white"}
              style={{ borderWidth: 2 }}
            />
          </View>
        </View>
      </TouchableOpacity>
      {isSelected && showTopicBar === true ? (
        <View style={{ justifyContent: "center", paddingHorizontal: 25 }}>
          <View style={styles.attachedToButton}>
            <View style={[styles.attachedToButtonLeft, { borderRadius: 10 }]}>
              <SubjectPickerModal />
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 6,
    paddingVertical: 14,
    borderRadius: 10,
  },
  buttonContainerRect: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    flex: 1,
  },
  buttonRectText: {
    fontSize: 18,
  },

  // Switch Container
  switchContainer: {
    padding: 3,
    borderRadius: 20,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2.4,
    borderColor: "#666",
  },

  attachedToButton: {
    borderWidth: 2,
    borderTopWidth: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    //minHeight:  150,
    minHeight: 80,
    flexDirection: "row",
    padding: 5,
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
