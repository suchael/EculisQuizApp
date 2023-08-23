import React, { useState, useEffect } from 'react';
import { View, Text, Modal, BackHandler, Button, StyleSheet } from 'react-native';

const MyModal = ({ visible, onClose, modalText }) => {
  useEffect(() => {
    const backAction = () => {
      onClose();
      return true; // Prevent default behavior of back button
    };

    if (visible) {
      BackHandler.addEventListener('hardwareBackPress', backAction);
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, [visible, onClose]);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>{modalText}</Text>
          <Button title="O8K" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  
  const messageBox = ()=> {
  	return(
  		<View style = {{borderWidth:2, height: 400, width:  300}}>
  		</View>
	  );
  };
  const instruction = "Note: ";
  return (
    <View style={styles.container}>
      <Button title="OK" onPress={toggleModal} />
      <MyModal
        visible={modalVisible}
        onClose={toggleModal}
        modalText= {messageBox()}
      />
    </View>
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
    elevation: 5,
  },
});

export default App;
