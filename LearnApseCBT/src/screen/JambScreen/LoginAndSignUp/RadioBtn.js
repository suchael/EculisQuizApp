import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

export default function RadioButton({ text, selected, onSelect }) {
  return (
    <TouchableHighlight onPress={onSelect} underlayColor="transparent" style = {{ paddingVertical: 12,}}>
      <View style={styles.radioButton}>
        <View
          style={[styles.radioCircle, selected && styles.selectedRadioCircle]}
        />
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>{text}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    //borderWidth:2,
    paddingVertical: 3,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#000",
    marginRight: 6,
  },
  selectedRadioCircle: {
    backgroundColor: "#000",
  },
});
