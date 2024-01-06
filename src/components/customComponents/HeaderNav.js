import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

import { useSelector } from 'react-redux';

export default function HeaderNav({ visible, onClose }) {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const usertype = useSelector(state => state.usertype);
  

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      {/* Modal Wrapper */}
      <View style={styles.blurBackground}>
        <TouchableWithoutFeedback onPress={onClose}>
          {/* Modal Content */}
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                  navigation.navigate("UpdateQuestion");
                  onClose();
                }}
              >
                <Text style={styles.navBtnText}>Update Question</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                  navigation.navigate("Profile");
                  onClose();
                }}
              >
                <Text style={styles.navBtnText}>Profile</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                  navigation.navigate("ContactUs");
                  onClose();
                }}
              >
                <Text style={styles.navBtnText}>Contact Us</Text>
              </TouchableOpacity>


                          {usertype === "0" ? (
              <TouchableOpacity
                style={styles.LoginButton}
                onPress={() => {
                  navigation.navigate("Login");
                  onClose();
                }}
              >
                <Text style={styles.LoginTxt}>Login </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.navButton}
                onPress={() => {
                  navigation.navigate("Logout");
                  onClose();
                }}
              >
                <Text style={styles.navBtnText}>Logout</Text>
              </TouchableOpacity>
            )}

            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent black
  },
  centeredView: {
    flex: 1,
    width: "100%",
  },
  modalView: {
    margin: 20,
    gap: 10,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 200,
    position: "absolute",
    top: 45,
    right: -11,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "#888",
    borderRadius: 5,
  },

  LoginTxt: {
    color: 'white',
    fontSize: 17,
    fontWeight: "500",
  },

  LoginButton: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    borderWidth: 0.5,
    backgroundColor: 'green',
    borderColor: "#888",
    borderRadius: 5,
  },

  navBtnText: {
    fontSize: 17,
    fontWeight: "500",
  },
});
