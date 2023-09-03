import React, { useState } from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  StyleSheet,
} from 'react-native';

// My Import
import UnderLineTextBtn from "./UnderLineTextBtn.js";


function ReadMoreModal({ visible, onClose}){
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={visible}
        onRequestClose={onClose}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, width: '100%' }}
            onPress={onClose}>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 10,
              width: '80%',
              maxHeight: '80%',
              borderColor: 'gray',
              borderWidth: 1,
            }}
          >
            <ScrollView>
       			<MessageBox/>
            </ScrollView>
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: '100%',
                padding: 10,
                backgroundColor: 'blue',
                borderRadius: 15,
                alignItems: 'center',
              }}
              onPress={onClose}
            >
              <Text style={{ color: 'white' , fontSize:16, fontWeight: "bold"}}>OK</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ flex: 1, width: '100%' }}
            onPress={onClose}
          ></TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};


function MessageBox(){
    return (
      <View style={styles.messageBox}>
        <View style={styles.messageHeader}>
          <Text style={styles.messageHeaderText}>
            Attention:{' '}
            <Text style={styles.messageNormalText}>
              This is a strict Exam Mode. To simulate the real world, Your score will be visible online to everyone checking the{' '}
              <UnderLineTextBtn text="National Score Ranking."  goTo = "National score ranking"/>
            </Text>
          </Text>
        </View>
        <View style={styles.messageContent}>
          <Text style={styles.messageNormalText}>
            Just like in the actual exam, in this Exam Mode, the English Language section consists of a total of 60 questions and is
            compulsory by default. Other subjects contain 40 questions each. You are expected to select three additional subjects of
            your choice to make a total of four subjects.
          </Text>
        </View>
        <Text style={styles.messageNormalText}>
          If you wish to override this setting, consider choosing the <UnderLineTextBtn text="Customised Test" goTo = "Custom test" /> option.
        </Text>
      </View>
    );
  };


const styles = StyleSheet.create({
	messageBox: {
    	borderWidth:2, 
		borderRadius: 10, 
		padding:6, 
		paddingBottom: 10,
    	backgroundColor: 'white',
  },
  messageHeader: {
    marginBottom: 8,
  },
  messageHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageNormalText: {
    fontSize: 16.5,
    fontWeight: '400',
    marginTop: 12
  },
});

export default ReadMoreModal;