import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';


export default function ErrorQuestion({ modalVisible, hideModal, toggleOption, selectedOptions }) {
  const options = [
    'The answer supplied is wrong',
    'Incorrect or poor explanation',
    'Question or diagram is not properly formatted',
  ];

  const renderOption = (option) => {
    return (
      <TouchableHighlight
		underlayColor="lightgray"
        key={option}
        style={[
          styles.radioButton,
          selectedOptions.includes(option) ? styles.selectedRadioButton : null,
        ]}
        onPress={() => toggleOption(option)}
      >
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{option}</Text>
      </TouchableHighlight>
    );
  };

  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={hideModal}>
      <View style={styles.modalContainer} activeOpacity={1} onPressOut={hideModal}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>Error?</Text>
          <Text style={styles.subHeading}>Report this Question</Text>

          <View style={styles.radioContainer}>
				{options.map(renderOption)}
		 </View>

          <View style={styles.buttonContainer}>
            <TouchableHighlight onPress={hideModal} style={styles.cancelButton}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Cancel</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={hideModal} style={styles.submitButton}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Submit</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}

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
    fontWeight: '600',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 17,
    fontWeight: '500',
    marginTop: 10,
    textAlign: "center",
  },
  radioContainer: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#777",
    paddingHorizontal: 5,
    paddingVertical: 7
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    //borderWidth: 2,
    height: 50
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
