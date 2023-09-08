import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function ErrorQuestion({showModal, modalVisible,  hideModal, toggleOption, selectedOptions}) {
  return (
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={hideModal}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={hideModal}
        >
          <View style={styles.modalContent}>
            <Text style={styles.heading}>Error?</Text>
            <Text style={styles.subHeading}>Report this Question</Text>

            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOptions.includes('The answer supplied is wrong')
                    ? styles.selectedRadioButton
                    : null,
                ]}
                onPress={() => toggleOption('The answer supplied is wrong')}
              >
                <Text style ={{fontSize: 16, fontWeight: "600"}}>The answer supplied is wrong</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOptions.includes('Incorrect or poor explanation')
                    ? styles.selectedRadioButton
                    : null,
                ]}
                onPress={() => toggleOption('Incorrect or poor explanation')}
              >
                <Text style ={{fontSize: 16, fontWeight: "600"}}>Incorrect or poor explanation</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.radioButton,
                  selectedOptions.includes(
                    'Question or diagram is not properly formatted'
                  )
                    ? styles.selectedRadioButton
                    : null,
                ]}
                onPress={() =>
                  toggleOption('Question or diagram is not properly formatted')
                }
              >
                <Text style ={{fontSize: 16, fontWeight: "600"}}>Question or diagram is not properly formatted</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={hideModal} style={styles.cancelButton}>
                <Text style ={{fontSize: 17, fontWeight: "bold", color: "white"}}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={hideModal} style={styles.submitButton}>
                <Text style ={{fontSize: 17 ,fontWeight: "bold", color: "white"}}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 17,
    fontWeight: "500",
    marginTop: 10,
  },
  radioContainer: {
    marginTop: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedRadioButton: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 10, 
    paddingVertical: 4,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
  },
  submitButton: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
});


