import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  StyleSheet,
  BackHandler,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';


// My imoort
import UnderLineTextBtn from '../ExamMode/UnderLineTextBtn.js';




export default function FindFrndByUsernameModal({visible, onClose }) {
  const navigation = useNavigation();
  const route = useRoute();
 
  const [inputValue, setInputValue] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

   const handleFindBtnPress=()=>{
   	console.log(inputValue)
   	onClose()
   	setInputValue("")
   	navigation.setParams({ showTopicBar: true });
	}
	
  const openModal = ()=>{
  	setModalVisible(true);
  }
  const closeModal = ()=>{
  	setModalVisible(false);
  }
  
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
      {/* Modal Wrapper */}
      <View style={styles.blurBackground}>
        <TouchableWithoutFeedback onPress={onClose}>
          {/* Modal Content */}
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalViewContent}>
              	<View style ={{alignItems: "center"}}>
              		<Text style={styles.modalTitle}>Multiplayer</Text>
              	</View>
                <Text style={styles.modalSubtitle}>
                  Enter your friend's <Text style={styles.boldText}>Username</Text>
                </Text>
              </View>
              <View style={styles.row}>
                <TextInput
                  style={styles.input}
                  placeholder="E.g ScAh556"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
                <TouchableOpacity style={styles.findBtn} onPress={handleFindBtnPress}>
                  <Text style={styles.findBtnText}>Find</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.cantFindText}>
                Don't know your username? <UnderLineTextBtn text="Click Me" goTo="Profile" closeModal={onClose}/>
              </Text>
              <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                <Text style={styles.cancelBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  blurBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
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
    minWidth: 260,
    //borderWidth: 3,
    //borderColor: "blue",
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 15,
  },
  modalSubtitle: {
    fontSize: 20,
    marginTop: 9,
    marginBottom: 8,
  },
  boldText: {
    fontSize: 19,
    fontWeight: 'bold',
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
    fontSize: 17,
  },
  findBtn: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  findBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
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
  cancelBtnText:{
  	fontSize: 17,
  	fontWeight: "600",
  },
  cantFindText: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 18,
    marginBottom: 2,
  },
});
