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
  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight * 0.70; // Make the modal 70% of the screen height

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight }]}>
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
          <ScrollView>
          <View style={{ flex: 1}}>
            <Text style={styles.headerText}>Note:</Text>
            <Text style={styles.modalText}>
              To give you an exam feeling and seriousness, we ensured that you cannot use multiple tabs like internet browsers and so on. Attempting to do so would  submit your scores online. {"\n\n"}
			  Be informed that Every score in this section is also available online to everyone via  <UnderLineTextBtn text="National Watchers" goTo="NationalWatchers" closeModal={onClose}/>
            </Text>
            <Text style={[styles.headerText, {marginTop: 4, marginBottom: 0}]}>Your Subjects:</Text>
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
    marginTop: -12,
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
    flex: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    left: 20,
    right: 20,
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
