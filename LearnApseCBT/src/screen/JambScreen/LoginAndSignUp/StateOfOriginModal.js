import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  ScrollView,
  StyleSheet,
  BackHandler,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

const NUMBER = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function StateOfOriginModal({ Type }) {
  const [selectedNumber, setSelectedNumber] = useState("Abia");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectNumber = (number) => {
    setSelectedNumber(number);
    closeAndResetModal();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        if (modalVisible) {
          closeAndResetModal();
          return true; // Prevent default behavior (exit the app)
        }
        return false; // Let the default behavior continue (back navigation)
      }
    );

    return () => backHandler.remove();
  }, [modalVisible]);

  const renderNumber = (number) => (
    <TouchableOpacity
      key={number}
      style={styles.option}
      onPress={() => selectNumber(number)}
    >
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: "transparent" }]}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          flex: 1,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{Type}: </Text>

        <TouchableHighlight
          onPress={openModal}
          underlayColor="lightgray"
          style={{
            borderWidth: 2,
            borderRadius: 4,
            borderColor: "#888",
            backgroundColor: "lightgray",
          }}
        >
          <View
            style={{
              maxWidth: 170,
              gap: 30,
              paddingHorizontal: 4,
              paddingVertical: 6,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              {selectedNumber}
            </Text>
            <Fontisto name="angle-down" size={16} color="black" />
          </View>
        </TouchableHighlight>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeAndResetModal}
      >
        {/*Modal Wrapper*/}
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderColor: "#999",
                  paddingVertical: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  State
                </Text>
              </View>
              <ScrollView>{NUMBER.map(renderNumber)}</ScrollView>
            </View>
          </View>
        </TouchableHighlight>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    backgroundColor: "lightblue",
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.65)",
  },
  modal: {
    width: "40%",
    height: "64%",
    backgroundColor: "white",
    overflow: "hidden",
  },
  pickerContainer: {
    flex: 1,
  },
  option: {
    padding: 10,
    //borderBottomWidth: 1.4,
    borderBottomColor: "lightgray",
    justifyContent: "center",
    alignItems: "center",
  },
});
