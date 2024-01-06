import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

// my import
import YearPickerModal from "./YearPickerModal.js";
import SubjectPickerModal from "./TopicPickerModal.js";
import {COLORS} from "../../../../Colors.js";


export default function QuestButton({
  subject,
  pickerType,
  index,
  scrollFunc,
}) {
  const insets = useSafeAreaInsets();
  // Switch and TouchableHighlight state
  const [isToggleOn, setIsToggleOn] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // Change to single selected button

  const handleToggle = () => {
    scrollFunc(index);
    setIsToggleOn(!isToggleOn);
    setSelectedButton(index + 1); // Be careful here, removing the "1" will mess your code
  };

  // PickerModal Visibility
  const [modalVisible, setModalVisible] = useState(false);
  const handlePickerToggle = () => setModalVisible(!modalVisible);

  return (
    <View
      style={{
        paddingLeft: insets.left + 10,
        paddingRight: insets.right + 10,
        flex: 1,
      }}
    >
      <View
        style={[
          styles.container,
          { backgroundColor: isToggleOn ? COLORS.primary : COLORS.secondary },
        ]}
      >
        <View style={styles.containerCircle}>
          <Text style={styles.containerCircleText}>{subject.name[0]}</Text>
        </View>
        <TouchableOpacity
          onPress={handleToggle}
          underlayColor="lightgray"
          activeOpacity={0.9}
          style={styles.buttonContainer}
        >
          <View style={styles.buttonContainerRect}>
			<Text
				style={{
					fontSize: 17,
					fontWeight: "500",
					color: isToggleOn ? COLORS.mainBtnText : "black"
				}}
				numberOfLines ={1}
			>
				{subject.name}
			</Text>
            
          </View>
        </TouchableOpacity>
      </View>
       {isToggleOn && (
        <View style={{ justifyContent: "center", paddingHorizontal: 25 }}>
          <View style={styles.attachedToButton}>
            <View style={styles.attachedToButtonLeft}>
              <SubjectPickerModal />
            </View>
            <View style={styles.attachedToButtonRight}>
              <YearPickerModal />
            </View>
          </View>
        </View>
      )} 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
	marginBottom: 6,
    borderWidth: 1,
	borderColor: "#999",
	elevation: 10,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexDirection: "space-between",
    paddingTop: 10.8,
    paddingBottom: 10.8,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
  },
  containerCircle: {
    borderRightWidth: 3,
    height: 50,
    width: 38,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  containerCircleText: {
    fontSize: 19,
  },
  buttonContainerRect: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
  },
  buttonRectText: {
    fontSize: 18,
  },


  // Attached View to Button on clicked
  attachedToButton: {
    minHeight: 100,
    flexDirection: "row",
    marginBottom: 10,
	gap: 10,
  },
  attachedToButtonLeft: {
    flex: 1,
    borderWidth: 2,
	borderColor: COLORS.primary,
	borderRadius: 10, 
    justifyContent: "space-between",
    alignItems: "center",
  },
  attachedToButtonRight: {
	flex: 1,
	borderWidth: 2,
	borderColor: COLORS.primary,
	borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
