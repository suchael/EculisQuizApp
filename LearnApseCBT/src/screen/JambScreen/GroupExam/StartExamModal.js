import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Icons
import { Entypo } from '@expo/vector-icons';

// my import



const StartExamModal = ({ visible, onClose }) => {
  const navigation = useNavigation();
  const modalHeight = "70%"; // Make the modal 70% of the screen height
  const [userName, setUserName] = useState(''); // State for exam title


  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        	<View style={[styles.overlay, {borderWidth: 0}]} />
      </TouchableWithoutFeedback>
      <View style={[styles.modal, { height: modalHeight}]}>
        <View style={styles.content}>
          <View style={styles.exitButton}>
            <TouchableHighlight
              onPress={onClose}
              underlayColor="#9999"
              style={{
                height: 60,
                width: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                marginTop: -8,
                marginRight: -10,
              }}
            >
              <Entypo name="cross" size={30} color="gray" />
            </TouchableHighlight>
          </View>
          <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20, }}>
          <View style={{ flex: 1, paddingBottom: 10}}>
            <Text style={[styles.modalText, {textAlign: "justify", fontSize: 20, fontWeight: "600"}]}>
              EdPlug Mock
            </Text>
            
            <Text style={[styles.modalText, { fontSize: 17, fontWeight: "600"}]}>
              	Created by:{" "}
              	<Text style={[styles.modalText, { fontWeight: "500"}]}>
              		Mr Daniel
            	  </Text>
            </Text>
            
            <Text style={[styles.modalText, { fontSize: 17, fontWeight: "600"}]}>
              	Duration:{" "}
              	<Text style={[styles.modalText, { fontWeight: "500"}]}>
              		1hr 30mins
            	  </Text>
            </Text>

            <Text style={[styles.headerText, {marginTop: 15, marginBottom: 5}]}>Subjects</Text>
            <Text style={[styles.modalText, { marginLeft: '4%', marginBottom: -8, fontSize: 15, fontWeight: "bold" }]}>
              • English Language: 60
              {'\n'}
              • Physics: 40
              {'\n'}
              • Biology: 40
              {'\n'}
              • Chemistry: 40
              {'\n'}
            </Text>
            <Text style={[styles.headerText, { marginTop: 0 }]}>Total: <Text style={[styles.modalText, { fontWeight: "normal" }]}>180 questions </Text></Text>
            
            {/*Username  */}
      		<View style ={{marginTop: 16}}>
      				<Text style ={{fontSize: 17, fontWeight: "600", paddingLeft: 20,}}>Username</Text>
      				<TextInput 
							placeholder="Enter your LearnApse username"
							onChangeText={(text) => setUserName(text)} // Update exam title state
          				  style={{paddingLeft: 20, backgroundColor: "lightgray", color: "black", fontSize: 16, marginTop: -2, height: 42, borderRadius: 35, borderWidth: 2, borderColor: "#777",}}
					   />
      		</View>
      		{/*Closing - username */}

            </View>
          </ScrollView>
          <TouchableOpacity
              style={styles.startButton}
              onPress={() => {
                onClose();
                navigation.navigate("ExamShowQuestion");
              }}
            >
              <Text style={styles.buttonText}>Start Exam</Text>
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  exitButton: {
    height: 34,
    marginTop: -8, paddingRight: 12,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingTop: 20,
    
  },
  content: {
    flex: 1,
    marginBottom: 0,
    backgroundColor: "transparent", 
  },
  headerText: {
    fontSize:  17, // Adjust as needed for responsive font size
    fontWeight: 'bold',
    marginBottom: '2%', // Adjust as needed for responsive spacing
  },
  modalText: {
    fontSize:  16, // Adjust as needed for responsive font size
    marginBottom: '2%', // Adjust as needed for responsive spacing
  },
  startButton: {
    backgroundColor: 'blue',
    marginHorizontal: 20,
    marginBottom: 10, 
    paddingVertical: 10, // Adjust as needed for responsive padding
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17, // Adjust as needed for responsive font size
    fontWeight: 'bold',
  },
});

export default StartExamModal;
