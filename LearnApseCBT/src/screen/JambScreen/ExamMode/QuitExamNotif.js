import React, { useState, useEffect } from 'react';
import { View, Text, Modal, 
				TextInput, TouchableOpacity, 
				StyleSheet, BackHandler, Platform,
} from 'react-native';




export default function QuitExamNotif({ navigation, visible, PASSWORD, inputValue, setInputValue, handleSubmit, closeModal }){
	const keyboardType = Platform.OS === 'ios' ? 'number-pad' : 'numeric';

	useEffect(() => {
  const backHandlerListener = BackHandler.addEventListener('hardwareBackPress', () => {
    closeModal(); // Call the closeModal function to hide the modal
    return true; // Prevent default back behavior
  });

  return () => {
    backHandlerListener.remove(); // Remove the event listener when the component unmounts
  };
}, []);


  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        {/* Blurred Background */}
        <View style={styles.blurBackground} />

        {/* Modal Content */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ minWidth: 260,}}>
              <View style={styles.modalViewTextTitle}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>End Exam?</Text>
              </View>
              <Text style={{ fontSize: 15.5, marginTop: 7 }}>Are you sure you want to End or Submit this exam? </Text>
              <Text style={{ fontSize: 16, marginTop: 15, marginBottom: 8 }}>
                Type{"  "}
				<Text style={{ fontSize: 18, fontWeight: 'bold' }}>{PASSWORD}</Text>{"  "}to Submit
              </Text>
            </View>
            <View style={styles.row}>
              <TextInput
				keyboardType={keyboardType}
				autoCompleteType="off"
				autoComplete = "off"
				autoCorrect={false} 
                style={styles.input}
                placeholder={PASSWORD}
                value={inputValue}
                onChangeText={setInputValue}
              />
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={[styles.submitAndCancelBtnText, { color: 'white' }]}>Submit</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.cancelButton} onPress={closeModal}>
              <Text style={styles.submitAndCancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 25,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalViewTextTitle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 6,
    fontSize: 16
  },
  submitButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  cancelButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'lightgray',
    maxWidth: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  submitAndCancelBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  blurBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent black
  },
});


