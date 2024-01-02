import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons
import { Entypo } from '@expo/vector-icons';

// my import
import UnderLineTextBtn from "./UnderLineTextBtn.js";

const ExamInstructionModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const modalHeight = "70%"; // Make the modal 70% of the screen height

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        	<View style={[styles.overlay, {borderWidth: 0}]} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight}]}>
        <View style={styles.content}>
          <View style={styles.exitButton}>
            <TouchableHighlight
              onPress={onClose}
              underlayColor="#9999"
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: -8,
                marginRight: -10,
              }}
            >
              <Entypo name="cross" size={30} color="gray" />
            </TouchableHighlight>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, }}>
          <View style={{ flex: 1, paddingBottom: 10}}>
            <Text style={[styles.modalText, {textAlign: "justify"}]}>
			  Be reminded that your total score in this section is publicly visible to everyone.{"\n\n"}
			  Check the <UnderLineTextBtn text="Hall of Fame" goTo="HallOfFame" closeModal={onClose}/> section to see your ranking.{"\n\n"}
			  Attempting to use browsers or multiple tabs or any form of exam malpractice would  submit your scores immediately.
            </Text>
            <Text style={[styles.headerText, {marginTop: 4, marginBottom: 5}]}>Your subject combination:</Text>
            <Text style={[styles.modalText, { marginLeft: '4%', marginBottom: -8, fontSize: 15, fontWeight: "bold" }]}>
              • English + Life Changer Prose: 60
              {'\n'}
              • Physics: 40
              {'\n'}
              • Biology: 40
              {'\n'}
              • Chemistry: 40
              {'\n'}
            </Text>
            <Text style={[styles.headerText, { marginTop: 0 }]}>Total: <Text style={[styles.modalText, { fontWeight: "normal" }]}>180 questions </Text></Text>
            <Text style={[styles.headerText, { marginTop: 0 }]}>Duration: <Text style={[styles.modalText, { fontWeight: "normal" }]}> 2 hours (120 minutes) </Text></Text>
            
            </View>
          </ScrollView>
          <TouchableOpacity
              style={styles.startButton}
              onPress={() => {
                onClose();
                navigation.navigate("ExamShowQuestion");
              }}
            >
              <Text style={styles.buttonText}>Start Exam</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  exitButton: {
    height: 34,
    marginTop: -8, paddingRight: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: 20,
    
  },
  content: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "transparent", 
  },
  headerText: {
    fontSize:  17, // Adjust as needed for responsive font size
    fontWeight: 'bold',
    marginBottom: '2%', // Adjust as needed for responsive spacing
  },
  modalText: {
    fontSize:  16, // Adjust as needed for responsive font size
    marginBottom: '2%', // Adjust as needed for responsive spacing
  },
  startButton: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
    marginBottom: 10, 
    paddingVertical: 10, // Adjust as needed for responsive padding
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17, // Adjust as needed for responsive font size
    fontWeight: 'bold',
  },
});

export default ExamInstructionModal;