import React, { useState, useEffect } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';

const App = ({ navigation, visible }) => {
  const [modalVisible, setModalVisible] = useState(visible);
  const [inputValue, setInputValue] = useState('');

  const handleBackPress = () => {
    if (!modalVisible) {
      setModalVisible(true); // Open the modal
      return true; // Prevent default back behavior
    }
    return false; // Allow default back behavior
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [modalVisible]);

  const closeModal = () => {
    setModalVisible(false);
    setInputValue('');
  };

  const PASSWORD = '555';
  const handleSubmit = () => {
    if (inputValue === PASSWORD) {
      closeModal();
      navigation.goBack(); // Navigate to the previous screen
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>End Exam Btn</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        {/* Blurred Background */}
        <View style={styles.blurBackground} />

        {/* Modal Content */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ minWidth: 260 }}>
              <View style={styles.modalViewTextTitle}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>End Exam?</Text>
              </View>
              <Text style={{ fontSize: 15.5, marginTop: 7 }}>Are you sure you want to End or Submit this exam? </Text>
              <Text style={{ fontSize: 16, marginTop: 9, marginBottom: 5 }}>
                Type <Text style={{ fontSize: 17, fontWeight: 'bold' }}>{PASSWORD}</Text> to Submit
              </Text>
            </View>
            <View style={styles.row}>
              <TextInput
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
    </View>
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
    padding: 10,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
  },
});

export default App;
