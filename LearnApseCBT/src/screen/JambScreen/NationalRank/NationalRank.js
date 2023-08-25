import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  Button,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBackButton = () => {
    if (modalVisible) {
      closeModal();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, [modalVisible]);

  return (
    <View style={styles.container}>
      <Button title="Show Modal" onPress={showModal} />
      <MyModal visible={modalVisible} onClose={closeModal} />
    </View>
  );
};

const MyModal = ({ visible, onClose }) => {
  const windowHeight = Dimensions.get('window').height;
  const modalHeight = windowHeight * 0.3;

  const handleRadioPress = () => {
    // Handle radio button selection
  };

  const handleSubmit = () => {
    // Handle submit button press
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>Error?</Text>
          <Text>Select all that apply:</Text>
          <TouchableOpacity onPress={handleRadioPress}>
            {/* Radio button component */}
          </TouchableOpacity>
          {/* Repeat the above for other options */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
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
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -Dimensions.get('window').width * 0.5 }, { translateY: -Dimensions.get('window').height * 0.15 }],
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
