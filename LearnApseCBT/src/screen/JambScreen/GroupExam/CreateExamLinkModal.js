import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
  TextInput,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function CreateExamLinkModal({ visible, onClose }){
  const navigation = useNavigation();
  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight * 0.47; //Adjust the height of the Modal

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight }]}>
      
      	{/* Exit Button */}
        <TouchableHighlight 
					onPress={onClose} 
					style={styles.exitButton}
					underlayColor="lightgray"
			 		activeOpacity={0.9}
		>
          	<Entypo name="cross" size={30} color="gray" />
        </TouchableHighlight>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.heading}>Create Exam Link</Text>
          <Text style={styles.title}>Enter exam title</Text>
          <TextInput
            style={styles.inputField}
            placeholder="E.g LearnApse Mock"
            placeholderTextColor="gray"
          />
          <Text style={styles.title}>Created by</Text>
          <TextInput
            style={styles.inputField}
            placeholder="E.g Mr Felix"
            placeholderTextColor="gray"
          />
          <Text style={styles.instruction}>
            Note: To reduce exam malpractice during the session of this exam, students cannot use multiple tabs or web browsers. Attempting to do so would quit the exam.
          </Text>
          <TouchableOpacity
            style={styles.continueButton}
            onPress={() => {
              onClose();
              navigation.navigate("AnotherScreen");
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 20,
  },
  exitButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 10,
    zIndex: 1,
    borderRadius: 15,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 6,
    fontSize:16,
    marginTop: 5,
    marginBottom: 15,
  },
  instruction: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateExamLinkModal;
