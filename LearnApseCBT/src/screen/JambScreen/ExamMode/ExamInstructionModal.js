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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons
import { Entypo } from '@expo/vector-icons';

// my import 
import UnderLineTextBtn from "./UnderLineTextBtn.js";


const ExamInstructionModal = ({ visible, onClose}) => {
  const navigation = useNavigation();
  console.log(navigation)
  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight * 0.70;  // Make the modal 70% of the screen height  
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight }]}>
        <View style={styles.content}>
          <View style={styles.exitButton}>
          	<TouchableHighlight 
						onPress = {onClose} 
						underlayColor="#9999"
						style= {{height: 60, width: 60, borderRadius:30, justifyContent: "center", alignItems: "center", marginTop: -8, marginRight: -10}}
			 >
          			<Entypo name="cross" size={30} color="gray" />
          	</TouchableHighlight>
		  </View>
          <Text style={styles.headerText}>Instruction:</Text>
          <Text style={styles.modalText}>
            This is a strict Exam mode. Attempting to minimise your phone a maximum of 3 times will quit the exam and your score would
            be submitted online once there is an internet connection. {"\n\n"}Be informed that Every score in this section is also available online to everyone via <UnderLineTextBtn text = "National Watchers" goTo="NationalWatchers"/>.
          </Text>
          <Text style={styles.headerText}>Your Subjects:</Text>
          <Text style={[styles.modalText, {marginLeft: 12, marginBottom:-8}]}>
            • English: 60
            {'\n'}
            • Physics: 40
            {'\n'}
            • Biology: 40
            {'\n'}
            • Chemistry: 40
            {'\n'}
          </Text>
          <Text style={[styles.headerText, {marginTop:0}]}>Total:  <Text style={[styles.modalText, {fontWeight: "normal"}]}>180 questions </Text></Text>
          <Text style={[styles.headerText, {marginTop:0}]}>Duration:  <Text style={[styles.modalText, {fontWeight: "normal"}]}> 2 hours (120 minutes) </Text></Text>
          <TouchableOpacity 
					style={styles.startButton} 
					onPress= {()=>{onClose()
												navigation.navigate("ExamShowQuestion")
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
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 20,
  },
  content: {
    //marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 8,
  },
  startButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 4
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ExamInstructionModal;
