
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const NUMBER = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  51, 52, 53, 54, 55, 56, 57, 58, 59, 60
];


export default function NumberPickerModal(){
  const [selectedNumber, setSelectedNumber] = useState(40);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectNumber = (number) => {
    setSelectedNumber(number);
    closeAndResetModal();
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (modalVisible) {
        closeAndResetModal();
        return true; // Prevent default behavior (exit the app)
      }
      return false; // Let the default behavior continue (back navigation)
    });

    return () => backHandler.remove();
  }, [modalVisible]);

  const renderNumber = (number) => (
    <TouchableOpacity key={number} style={styles.option} onPress={() => selectNumber(number)}>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{number}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    	<View style ={{flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 8}}>
    		<Text style ={{fontSize: 18, fontWeight: "600"}}>Number of Questions</Text>
    		
    		<TouchableHighlight
        		onPress={openModal}
        		underlayColor="lightgray"
        		style={{width: 100, borderWidth: 2, borderRadius: 4, backgroundColor: "lightgray"}}
      	  >
        		<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 4}}>
          			<Text style={{ fontWeight: "700", fontSize: 18 }}>{selectedNumber}</Text>
          			<Fontisto name="angle-down" size={16} color="black" />
        		</View>
      	</TouchableHighlight>
    	</View>

      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
      
      {/*Modal Wrapper*/}
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <ScrollView>
              		{NUMBER.map(renderNumber)}
              </ScrollView>
            </View>
          </View>
        </TouchableHighlight>
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
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    
  },
  modal: {
    width: "40%",
    height: "64%",
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  pickerContainer: {
    flex: 1,
  },
  option: {
    padding: 10,
    //borderBottomWidth: 1.4,
    borderBottomColor: 'lightgray',
    justifyContent: "center",
    alignItems: "center",
    
    
  },
  
});





