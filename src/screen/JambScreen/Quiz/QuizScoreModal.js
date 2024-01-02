import React, { useContext} from 'react';

import { Modal, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


//My import
import {ScoreContext} from "./QuizUseContext/Context.js";


export default function ScoreModal({ visible, onClose }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const { isAnswerCorrect} = useContext(ScoreContext); // return true or false if user is correct from QuizQuestionScreen.js

  const isUserCorrect = isAnswerCorrect; // Turn this to True or false to see the changes wrong or right answer on the modal

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ backgroundColor: 'rgba(0,0,0,0.6)', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' , }} onPress={onClose}>
          <View style={{borderRadius: 15, backgroundColor: 'white', padding: 10, height: '45%', width: '85%', justifyContent: 'space-between', alignItems: 'center' }}>
            
              <Text style={{ marginVertical: 5, fontSize: 20, fontWeight: '600', marginTop: 12,  textAlign: "center"}}>Correct Answer: B</Text>
              
                <View style={{ backgroundColor: isUserCorrect? "lightgreen" : "pink", borderColor: isUserCorrect? "green" : "red", borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 10, height: "80%", marginBottom: 7}}>
                  {isUserCorrect ? (
                    <>
                      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 20 }}>You are correct</Text>
                      <Ionicons name="ios-checkmark-circle-sharp" size={60} color="green" />
                    </>
                  ) : (
                    <>
                      <Text style={{ fontSize: 18, fontWeight: '600' , marginBottom: 20}}>You are Wrong</Text>
                      <Entypo name="circle-with-cross" size={60} color="red" />
                    </>
                  )}
                </View>
            
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
