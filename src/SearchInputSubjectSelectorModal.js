import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, Modal, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { Fontisto } from '@expo/vector-icons';

const SUBJECTS = [
  "English Language",
  "Mathematics",
  "Science",
  "History",
  "Geography",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Literature",
  "Art",
  "Music",
  "Physical Education",
  "Economics",
  "Foreign Language"
];



export default function MinAndHourModal(){
  const [selectedSubject, setSelectedSubject] = useState("Choose a category");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeAndResetModal = () => {
    setModalVisible(false);
  };

  const selectNumber = (subject) => {
    setSelectedSubject(subject);
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

  const renderSubject = (subject) => (
    <TouchableHighlight key={subject} underlayColor= "lightgray" style={styles.option} onPress={() => selectNumber(subject)}>
      <Text style={{ fontSize: 17, fontWeight: "500" }}>{subject}</Text>
    </TouchableHighlight>
  );

  return (
    <View style={[styles.container, {backgroundColor: "transparent"}]}>
      <TouchableOpacity 
      		  onPress={openModal}
        		underlayColor="lightgray"
				style ={{borderWidth: 2, borderColor: "#888", borderRadius: 6, paddingHorizontal: 16, paddingVertical: 8, width: "100%", backgroundColor: "white", }}
	  >
      		<View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center",}}>
      			<Text style = {{fontSize: 16, fontWeight: "600"}}>{selectedSubject}</Text>
      			<Fontisto name="angle-down" size={16} color="black" />
      		</View>
      </TouchableOpacity>
    
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeAndResetModal}>
      
      {/*Modal Wrapper*/}
        <TouchableHighlight
          style={{ flex: 1 }}
          onPress={closeAndResetModal}
          activeOpacity={1} 
          underlayColor="transparent"
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modal}>
              <ScrollView>
						{SUBJECTS.map(renderSubject)}
              </ScrollView>
            </View>
          </View>
        </TouchableHighlight>
        {/* Closing: Modal Wrapper*/}
        
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
    width: "90%",
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





